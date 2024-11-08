import React from "react";
import { cn } from "../lib/utils";

export default function CheckBox({ label, value, onChange }) {
  return ( 
    <label
      className={cn(
        "px-[20px] cursor-pointer border border-slate-400 uppercase text-[15px] text-center",
        value ? "bg-black text-white" : ""
      )}
    >
      <input
        type="checkbox"
        className="hidden"
        checked={value}
        onChange={onChange}
      />
      {label}
    </label>
  );
}
