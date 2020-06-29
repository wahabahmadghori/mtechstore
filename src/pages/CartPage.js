import React from 'react'
import Cart from '../components/cartPage'
import Hero from '../components/Hero'
import storeBcg from '../images/storeBcg.jpeg'
import styled from 'styled-components'
export default function CartPage() {
    return (
        <CartWrapper>
          <Hero img={storeBcg}/> 
          <Cart/> 
          
        </CartWrapper>
    )
}

const CartWrapper=styled.section`
  font-size:1.6rem;
`