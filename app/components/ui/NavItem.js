"use client";

import Image from "next/image";
import Link from "next/link";

export const NavItem = ({ icon, text, href }) => {
  return (
    <Link
      className="flex gap-[8px] items-center hover:text-blue-100 transition-all duration-100"
      href={href}
    >
      <Image src={icon} alt={text} width={12} height={12} />
      {text}
    </Link>
  );
};

export default NavItem;
