import React from 'react'
import style from '../../styles/PatientPlans.module.css';
import Link from 'next/link'


const CardOffers = props => {
    return (
        <div className={`card ${style.cardOffers} ${props.className}`}>
            <div className="card-body">
                {props.children}
            </div>
        </div>
    )
}

const PatientPlans = () => {
    return (
        <>
            <div className={`${style.body} mt-5`}>
                <section className={style.container}>
                    <div className={`${style.containerFluid} container-fluid`}>
                        <div className={`${style.containerCardOffers}`}>
                            <h1 className="text-center">Escolha o seu plano ideal</h1>
                            <div className={`${style.content} ${style.contentCardOffers} d-flex`}>
                                <Link href="#">
                                    <a>
                                        <CardOffers className={`${style.cardDarkBlue}`}>
                                            <span>PLANO</span>
                                            <br />
                                            <h1 className={`mb-2`}>ESSENCIAL</h1>
                                            <p className={`mb-4`}>Qualquer consulta: R$ 59,90</p>
                                            <p className="mb-4">Exames até 50% mais baratos</p>
                                            <p className="mb-4">Exames a partir de R$ 5,00</p>
                                            <p className="mb-4">Consultas presenciais ou telemedicina</p>
                                            <ul>
                                                <li>1 Vida = 12 X R$ 24,90</li>
                                                <li>2 Vidas - 12 X R$ 35,90</li>
                                                <li>3 Vidas - 12 X R$ 40,90</li>
                                            </ul>
                                            <p>Plano Família + R$ 5,00/mês por dependente adicional</p>
                                            <div className={`${style.btnPlan} ${style.btnFirst} d-flex flex-row-reverse`}>
                                                <Link href="#"><a>ASSINE AGORA</a></Link>
                                            </div>
                                        </CardOffers>
                                    </a>
                                </Link>
                                <CardOffers className={`${style.cardBlue}`}>
                                    <span>PLANO</span>
                                    <br />
                                    <h1 className={`mb-2`}>PRIME</h1>
                                    <p className={`mb-4`}>Qualquer consulta: R$ 49,90</p>
                                    <p className="mb-4">Exames até 70% mais baratos</p>
                                    <p className="mb-4">Exames a partir de R$ 4,00</p>
                                    <p className="mb-4">Consultas presenciais ou telemedicina</p>
                                    <p className="mb-4">Procedimentos e Vacinas</p>
                                    <ul>
                                        <li>1 Vida - 12 X R$ 35,90</li>
                                        <li>2 Vidas - 12 X R$ 45,90</li>
                                        <li>3 Vidas - 12 X R$ 54,90</li>
                                    </ul>
                                    <p>Plano Família + R$9,00/mês por dependente adicional</p>
                                    <div className={`${style.btnPlan} ${style.btnSecond} d-flex flex-row-reverse`}>
                                        <Link href="#"><a>ASSINE AGORA</a></Link>
                                    </div>
                                </CardOffers>
                                <CardOffers className={`${style.cardGreen}`}>
                                    <span>PLANO</span>
                                    <br />
                                    <h1 className={`mb-2`}>ESPECIAL</h1>
                                    <p className={`mb-4`}>Qualquer consulta: R$ 39,90</p>
                                    <p className="mb-4">Exames até 90% mais baratos</p>
                                    <p className="mb-4">Exames a partir de R$ 3,00</p>
                                    <p className="mb-4">Consultas presenciais ou telemedicina</p>
                                    <p className="mb-4">Procedimentos e Vacinas</p>
                                    <p className="mb-4">Medicina Estética (botox, harmonização facial, etc...)</p>
                                    <ul>
                                        <li>1 Vida - 12 X R$ 45,90</li>
                                        <li>2 Vidas - 12 X R$ 54,90</li>
                                        <li>3 Vidas - 12 X R$ 66,90</li>
                                    </ul>
                                    <p>Plano Família + R$ 12,00/mês por dependente adicional</p>
                                    <div className="d-flex flex-row-reverse ">
                                        <div style={{ marginTop: "24px" }} className={`${style.btnPlan} ${style.btnSpotlight} animate__animated animate__pulse animate__slow animate__infinite`}>
                                            <Link href="#"><a className="">ASSINE AGORA</a></Link>
                                        </div>
                                    </div>
                                </CardOffers>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default PatientPlans