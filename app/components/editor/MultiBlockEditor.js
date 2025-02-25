"use client";
import React, { useState } from "react";
import Block from "./Block";
import MenuBar from "./MenuBar";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortableItem from "./SortableItem";
import Image from "next/image";

const MultiBlockEditor = () => {
  const [blocks, setBlocks] = useState([
    { id: "block-1", content: "<p>Block 1</p>" },
    { id: "block-2", content: "<p>Block 2</p>" },
  ]);

  const addBlock = () => {
    setBlocks([
        ...blocks,
        {
            id: "block-" + blocks.length + 1,
            content: "<p>Block " + (blocks.length + 1) + "</p>",
        }
    ])
  }

  // activeBlock stores the currently active block's editor instance
  const [activeBlock, setActiveBlock] = useState(null);

  const handleContentChange = (id, newContent) => {
    setBlocks((prevBlocks) =>
      prevBlocks.map((block) =>
        block.id === id ? { ...block, content: newContent } : block
      )
    );
  };

  const handleFocus = (id, editor) => {
    setActiveBlock({ id, editor });
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setBlocks((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <div>
      <MenuBar editor={activeBlock ? activeBlock.editor : null} />
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext
          items={blocks.map((b) => b.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="">
            {blocks.map((block) => (
              <SortableItem key={block.id} id={block.id}>
                <Block
                  id={block.id}
                  content={block.content}
                  onContentChange={handleContentChange}
                  onFocus={(editor) => handleFocus(block.id, editor)}
                />
              </SortableItem>
            ))}
            <div className="w-full flex items-center justify-center my-2 rounded opacity-0 hover:opacity-55 cursor-pointer hover:bg-[#222222] p-4 transition-all duration-75" onClick={addBlock}>
              <Image
                src="/icon-add.svg"
                height={16}
                width={16}
                alt="Add Block"
              />
            </div>
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default MultiBlockEditor;
