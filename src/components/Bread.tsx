import React from "react";

export interface BreadProps {
    priceUsd: number;
}

export function Bread({priceUsd}: BreadProps) {
    return (
        <>
            <h1>Bread</h1>
            <p>{priceUsd}</p>
        </>
    );
}
