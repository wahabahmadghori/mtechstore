import React from 'react'
import styled from 'styled-components'
import {ProductConsumer} from '../../context'

export default function Filtered() {
    return (
        <ProductConsumer>
            {
                value=>{
                    const {search,price,min,max,company,shipping,storeProducts,handleChange,filteredProducts} = value
                    let companies = new Set()
                    companies.add('all')
                    for(let product in storeProducts){
                        companies.add(storeProducts[product]['company'])
                    }
                    companies=[...companies]
                    return(
                        <div className="row">
                            <div className="col-10 mx-auto py-4">
                            <FilterWrapper>
                                <div>
                                    <label htmlFor="search">Search:</label>&nbsp;&nbsp;
                                    <input id="search"
                                      name="search"
                                      className="filter-item"
                                      type='text'
                                      onChange={handleChange}
                                      value={search}/>
                                </div>
                                <div>
                                    <label htmlFor="company">Company:</label>
                                    &nbsp;&nbsp;
                                    <select id="company" name="company" className="filter-item" onChange={handleChange}>
                                            {companies.map((company,index)=>{
                                                return(
                                                <option value={company} key={index}>{company}</option>
                                                )
                                            })}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="price">Price: &nbsp;${price}</label>
                                    <p><input 
                                    id="price" 
                                    name="price"
                                    type='range' 
                                    value={price} 
                                    onChange={handleChange}
                                    min={min} 
                                    max={max}
                                    className="filter-price"/></p>
                                </div>
                                <div>
                                    <label htmlFor="shipping">Free Shipping</label>
                                    &nbsp;
                                    <input id="shipping"
                                      name="shipping"
                                      onChange={handleChange}
                                      type='checkbox'
                                      checked={shipping && true}/>
                                </div>
                            </FilterWrapper>
                            </div>
                            <div className="col-10 mx-auto py-4">
                                        <h3>Total Products: {filteredProducts.length}</h3>
                            </div>
                        </div>
                    )
                    
                }
            }
            
        </ProductConsumer>
    )
}

const FilterWrapper = styled.div`
font-size:1.6rem;
display:grid;
grid-template-columns:repeat(auto-fit,minmax(180px, 1fr));
grid-column-gap:2.5rem;
grid-row-gap:1.5rem;
.filter-item{
    font-size:1.6rem;
    width:100%;
    border-radius:5px;
    padding:5px 10px;
    box-sizing:border-box;
}
.filter-price{
    width:100%;
}
`