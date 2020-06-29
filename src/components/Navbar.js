import React from 'react'
import {ProductConsumer} from '../context'
import logo from '../images/logo.svg'
import {FaBars,FaCartPlus} from 'react-icons/fa'
import styled from 'styled-components'

export default function Navbar() {
    return (
        <ProductConsumer>
            {value=>{
                const {handleSideBar,handleCart,cartItems} = value
                return(<NavWrapper>
                    <div className='nav-center'>
                        <FaBars className='nav-icon' onClick={handleSideBar}/>
                        <img src={logo} alt='Tech Store logo'/>
                        <div className='nav-cart'>
                            <FaCartPlus className='nav-icon' onClick={handleCart}/>
                            <div className='cart-items'>{cartItems}</div>
                        </div>
                    </div>
                </NavWrapper>)
            }}
        </ProductConsumer>
    )
}

const NavWrapper = styled.nav`
    position:sticky;
    top:0;
    background-color:var(--mainGrey);
    padding:1rem 1.5rem;
    z-index:1;
    border-bottom:.3rem solid var(--primaryColor);
    .nav-center{
        display:flex;
        align-items:center;
        justify-content:space-between;
    }
    .nav-icon{
        font-size:2rem;
    }
    .nav-cart{
        position:relative;
    }
    .cart-items{
        position:absolute;
        top:-8px;
        right:-14px;
        font-size:1rem;
        background-color:var(--primaryColor);
        padding:.1rem .4rem;
        color:var(--mainWhite);
        border-radius:50%;
    }
`