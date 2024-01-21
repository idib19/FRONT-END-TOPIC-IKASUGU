/**
 * v0 by Vercel.
 * @see https://v0.dev/t/aOHES8MjkXQ
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Button  from "@/components/ui/button"

export default function OrderForm () {
  return (
    <div className="w-full max-w-md mx-auto">
      <form className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="full-name">Full Name</Label>
          <Input id="full-name" placeholder="Enter your full name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="address">Delivery Address</Label>
          <Input id="address" placeholder="Enter your delivery address" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" placeholder="Enter your phone number" type="tel" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="Enter your email address" type="email" />
        </div>
        {/* <Button className="w-full" type="submit">
          Submit Order
        </Button> */}
      </form>
    </div>
  )
}

