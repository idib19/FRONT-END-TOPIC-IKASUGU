import Navbar from "@/components/ui/navbar/navbar"

export default function StoreLayout ({
    children,
  }: {
    children: React.ReactNode
  })  {
    return (
        <>
        <Navbar />
        {children}
        </>
        )
        
    }