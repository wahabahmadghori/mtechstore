import React from 'react'
import Hero from '../components/Hero'
import aboutBcg from '../images/aboutBcg.jpeg'
import Info from '../components/about/Info'

export default function AboutPage() {
    return (
        <>
          <Hero title="About us" img={aboutBcg}></Hero>
          <Info/>
        </>
    )
}