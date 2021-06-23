import React from 'react'
import style from '../styles/Home.module.css'

const CardResult = (props) => {
    return (
        <>
            <div className={`card ${style.cardResult} mb-3 mt-5`}>
                <div className="card-body">
                    <h5>{props.title}</h5>
                    <p>{props.description}</p>
                    <div className="row">
                        <div className="col">
                            <a className={`${style.btnResult}`} href="#">
                                <div className="card card-body">
                                    <h6>Plano Particular</h6>
                                    <span><b>Preço:</b> 14,90</span>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a className={`${style.btnResult}`} href="#">
                                <div className="card card-body">
                                    <h6>Plano Essencial</h6>
                                    <span><b>Preço:</b> 14,90</span>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a className={`${style.btnResult}`} href="#">
                                <div className="card card-body">
                                    <h6>Plano Prime</h6>
                                    <span><b>Preço:</b> 14,90</span>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a className={`${style.btnResult}`} href="#">
                                <div className="card card-body">
                                    <h6>Plano Especial</h6>
                                    <span><b>Preço:</b> 14,90</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardResult
