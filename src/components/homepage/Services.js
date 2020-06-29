import React, { Component } from 'react'
import {FaDolly,FaRedo,FaDollarSign} from 'react-icons/fa'
import styled from 'styled-components'

export default class Services extends Component {
    state={
        services:[
            {id:1,icon:<FaDolly/>,title:'free shipping',text:'Neu wirklichkeiten lied wenn nicht neu früh erschüttert sonst lispelnd.Neu wirklichkeiten lied wenn nicht neu früh erschüttert sonst lispelnd..'},
            {id:2,icon:<FaRedo/>,title:'30 days return policy',text:'Neu wirklichkeiten lied wenn nicht neu früh erschüttert sonst lispelnd.Neu wirklichkeiten lied wenn nicht neu früh erschüttert sonst lispelnd..'},
            {id:3,icon:<FaDollarSign/>,title:'secure payment',text:'Neu wirklichkeiten lied wenn nicht neu früh erschüttert sonst lispelnd.Neu wirklichkeiten lied wenn nicht neu früh erschüttert sonst lispelnd..'}
        ]
    }
    render() {
        return (
            <ServicesWrapper>
                <div className="container">
                    <div className="row py-5">
                        {this.state.services.map(item=>(
                            <div className="col-10 col-sm-6 col-md-4 mx-auto text-center" key={item.id}>
                                <div className="serviceIcon">
                                    {item.icon}
                                </div>
                                <div className="text-capitalize my-4">{item.title}</div>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </ServicesWrapper>
        )
    }
}

const ServicesWrapper=styled.section`
font-size:1.6rem;
background-color:rgba(95,183,234,0.5);
.serviceIcon{
    font-size:4rem;
    color:var(--primaryColor);
}
`