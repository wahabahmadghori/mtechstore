import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

export default function Title({title,center}) {
    return (
        <TitleWrapper center={center}>
            <h2 className="text-title">{title}</h2>
            <div className="title-underline"></div>
        </TitleWrapper>
    )
}

const TitleWrapper=styled.div`
text-align:${props=>props.center?'center':'left'};
font-size:1.6rem;
.title-underline{
    width:8rem;
    height:.25rem;
    margin:${props=>props.center?'auto':'0'};
    background-color:var(--primaryColor);
    
}
`
