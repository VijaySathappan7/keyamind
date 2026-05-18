import { useSyncExternalStore } from "react";

/**
 * A highly performant, SSR-safe media query hook that listens to viewport changes
 * utilizing React 19's useSyncExternalStore for zero cascading renders.
 * @param {string} query - The CSS media query (e.g. '(max-width: 1023px)')
 * @returns {boolean} Whether the media query matches the current viewport.
 */
export default function useMediaQuery(query) {
  return useSyncExternalStore(
    (callback) => {
      if (typeof window === "undefined") return () => {};
      const media = window.matchMedia(query);
      media.addEventListener("change", callback);
      return () => media.removeEventListener("change", callback);
    },
    () => {
      if (typeof window === "undefined") return false;
      return window.matchMedia(query).matches;
    },
    () => false // Server-side fallback (SSR)
  );
}
