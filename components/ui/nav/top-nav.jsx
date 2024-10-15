"use client";
import React from "react";
import { ModeToggle } from "../darkMode";
import Link from "next/link";
import Image from "next/image";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { Button } from "../button";

export default function TopNav() {
  const { isSignedIn, user, isLoaded } = useUser();
  return (
    <nav className="px-2 py-3 flex flex-row justify-between items-center shadow dark:shadow-primary">
      <Link href="/">
        <Image alt="" src="/logo.svg" width={100} height={100} />
      </Link>
      <div className="flex flex-row items-center space-x-2">
        <ModeToggle />
        {isSignedIn && <Link href="/panel">Panel {user.firstName}</Link>}
        <SignedOut>
          <SignInButton className="bg-primary text-primary-foreground px-3 py-1" />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
