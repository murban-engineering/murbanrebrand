"use client";

import { FormEvent, useState } from "react";
import { Header } from "@/components/header";

export default function ContactPage() {
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);
    setTimeout(() => setIsSending(false), 900);
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="max-w-6xl mx-auto px-6 pt-36 pb-12 grid md:grid-cols-2 gap-6">
        <article className="border rounded-xl p-6">
          <h1 className="text-4xl font-bold">Contact</h1>
          <ul className="mt-6 space-y-2 text-muted-foreground">
            <li>Mombasa HQ</li>
            <li>Nairobi Office</li>
          </ul>
          <ul className="mt-6 space-y-2 font-medium">
            <li>24hr Response</li>
            <li>Free Consultation</li>
            <li>On-Site Service</li>
          </ul>
        </article>

        <form onSubmit={handleSubmit} className="border rounded-xl p-6 space-y-4">
          <input className="w-full border rounded-md px-3 py-2" placeholder="Name" required />
          <input className="w-full border rounded-md px-3 py-2" placeholder="Email" type="email" required />
          <textarea className="w-full border rounded-md px-3 py-2 min-h-28" placeholder="Message" required />
          <button className="rounded-full bg-primary text-primary-foreground px-5 py-2.5" type="submit">
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </section>
    </main>
  );
}
