import React from 'react'
import Product from '../Product'
import Title from '../Title'
import {ProductConsumer} from '../../context'
import {Link} from 'react-router-dom'

export default function Featured() {
    return (
        <>
            <div className="container py-4">
                <Title title="Featured Products" center="true"></Title>
                <div className="row">
                    <ProductConsumer>
                        {
                            value=>{
                                const {featuredProducts}=value
                                return featuredProducts.map((product)=>
                                    <Product key={product.id} product={product}></Product>
                                )
                            }
                        }
                    </ProductConsumer>
                </div>
                <div className="row mt-5">
                        <div className="col text-center">
                             <Link to="/products" className="mainLink">our products</Link>
                        </div>
                </div>
            </div>
        </>
    )
}
