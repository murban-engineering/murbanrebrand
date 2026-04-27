"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

declare global {
  interface Window {
    google?: {
      maps?: {
        Map: new (
          element: HTMLElement,
          options: Record<string, unknown>
        ) => {
          fitBounds: (bounds: unknown) => void;
        };
        LatLngBounds: new () => {
          extend: (location: { lat: number; lng: number }) => void;
        };
        Marker: new (options: Record<string, unknown>) => unknown;
      };
    };
  }
}

type AfricaGoogleMapProps = {
  className?: string;
};

const officeLocations = [
  { name: "Nairobi", lat: -1.286389, lng: 36.817223 },
  { name: "Mombasa", lat: -4.043477, lng: 39.668206 },
  { name: "Accra", lat: 5.603717, lng: -0.186964 },
  { name: "Kampala", lat: 0.347596, lng: 32.58252 },
  { name: "Dar es Salaam", lat: -6.792354, lng: 39.208328 },
];

export function AfricaGoogleMap({ className }: AfricaGoogleMapProps) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [mapReady, setMapReady] = useState(false);
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    if (!apiKey || typeof window === "undefined" || !mapRef.current) {
      return;
    }

    const scriptId = "google-maps-script";

    const initializeMap = () => {
      if (!window.google?.maps || !mapRef.current) {
        return;
      }

      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 2, lng: 20 },
        zoom: 3,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
      });

      const bounds = new window.google.maps.LatLngBounds();

      const Marker = window.google.maps.Marker;

      officeLocations.forEach((location) => {
        new Marker({
          position: { lat: location.lat, lng: location.lng },
          map,
          title: location.name,
        });

        bounds.extend({ lat: location.lat, lng: location.lng });
      });

      map.fitBounds(bounds);
      setMapReady(true);
    };

    const existingScript = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (window.google?.maps) {
      initializeMap();
      return;
    }

    if (existingScript) {
      existingScript.addEventListener("load", initializeMap);
      return () => existingScript.removeEventListener("load", initializeMap);
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    script.async = true;
    script.defer = true;
    script.addEventListener("load", initializeMap);
    document.head.appendChild(script);

    return () => script.removeEventListener("load", initializeMap);
  }, [apiKey]);

  if (!apiKey) {
    return (
      <div className={className}>
        <Image
          src="/images/africa-map.svg"
          alt="Africa map showing Murban work regions"
          width={1200}
          height={900}
          className="h-auto w-full"
        />
      </div>
    );
  }

  return (
    <div className={className}>
      <div ref={mapRef} className="h-[320px] w-full bg-muted md:h-[420px]" aria-label="Google map of Africa" />
      {!mapReady ? (
        <p className="p-3 text-xs text-muted-foreground">Loading Google Maps...</p>
      ) : null}
    </div>
  );
}
