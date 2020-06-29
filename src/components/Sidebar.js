import React from 'react'
import {ProductConsumer} from '../context'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
export default function Sidebar() {
    return (
        <ProductConsumer>
            {value=>{
                const {links,sideBarOpen,handleSideBar} = value
                return(
                    <SideWrapper show={sideBarOpen}>
                        <ul >
                            {links.map(link=>{
                               return(<li key={link.id}>
                                    <Link to={link.path} className="sideBarItem" onClick={handleSideBar}>{link.text}</Link>
                                </li>)
                            })}
                        </ul>
                    </SideWrapper>
                )
                
            }}
        </ProductConsumer>
    )
}

const SideWrapper = styled.nav`
    position:fixed;
    font-size:1.8rem;
    background-color:var(--mainGrey);
    width:100%;
    top:43px;
    border-right:4px solid var(--primaryColor);
    left:0;
    height:100%;
    z-index:4;
    transition:var(--mainTransition);
    transform:${props=>props.show?'translateX(0)':'translateX(-100%)'};
    ul{
        padding:0 !important;
        list-style-type:none;
    }
    .sideBarItem{
        text-transform:uppercase;
        display:block;
        color:var(--mainBlack);
        padding:1rem 1.2rem;
        transition:var(--mainTransition);
    }
    .sideBarItem:hover{
        background-color:var(--primaryColor);
        color:var(--mainWhite);
        padding-left:2rem;
        text-decoration:none;
    }
    @media (min-width:600px){
        width:300px;        
    }
`
