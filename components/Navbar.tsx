import React from "react";
import Image from "next/image";
import Logo from "@/public/logo.png";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

// TODO: Implement Mobile Nav

function Navbar() {
  return (
    <header className="px-6 py-2 flex justify-between items-center backdrop-blur bg-background/80">
      <Link href="/">
        <Image
          src={Logo.src}
          alt="shortcut-logo"
          width={50}
          height={50}
          className="w-8 h-8"
        />
      </Link>
      <nav>
        <Link href="/sign-in" className={buttonVariants({ variant: "ghost" })}>
          Sign In
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
