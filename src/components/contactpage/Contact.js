import React from 'react'
import Title from '../Title'

export default function Contact() {
    return (
        <section className="container">
            
            <div className="row">
                <div className="col-10 mx-auto co-md-6 my-3">
                <Title title="Contact us"></Title>
                      <form className="my-5" action="https://formspree.io/mpzyroqz" method="POST">
                <div className="form-group">
                    <input 
                    className="form-control"
                    placeholder="firstName"
                    type="text"
                    style={{fontSize:'1.6rem'}}
                    name="firstName"/>
                </div>
                <div className="form-group">
                    <input 
                    className="form-control"
                    placeholder="email@email.com"
                    type="email"
                    style={{fontSize:'1.6rem'}}
                    name="email"/>
                </div>
                <div className="form-group">
                    <input 
                    className="form-control"
                    style={{fontSize:'1.6rem'}}
                    placeholder="important!!!"
                    type="text"
                    name="subject"/>
                </div>
                <div className="form-group">
                    <textarea 
                    className="form-control"
                    rows="10"
                    placeholder="comment...."
                    type="text"
                    style={{fontSize:'1.6rem'}}
                    name="subject">
                    </textarea>
                </div>
                <div className="form-group">
                    <input 
                    type="submit" 
                    value="Send"
                    className="form-control bg-primary text-white"
                    style={{fontSize:'1.6rem'}}/>
                </div>
            </form>
                </div>
            </div>
            
        </section>
    )
}
