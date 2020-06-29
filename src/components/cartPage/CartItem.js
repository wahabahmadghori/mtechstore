import React from 'react'
import {FaArrowAltCircleUp,FaArrowAltCircleDown,FaTrash} from 'react-icons/fa'

export default function CartItem({cartItem,increment,decrement,removeItem}) {
    const {id,image,title,price,count,total}=cartItem
    return (
        <div className="container-fluid text-center my-4">
            <div className="row">
                <div className="col-10 mx-auto col-lg-2 pb-2">
                    <img src={image} alt={title} width="60" className="img-fluid" />
                </div>
                <div className="col-10 mx-auto col-lg-2 pb-2">
                    <span className="d-lg-none text-muted mx-2">Product: </span>
                    {title}
                </div>
                <div className="col-10 mx-auto col-lg-2 pb-2">
                    <span className="d-lg-none text-muted mx-2">Price: </span>
                    {price}
                </div>
                <div className="col-10 mx-auto col-lg-2 pb-2">
                    <div className="d-flex justify-content-center">
                        <div>
                            <FaArrowAltCircleUp className="cartIcon text-primary" onClick={()=>increment(id)}></FaArrowAltCircleUp>
                        </div>
                        <div className="mx-3">{count}</div>
                        <div>
                            <FaArrowAltCircleDown className="cartIcon text-primary" onClick={()=>decrement(id)}></FaArrowAltCircleDown>
                        </div>
                    </div>
                </div>
                <div className="col-10 mx-auto col-lg-2 pb-2">
                    <FaTrash className="cartIcon text-primary" onClick={()=>removeItem(id)}></FaTrash>
                </div>
                <div className="col-10 mx-auto col-lg-2 pb-3">
                    <strong className="d-lg-none text-muted mx-2">Total: </strong>
                    ${total}
                </div>
            </div>
        </div>
    )
}
