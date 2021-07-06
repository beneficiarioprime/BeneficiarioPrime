import Head from 'next/head'
import React, { useState } from 'react'
import FloatingLabels from '../../components/FloatingLabels'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import style from '../../styles/Recovery.module.css'

const Recovery = () => {

    const [wasSent, setWasSent] = useState(false)
    return (
        <>
            <Head>
                <title>Recuperar Conta - Beneficiário Prime</title>
            </Head>

            <main className={`${style.container}`}>
                <div className="container">
                    <div className={`row`}>
                        <div className="col-lg-12 col-xl-9 mx-auto">
                            <div className={`card flex-row my-5`}>
                                <div className="card-body">
                                    <div className={`d-flex justify-content-center ${style.logo}`}>
                                        <img src="/img/logos/logo-grande.png" style={{ maxWidth: "100%" }} />
                                    </div>
                                    {wasSent !== true ?
                                        <div className="d-flex justify-content-center">
                                            <div>
                                                <div className="text-center">

                                                    <h4>Recuperando sua conta</h4>
                                                    <h5 className="mb-4">Informe seu email para ajudarmos você</h5>

                                                </div>
                                                <div>
                                                    <FloatingLabels title="Email" type="text" placeholder="Email" />

                                                    <button className="btn btn-primary" onClick={() => setWasSent(true)}>Continuar</button>
                                                </div>
                                            </div>
                                        </div>
                                        : <div className="d-flex justify-content-center">
                                            <div>
                                                <div className="text-center">

                                                    <h4>Verifique seu email!</h4>
                                                    <p className="mb-4">Enviamos um email para o endereço que você nos informou, verifique e faça os processos pedidos.</p>

                                                </div>
                                            </div>
                                        </div>
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Recovery
