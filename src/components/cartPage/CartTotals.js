import React from 'react'
import {ProductConsumer} from '../../context'
import styled from 'styled-components'
export default function CartTotals() {
    return (
        <>
            <ProductConsumer>
                {
                    value=>{
                        const {cartSubTotal,cartTax,cartTotal,clearCart} = value
                        return(
                            <div className="container">
                                <div className="Row">
                                    <div className="col text-title my-4 text-center">
                                        <button style={{fontSize:"1.6rem"}} className="btn btn-outline-danger text-capitalize mb-3" 
                                        onClick={clearCart}>Clear Cart</button>
                                        <h3>Sub total: ${cartSubTotal}</h3>
                                        <h3>Tax: ${cartTax}</h3>
                                        <h3>Total: ${cartTotal}</h3>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                }
            </ProductConsumer>
        </>
    )
}
const CartTotalWrapper = styled.div`
    font-weight:700;
`
