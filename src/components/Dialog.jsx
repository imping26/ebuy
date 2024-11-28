import React, { useRef } from "react";
import { useOutsideClick } from "../hook/useOutsideClick";

export function Dialog({ isOpen, onClose }) {
  const elementRef = useRef(null);
  useOutsideClick(isOpen, elementRef, () => {
    onClose();
  });
  return isOpen ? (
    <div ref={elementRef} role="dialog">
      Dialog
    </div>
  ) : null;
}
