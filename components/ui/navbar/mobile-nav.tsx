import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Image src="/assets/menu.svg" width={30} height={30} alt="box" />
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2"> <Image src="/assets/cart.svg" width={30} height={30} alt="box" />  BOUTIQUE</SheetTitle>
          <SheetDescription>
          
            <ul className=" mt-10 text-xl h-screen flex flex-col gap-8 text-left " >
              <li className="flex items-center bg-green-300 p-4 rounded-3xl font-bold text-black gap-4 "><Image src="/assets/home.svg" width={30} height={30} alt="box" /> Menu</li>
              <li>Categories</li>
              <hr className="border-1 border-black" />
              <li>pants</li>
              <hr className="border-1 border-black" />
              <li>utilities</li>
              <hr className="border-1 border-black" />
              <li>Books</li>
              <hr className="border-1 border-black" />
              <li>Games</li>
              <hr className="border-1 border-black" />
              <li>Hoodies</li>
              <hr className="border-1 border-black" />
              <li>Chair</li>
              <hr className="border-1 border-black" />
              
            </ul>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
