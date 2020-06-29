import React from 'react'
import {ProductConsumer} from '../../context/context'
import Title from '../Title'
import Product from '../Product'
import Hero from '../Hero'
import productsBcg from '../../images/productsBcg.jpeg'
import Filtered from './Filtered'


export default function Products() {
    return (
        <>
            <Hero img={productsBcg}></Hero>
            <Title title="Products" center="true"></Title>
            <Filtered/>
            
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <ProductConsumer>
                            {
                                value=>{
                                    
                                    const {filteredProducts}=value
                                    
                                    return(
                                        
                                        filteredProducts.map(product=>{
                                            return(
                                                <Product key={product.id} product={product}></Product>
                                            )
                                        })
                                    )
                                }
                            }
                        </ProductConsumer>
                    </div>
                </div>
            </section>
        </>
    )
}
