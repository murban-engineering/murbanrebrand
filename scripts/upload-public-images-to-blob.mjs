#!/usr/bin/env node
import { createReadStream } from "node:fs";
import { readdir, stat } from "node:fs/promises";
import path from "node:path";

const token = process.env.BLOB_READ_WRITE_TOKEN;
const publicDir = path.resolve("public");
const imageExtensions = new Set([".avif", ".gif", ".ico", ".jpg", ".jpeg", ".png", ".svg", ".webp"]);

if (!token) {
  console.error("Missing BLOB_READ_WRITE_TOKEN. Create/copy it from Vercel Blob and run this script again.");
  process.exit(1);
}

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(fullPath);
    } else if (entry.isFile() && imageExtensions.has(path.extname(entry.name).toLowerCase())) {
      yield fullPath;
    }
  }
}

async function upload(filePath) {
  const pathname = path.relative(publicDir, filePath).split(path.sep).join("/");
  const size = (await stat(filePath)).size;
  const url = new URL(`https://blob.vercel-storage.com/${pathname}`);
  url.searchParams.set("pathname", pathname);

  const response = await fetch(url, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "x-api-version": "11",
      "x-add-random-suffix": "0",
      "x-cache-control-max-age": "31536000",
      "content-type": "application/octet-stream",
    },
    body: createReadStream(filePath),
    duplex: "half",
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Failed to upload ${pathname}: ${response.status} ${details}`);
  }

  const result = await response.json();
  console.log(`${pathname}\t${size}\t${result.url}`);
}

for await (const filePath of walk(publicDir)) {
  await upload(filePath);
}
