import React, { useEffect } from "react";

export function useOutsideClick(enabled, ref, func) {
  useEffect(() => {
    if (!enabled) return;

    const element = ref.current;

    if (!element) return;

    function handle(e) {
      if (element?.contains(e.target)) {
        func();
      }
    }

    document.addEventListener("click", handle);

    return () => {
      document.removeEventListener("click", handle);
    };
  }, [enabled, ref, func]);

  useEffect(() => {
    if (!enabled) return;
  }, [enabled]);
}
