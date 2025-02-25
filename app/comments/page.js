"use client";

import { PageButton } from "../components/ui/pagebutton";
import { Button } from "../components/ui/button";
import pageData from "../api/data/pageData";
import { useRef, useState, useEffect } from "react";

export const Comments = () => {
  return (
    <>
      <h1>Comments</h1>
      <table className="w-full default-table comments-table">
        <thead>
          <tr>
            <td>
              Comment
            </td>
            <td>
              Author
            </td>
            <td>
              Date
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="table-link">
              I think we need to add a feature here.
            </td>
            <td className="table-link">
              Joe Smith
            </td>
            <td>
              12/22
            </td>
          </tr>
          <tr>
            <td className="table-link">
              Did anyone ever update this code?
            </td>
            <td className="table-link">
              Leo Johnson
            </td>
            <td>
              2/10
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Comments;
