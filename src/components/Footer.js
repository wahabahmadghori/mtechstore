import React from 'react'
import {ProductConsumer} from '../context'
import styled from 'styled-components'

export default function Footer() {
    return (
        <ProductConsumer>
            {value=>{
                const {socialIcons}=value
                return(
                <FooterWrapper>
                        <div className="container py-3">
                        <div className="row">
                            <div className="col-md-6 mx-auto" >
                                <p>
                                    copy right &copy; tech store {new Date().getFullYear()}. all rights reserved {" "}
                                </p>
                            </div>
                            <div className="col-md-6 mx-auto d-flex justify-content-around">
                            {socialIcons.map(
                                            item=>(
                                                    <a href={item.link} key={item.id}>{item.icon}</a>
                                            )
                                         )}
                            </div>
                        </div>
                        </div>

                </FooterWrapper>
                )
            }}
        </ProductConsumer>
    )
}

const FooterWrapper = styled.footer`
    background-color:var(--darkGray);
    font-size:1.3rem;
    color:var(--mainWhite);
    text-transform:capitalize;
    .icon{
        font-size:2.5rem;
        transition:var(--mainTransition);
        color:var(--mainWhite);
    }
    .icon:hover{
        color:var(--primaryColor);
    }
`