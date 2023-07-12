"use client"

import { Product } from "@/types";
import Image from "next/image";

interface ProductCardProps {
    data: Product
}



const ProductCard:React.FC<ProductCardProps> = ({
    data
    
}) => {
    console.log("data: ", data)
    return ( 
        <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
            <div className="aspect-square rounded-xl bg-gray-100 relative">
                <Image 
                    src={data?.image?.[0]?.url}
                    alt="Image"
                    fill
                    className="aspect-square object-cover rounded-md"
                />
            </div>
            <div className="text-black text-xl font-bold">
                {data.name}
            </div>
            <div className="text-sm ">
                {data.category?.name}
            </div>
            <div className="font-bold text-lg">
                ${data?.price}
            </div>
        </div>
     );
}
 
export default ProductCard;