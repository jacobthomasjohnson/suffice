"use client";

import { useState } from "react";
import Image from "next/image";

export const Button = ({ children, icon }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="p-4 relative overflow-hidden border transition-all duration-300 border-neutral-700 rounded-md hover:bg-neutral-900 hover:border-blue-100"
    >
      {/* Text before hover */}
      <span
        className={`pointer-events-none text-blue-100 transition-all duration-300 absolute block ${
          hovered ? "translate-y-0 opacity-1" : "-translate-y-12 opacity-0"
        }`}
      >
        <div className="flex gap-2">
          {icon ? (
            <Image src={icon} width={12} height={12} alt={`${icon}`} />
          ) : null}
          {children}
        </div>
      </span>

      <span className={`relative opacity-0`}>
        <div className="flex gap-2">
          {icon ? (
            <Image src={icon} width={12} height={12} alt={`${icon}`} />
          ) : null}
          {children}
        </div>
      </span>

      {/* Text during hover */}
      <span
        className={`pointer-events-none text-neutral-300 transition-all duration-300 absolute block ${
          hovered ? "translate-y-12 opacity-0" : "-translate-y-6 opacity-1"
        }`}
      >
        <div className="flex gap-2">
          {icon ? (
            <Image src={icon} width={12} height={12} alt={`${icon}`} />
          ) : null}
          {children}
        </div>
      </span>
    </button>
  );
};

export default Button;
