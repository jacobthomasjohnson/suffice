"use client";

import { PageButton } from "../components/ui/pagebutton";
import { Button } from "../components/ui/button";
import pageData from "../api/data/pageData";
import { useRef, useState, useEffect } from "react";

import templates from "../api/data/templates";
import TemplateListItem from "../components/TemplateListItem";

export const Templates = () => {
  return (
    <>
      <h1>Templates</h1>
      <hr />
      <hr />
      {templates.map((template, index) => (
        <TemplateListItem
          key={index}
          title={template.title}
          purpose={template.purpose}
          createdBy={template.createdBy}
          timesUsed={template.timesUsed}
        />
      ))}
    </>
  );
};

export default Templates;
