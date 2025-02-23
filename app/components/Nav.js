"use client";

import Link from "next/link";
import Image from "next/image";

import NavItem from "./ui/NavItem";
import navItems from "../api/data/navItems";

export const Nav = () => {
  return (
    <div className="nav-item flex flex-col gap-4">
      <NavItem icon="/icon-dashboard.svg" text="Dashboard" href="/" />
      <NavItem icon="/icon-pages.svg" text="Pages" href="/pages" />
      <NavItem icon="/icon-templates.svg" text="Templates" href="/templates" />
      <NavItem icon="/icon-comments.svg" text="Comments" href="/comments" />
      <NavItem icon="/icon-search.svg" text="Search" href="/search" />
      <NavItem icon="/icon-settings.svg" text="Settings" href="/settings" />
    </div>
  );
};

export default Nav;
