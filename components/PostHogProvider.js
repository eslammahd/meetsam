"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import posthog from "posthog-js";

let initialized = false;

function initPostHog() {
  if (typeof window === "undefined" || initialized) return;
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  if (!key) return; // no key configured — stay a no-op
  posthog.init(key, {
    api_host:
      process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://app.posthog.com",
    capture_pageview: false, // handled manually on route changes below
    capture_pageleave: true,
  });
  initialized = true;
}

function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === "undefined" || !pathname) return;
    if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) return;

    let url = window.location.origin + pathname;
    const qs = searchParams?.toString();
    if (qs) url += "?" + qs;

    posthog.capture("$pageview", { $current_url: url });
  }, [pathname, searchParams]);

  return null;
}

export default function PostHogProvider({ children }) {
  useEffect(() => {
    initPostHog();
  }, []);

  return (
    <>
      {/* useSearchParams must live inside a Suspense boundary */}
      <Suspense fallback={null}>
        <PageViewTracker />
      </Suspense>
      {children}
    </>
  );
}
