import CartPageClient from "@/components/cart/cart"

import { auth } from "@clerk/nextjs";

const CartPage = async () => { 

const {userId} = auth();


    return (
        <CartPageClient data = {userId} />
    )
}



export default CartPage;