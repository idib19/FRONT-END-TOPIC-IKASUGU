"use client";

import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaGithub } from 'react-icons/fa';
import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";

const NavbarActions = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const router = useRouter();
    const cart = useCart();

    if (!isMounted) {
        return null;
    }

    return (
        <div className="  flex  ml-auto">
            <div className=" my-3  px-2   ">
                <FaGithub size={32} color="black" />
            </div>
            <div className=" my-3  px-2  ">
                <FaGithub size={32} color="black" />
            </div>
            <div className=" ml-auto  my-2 mx-8 ">

                <Button onClick={() => router.push('/cart')} className="flex items-center rounded-full bg-black py-2 px-2">
                    <ShoppingBag
                        size={20}
                        color="white"
                    />
                    <span className="ml-2 text-sm font-medium text-white">
                        {cart.items.length}
                    </span>
                </Button>

            </div>
        </div>



    );
}

export default NavbarActions;