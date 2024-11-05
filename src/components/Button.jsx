import React from "react";

function Button({ text = "" }) {
  return (
    <button className="max-w-[200px] border-2 border-black px-4 py-2">
      <span className="sm:text-xl">{text}</span>
    </button>
  );
}

export default Button;
