"use client"

import { useEffect, useState } from "react"

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
})

interface CurrencyProps {
    value?: string | undefined
}

const Currency: React.FC<CurrencyProps> = ({
    value
}) => {

    const [IsMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true)
    }, []);

    if(!IsMounted) {
        return null
    }
    return (
        <div className="font-semibold">
            {formatter.format(Number(value))}
        </div>
    );
}

export default Currency;