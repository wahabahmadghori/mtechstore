import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import mainBcg from '../images/mainBcg.jpeg'
export default function Hero({title,img,max,children}) {
    console.log({img})
    return (
        <HeroWrapper max={max} img={img}>
            <div className="banner">
                <h1 className="title">{title}</h1>
                {children}
            </div>
        </HeroWrapper>
    )
}
const HeroWrapper = styled.div`
    min-height:${props=>(props.max?'100vh':'60vh')};
    display:flex;
    align-items:center;
    justify-content:center;
    background:linear-gradient(var(--primaryRGBA),var(--primaryRGBA)),url(${props=>props.img}) center/cover no-repeat;
    text-align:center;
    font-size:1.6rem;
    .title{
        font-size:6rem;
        letter-spacing:var(--mainSpacing);
        text-shadow: 1px 2px 3px #666;
        text-transform:uppercase;
        color:var(--mainWhite);
    }
`
Hero.defaultProps={
    img:mainBcg
}