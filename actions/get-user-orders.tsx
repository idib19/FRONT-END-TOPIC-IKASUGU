import { Order } from "@/types";
import { orders } from "@/lib/statics";


const URL = `${process.env.NEXT_PUBLIC_API_URL}/orders`;

const getOrders = async (): Promise<Order[]> => {
    
       
        return orders;
    
};

export default getOrders;


