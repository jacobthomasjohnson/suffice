"use client";

import { PageButton } from "../components/ui/pagebutton";
import { Button } from "../components/ui/button";
import pageData from "../api/data/pageData";
import { useRef, useState, useEffect } from "react";

export const Pages = () => {
  return (
    <>
      <h1>Pages</h1>
      <h2>Recent Pages</h2>
      <div className="flex w-full justify-items-start gap-2 flex-wrap">
        {pageData.map((page, index) => (
          <PageButton
            key={index}
            pageTitle={page.title}
            pageBody={page.body}
            prefix={page.prefix}
          />
        ))}
      </div>
    </>
  );
};

export default Pages;
