import React from 'react'
import Title from '../Title'
import aboutBcg from '../../images/aboutBcg.jpeg'

export default function Info() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-10 col-md-6 mx-auto my-3">
                    <img src={aboutBcg} alt="About us Image"
                     className="img-thumbnail img-fluid" style={{background:'var(--darkGray)'}}/>
                </div>
                <div className="col-10 col-md-6 mx-auto my-3">
                    <Title title="about us"/>
                   
                    <div style={{fontSize:'1.6rem'}}>
                    <p className="text-lead text-muted my-3">
                    Enfants plein golfes et dont exquise. Bateau et et parfums taches les ces, bons et au glaciers descend liens, lunules.
                    Ke mi ruzo tia celon tio kaj mi deziras, pafadon vendi pafilo hejme la la, donacon cxiuj permesus volis enmaron.
                </p>
                      <p className="text-lead text-muted my-3">
                    Enfants plein golfes et dont exquise. Bateau et et parfums taches les ces, bons et au glaciers descend liens, lunules.
                    Haleurs peaux descend heurté aux - éveils coup, haleurs comme que les d'or éternel écumes peaux-rouges, ou qui l'amour parfois.
                </p>
                    </div>
                
                <button className="mainLink"
                 type="button" style={{marginTop:'2rem'}}>
                    read more
                </button>
                </div>
            </div>
        </div>
    )
}
