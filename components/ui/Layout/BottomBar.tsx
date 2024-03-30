import Image from "next/image";
import Link from "next/link";
import React from "react";
import { 
  Sheet,
  SheetTrigger } from "@/components/ui/sheet";
import MobileNav from "../navbar/mobile-nav";

const BottomBar = () => {
  return (
    <footer className="fixed bottom-0 bg-white w-screen md:hidden px-9 py-3 flex justify-between items-center ">
     <MobileNav/>
      <Link href="#">
        <Image src="/assets/box.svg" width={30} height={30} alt="box" />
      </Link>
      <Link href="#">
        <Image src="/assets/user.svg" width={30} height={30} alt="user" />
      </Link>
      <Link href="#">
        <Image src="/assets/cart.svg" width={30} height={30} alt="cart" />
      </Link>
    </footer>
  );
};

export default BottomBar;
