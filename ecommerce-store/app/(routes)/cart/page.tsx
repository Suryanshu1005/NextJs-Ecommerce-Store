"use client"

import useCart from "@/hooks/use-cart";
import { useEffect, useState } from "react";
import CartItem from "./components/cart-item";

const ProductCart = () => {

    const [mounted, setMounted] = useState(false)
    const cart = useCart()

    useEffect(() => {
        setMounted(true)
    }, [])

    if(!mounted) {
        return null
    }

    return ( 
        <div className="bg-white">
            <div className="mx-auto max-w-7xl">
                <div className="px-4 py-16 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
                </div>
                <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12 px-8">
                    <div className="lg:col-span-7">
                        {cart.items.length === 0 && 
                            <p className="text-neutral-500">
                                No item added to cart
                            </p>
                        }
                        <ul>
                            {cart.items.map((item) => (
                                <CartItem data={item} key={item.id} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ProductCart;