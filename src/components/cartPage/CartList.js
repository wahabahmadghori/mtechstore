import React from 'react'
import CartItem from './CartItem'
import {ProductConsumer} from '../../context'

export default function CartList() {
    return (
        <div className="container-fluid p-4">
            <div className="row">
                <div className="col ">
                    <ProductConsumer>
                        {
                            value=>{
                                const {cart,increment,decrement,removeItem}=value
                                if(cart.length===0){
                                    return <h1 className="text-capitalize text-center">Your cart is currently empty</h1>
                                }
                                return(
                                    <>
                                    {
                                        cart.map(item=>(
                                            <CartItem key={item.id} cartItem={item} increment={increment}
                                             decrement={decrement} removeItem={removeItem}></CartItem>
                                        ))
                                    }
                                    </>
                                )
                            }
                        }
                    </ProductConsumer>
                </div>
            </div>
        </div>
    )
}
