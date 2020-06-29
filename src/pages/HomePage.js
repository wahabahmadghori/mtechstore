import React from 'react'
import {ProductConsumer} from '../context'
import Hero from '../components/Hero'
import {Link} from 'react-router-dom'
import mainBcg from '../images/mainBcg.jpeg'
import Services from '../components/homepage/Services'
import Featured from '../components/homepage/Featured'
export default function HomePage() {
    return (
        <>
          <ProductConsumer>
            {value=>{
              return (
                <Hero title="awesome gadgets" max="max">
                  <Link to="/products" className="mainLink" style={{marginTop:"3rem"}}>our products</Link>
                </Hero>
              )
            }}
          </ProductConsumer>
          <Services/>
          <Featured/>
        </>
    )
}
