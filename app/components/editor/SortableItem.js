"use client";
import React, { useEffect, useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Image from "next/image";
import { useRef } from "react";

const SortableItem = ({ id, children }) => {
  const { setNodeRef, transform, transition, listeners } = useSortable({ id });
  const deleteButton = useRef(null);
  const [deleteWidth, setDeleteWidth] = useState(0);
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  const [menuOpen, setMenuOpen] = useState(false);
  const openMenu = () => {
    setMenuOpen(!menuOpen);
  }
  useEffect(() => {
    if(menuOpen) {
        deleteButton.current.style = `width: ${deleteWidth}px`
    } else {
        deleteButton.current.style = "width: 0px";
    }
  }, [menuOpen]);
  useEffect(() => {
    setDeleteWidth(deleteButton.current.innerWidth);
  }, []);
  return (
    <div
      ref={setNodeRef}
      style={style}
      className="sortable-item rounded flex items-center"
    >
      <div
        className="drag-handle px-4 cursor-grab select-none bg-transparent transition-all duration-200 opacity-20 hover:opacity-80 hover:scale-125"
        onDoubleClick={openMenu}
        {...listeners}
      >
        
        <Image src="/icon-drag.svg" height={16} width={16} alt="Drag Block" className="" />
        <span className=" text-sm text-neutral-600"></span>
        
      </div>
      <div className={`mr-4 overflow-hidden transition-all duration-75 cursor-pointer ${menuOpen ? 'p-2 rounded-lg bg-[#6c2424] ' : 'p-0'}`} style={{
        width: "0px"
      }} ref={deleteButton}>Delete</div>

      <div className="grow block-content">{children}</div>
    </div>
  );
};

export default SortableItem;
