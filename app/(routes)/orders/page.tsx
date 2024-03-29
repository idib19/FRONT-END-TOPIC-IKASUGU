import OrdersPageClient from "@/components/orders/ordersPage"
import getOrders from "@/actions/get-user-orders"


export default async function OrdersPage() {
 
    
    const orders = await getOrders();



    return (

        <OrdersPageClient  data= {orders}/>

    )
}