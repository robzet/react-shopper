import React from "react";

export interface MilkProps {
    priceUsd: number;
}

export function Milk({priceUsd}: MilkProps) {
    return (
        <>
            <h1>Milk</h1>
            <p>{priceUsd}</p>
        </>
    );
}
