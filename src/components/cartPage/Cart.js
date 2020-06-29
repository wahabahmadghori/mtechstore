import React from 'react'
import CartColumns from './CartColumns'
import CartList from './CartList'
import CartTotals from './CartTotals'
import Title from '../Title'

export default function Cart() {
    return (
        <section className="py-4">
            <div className="container">
                <Title title="Your cart item" center="center"/>
            </div>
            <CartColumns/>
            <CartList/>
            <CartTotals/>
        </section>
    )
}
