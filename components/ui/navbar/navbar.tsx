"use client"
import Link from "next/link";

import MainNav from "@/components/ui/navbar/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/ui/navbar/navbar-actions";
import { useEffect, useState } from "react";
import { Category } from "@/types";


export const revalidate = 0;


const Navbar = ({ categories }: { categories: Category[] }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };
   



    return (
        <div className="border-b">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center ">
                    <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
                        <p className="font-bold text-xl"> BOUTIQUE </p>
                    </Link>
                    <button
                        onClick={toggleDrawer}
                        className="lg:hidden absolute right-4 top-1/2 transform -translate-y-1/2 focus:outline-none "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isDrawerOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            )}
                        </svg>
                    </button>
                    <div
                        className={`lg:flex flex-grow ${
                            isDrawerOpen ? "block bg-white z-10  text-black justify-center items-center absolute  top-20 py-4 w-60 " : "hidden "
                        }`}
                    >
                        <MainNav data={categories} />
                        <NavbarActions />
                        
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default Navbar;