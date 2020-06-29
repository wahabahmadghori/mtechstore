import React from 'react'
import {ProductConsumer} from '../context'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {FaSearch,FaCartPlus} from 'react-icons/fa'

function Product({product}) {
    return (
        <>
        <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-4">

            <ProductConsumer>
                {value=>{
                    const {addToCart,setSingleProduct}=value;
                    return<ProductWrapper>
                        <div className="card">
                            <div>
                                <div className="img-container">
                                    <img src={product.image} alt={product.title} className="card-img-top p-5"/>
                                </div>
                                <div className="card-icons">
                                    <Link to={`/product/${product.id}`} onClick={()=>setSingleProduct(product.id)}><FaSearch className="icon"/></Link>
                                    
                                    <FaCartPlus className="icon" onClick={()=>addToCart(product.id)}/>
                                </div>
                        
                            </div>
                            <div className="card-body">
                                <p className="mb-0">{product.title}</p>
                                <p className="mb-0">${product.price}</p>
                            </div>
                        </div>
                    </ProductWrapper>
                }}
            </ProductConsumer>
        </div>    
        </>
    )
}

const ProductWrapper=styled.div`
    .card{
        position:relative;
        -webkit-box-shadow: 6px 6px 10px 0px rgba(50, 50, 50, 0.55);
        -moz-box-shadow:6px 6px 10px 0px rgba(50, 50, 50, 0.55);
        box-shadow:6px 6px 10px 0px rgba(50, 50, 50, 0.55);
    }
    .card:hover{
        -webkit-box-shadow: 6px 6px 10px 0px rgba(50, 50, 50, 0.9);
        -moz-box-shadow:6px 6px 10px 0px rgba(50, 50, 50, 0.9);
        box-shadow:6px 6px 10px 0px rgba(50, 50, 50, 0.9);
    }
    .img-container{
        transition:var(--mainTransition)
    }
    .card:hover .img-container{
        opacity:.5;
        transform:scale(1.2);
    }
    .card-img-top{
        width:100%;
    }
    .card-icons{
       position:absolute;
       top:50%;
       left:50%;
       transform:translate(-50%,-50%);
       opacity:0;
       transition:var(--mainTransition)
    }
    .card:hover .card-icons{
        opacity:1;
    }
    .icon{
        font-size:3.5rem;
        color:var(--primaryColor);
        background-color:var(--mainBlack);
        border-radius:5px;
        padding:.6rem;
        margin:1rem;
        cursor:pointer;
        
    }
    .card-body{
        display:flex;
        font-size:1.6rem;
        justify-content:space-evenly;
        font-weight:500;
        letter-spacing:.2rem;
        text-transform:capitalize;
    }
`
export default Product