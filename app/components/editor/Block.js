"use client";
import React, { useEffect } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const Block = ({ id, content, onContentChange, onFocus }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content,
    onUpdate: ({ editor }) => {
      onContentChange(id, editor.getHTML());
    },
  });

  // When the block is clicked, call onFocus with this block's editor
  const handleClick = (e) => {
    // Prevent the drag events (which are attached to the drag handle) from triggering when clicking inside the editor content.
    e.stopPropagation();
    if (editor) {
      onFocus(editor);
    }
  };

  return (
    <div
      className="block cursor-text"
      onClick={handleClick}
    >
      <EditorContent editor={editor} onMouseDown={(e) => e.stopPropagation()} />
    </div>
  );
};

export default Block;
