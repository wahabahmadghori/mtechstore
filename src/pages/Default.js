import React from 'react'
import Hero from '../components/Hero'
import defaultBcg from '../images/defaultBcg.jpeg'
import {Link} from 'react-router-dom'
export default function Default() {
    return (
        <>
          <Hero title="404" img={defaultBcg} max="true">
            <h2 className="text-uppercase" style={{color:'white'}}>
              Page Not Found
            </h2>
          <Link to="/" className="mainLink" style={{marginTop:'4rem'}}>Return home</Link>
          </Hero>  
        </>
    )
}