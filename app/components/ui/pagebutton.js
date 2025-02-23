"use client";

import Image from "next/image";

export const PageButton = ({ pageTitle, pageBody, prefix }) => {
  return (
    <div className="relative page-button w-[500px] h-[250px] border border-neutral-700 rounded-lg p-8 text-xl flex flex-col gap-4 hover:cursor-pointer overflow-hidden group opacity-90 hover:opacity-100">
      <div className="absolute w-full h-5/6 bg-gradient-to-b from-transparent to-background top-0"></div>
      <div className="absolute w-full h-1/6 bg-background bottom-0"></div>
      <div className="page-button-title group-hover:text-blue-100">
        <Image
          src="/icon-link.svg"
          width={12}
          height={12}
          alt={`Link`}
          className="inline mr-4"
        />
        <span className="font-bold">{prefix}</span> {pageTitle}
      </div>
      <div className="page-button-body  text-base">{pageBody}</div>
    </div>
  );
};

export default PageButton;
