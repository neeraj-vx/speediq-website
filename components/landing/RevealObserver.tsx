"use client";

import { useEffect } from "react";

/* Adds `.in-view` to every `.reveal` element as it scrolls into the viewport,
   triggering the fade/slide-up transition from globals.css. Mounted once in the
   root layout. Includes a safety net so content can never stay hidden. */
export default function RevealObserver() {
  useEffect(() => {
    const reveal = (el: Element) => el.classList.add("in-view");

    const collect = () =>
      Array.from(document.querySelectorAll<HTMLElement>(".reveal:not(.in-view)"));

    if (typeof IntersectionObserver === "undefined") {
      collect().forEach(reveal);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal(entry.target);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -6% 0px" },
    );

    // Observe on the next frame so the page DOM is fully laid out first.
    const raf = requestAnimationFrame(() => collect().forEach((el) => observer.observe(el)));

    // Safety net: after 2.5s, reveal anything already within the viewport that
    // the observer somehow missed, so nothing is ever stuck invisible.
    const timer = window.setTimeout(() => {
      collect().forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight) reveal(el);
      });
    }, 2500);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return null;
}
