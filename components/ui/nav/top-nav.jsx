import React from "react";
import { ModeToggle } from "../darkMode";
import Link from "next/link";
import Image from "next/image";

export default function TopNav() {
  return (
    <nav className="px-2 py-3 flex flex-row justify-between items-center shadow dark:shadow-primary">
      <Link href="/">
        <Image alt="" src="/logo.svg" width={100} height={100} />
      </Link>
      <ModeToggle />
    </nav>
  );
}
