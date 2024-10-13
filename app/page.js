import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/darkMode";
import Link from "next/link";
import React from "react";

export default function HomePage() {
  return (
    <div className="flex flex-row h-screen justify-center items-center">
      <Button asChild={true}>
        <Link href="/resume">Create Yor Resume</Link>
      </Button>
    </div>
  );
}
