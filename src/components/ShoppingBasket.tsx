import React from 'react'

export interface ShoppingBasketProps {
  prices: number[]
}

export function ShoppingBasket({ prices }: ShoppingBasketProps) {
  return (
    <>
      <h1>ShoppingBasket</h1>
      <p>Amount (USD): {prices.length ? prices.map((x) => `${x} + `) : 0}</p>
    </>
  )
}
