import React from 'react'
import {Link} from 'react-router-dom'
import singleProductBcg from '../images/singleProductBcg.jpeg'
import {ProductConsumer} from '../context'
import Hero from '../components/Hero'

export default function SingleProductPage() {
    return (
        <>
          <Hero img={singleProductBcg}></Hero>
          
          <ProductConsumer>
            {
              value=>{
                const {singleProduct,loading,addToCart} = value
                if(loading){
                  return(
                    <h3>Loading.....</h3>
                  )
                }
                const{id,image,title,price,company,description}=singleProduct
                return (<section className="container py-5">
                    <div className="row">
                      <div className="col-10 mx-auto col-sm-8 col-md-6 my-5">
                          <img src={`../${image}`} alt={title} className="img-fluid"/>
                      </div>
                      <div className="col-10 mx-auto col-sm-8 col-md-6">
                        <h5 className="text-title mb-4">model: {title}</h5>
                        <h5 className="text-capitalize text-muted mb-4">company: {company}</h5>
                        <h5 className="text-capitalize text-main mb-4">price: ${price}</h5>
                        <p className="text-capitalize text-title mt-3">some info about product:</p>
                        <p>{description}</p>
                        <div style={{display:"flex"}} className="my-5">
                        <button className="mainLink" style={{border:"0px"}} type="button" onClick={()=>addToCart(id)}>
                              add to cart
                        </button>
                        <Link to="/products" className="mainLink mx-4">back to products</Link>
                        </div>
                        
                      </div>
                    </div>
                  </section>)
              }
            }
          </ProductConsumer> 
        </>
    )
}