"use client";


import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";



const NavbarActions = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const router = useRouter();


    if (!isMounted) {
        return null;
    }

    return (
        <div className="ml-auto flex items-center gap-x-4">
            Navbar Actions
        </div>
    );
}

export default NavbarActions;