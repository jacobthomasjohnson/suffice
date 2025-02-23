"use client";

import { useState } from "react";

import Image from "next/image";

export const TemplateListItem = ({ title, purpose, createdBy, timesUsed }) => {
  const [isHovered, setIsHovered] = useState(false);
  const toggleHover = () => setIsHovered(!isHovered);
  return (
    <div
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      className="relative w-full border-b border-dashed hover:border-solid border-neutral-700 hover:border-blue-100 py-6 text-base flex flex-col gap-4 hover:cursor-pointer overflow-hidden group opacity-90 hover:opacity-100 transition-all duration-100"
    >
      <div className="text-neutral-300 group-hover:text-blue-100 transition-all duration-100 flex flex-col gap-2">
        <div className="font-bold text-xl flex items-center gap-3 transition-all duration-100">
          <div className="w-[16px] h-[16px] relative overflow-hidden">
            <Image
              src="/icon-templates.svg"
              width={16}
              height={16}
              alt={title}
              className={`absolute overflow-hidden top-0 left-0 transition-all duration-100 ${
                isHovered
                  ? "opacity-0 -translate-y-full"
                  : "opacity-100 -translate-y-0"
              }`}
            />
            <Image
              src="/icon-add.svg"
              width={16}
              height={16}
              alt={title}
              className={`absolute overflow-hidden top-0 left-0 transition-all duration-100 ${
                isHovered
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-full"
              }`}
            />
          </div>
          {title}
        </div>
        <div className="transition-all duration-100 font-light">{purpose}</div>
        <div className="">Author: {createdBy}</div>
        <div className="">Times Used: {timesUsed}</div>
      </div>
    </div>
  );
};

export default TemplateListItem;
