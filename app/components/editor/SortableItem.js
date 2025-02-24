"use client";
import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Image from "next/image";

const SortableItem = ({ id, children }) => {
  const { setNodeRef, transform, transition, listeners } = useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="sortable-item rounded flex items-center"
    >
      <div
        className="drag-handle px-4 cursor-grab select-none bg-transparent transition-all duration-200 opacity-20 hover:opacity-80 hover:scale-125"
        {...listeners}
      >
        <Image src="/icon-drag.svg" height={16} width={16} alt="Drag Block" className="" />
        <span className=" text-sm text-neutral-600"></span>
      </div>
      <div className="grow block-content">{children}</div>
    </div>
  );
};

export default SortableItem;
