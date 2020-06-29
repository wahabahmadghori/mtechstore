import React from 'react'
import styled from 'styled-components'
import {ProductConsumer} from '../context'


export default function Sidecart() {
    return (
        <ProductConsumer>
            {value=>{
                const {cartOpen,closeCart, cart,cartTotal}=value
                
                return(
                    <CartWrapper show={cartOpen} onClick={closeCart}>
                        <ul>
                        {cart.map(item=>(
                            <li key={item.id} className="cartItem">
                                <img src={`../${item.image}`} width="64"/>
                                <di>
                                    <h5 className="text-capitalize text-title">model: {item.title}</h5>
                                    <h5 className="text-capitalize text-title">quantity: {item.count}</h5>
                                    <h5 className="text-capitalize text-title">amount: {item.total}</h5>
                                </di>
                            </li>

                        ))}
                        </ul>  
                        <h3 className="text-capitalize text-title text-center pb-5">
                            Total: {cartTotal}
                        </h3>
                    </CartWrapper>
                )
            }}
        </ProductConsumer>
    )
}
const CartWrapper=styled.div`
position:fixed;
z-index:3;
width:100%;
height:100%;
right:0;
top:43px;
background-color:var( --mainGrey);
border-left:4px solid var(--primaryColor);
transition:var(--mainTransition);
transform:${props=>props.show?'translateX(0)':'translateX(100%)'};
@media (min-width:600px){
    width:30rem;
}
overflow:scroll;
ul{
    padding:1.5rem;
}
.cartItem{
    list-style-type:none;
}
`