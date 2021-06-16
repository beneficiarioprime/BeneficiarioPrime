import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import style from '../../styles/AdminLogin.module.css'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const AdminLogin = () => {

    return (
        <>
            <Head>
                <title>Área de Administração - Beneficiário Prime</title>
            </Head>
            <Navbar />

            <main className={`${style.container}`}>
                <div className="container">
                    <div className={`row`}>
                        <div className="col-lg-12 col-xl-9 mx-auto">
                            <div className={`card flex-row my-5`}>
                                <div className="card-body">
                                    <div className={`d-flex justify-content-center ${style.logo}`}>
                                        <img src="/img/logos/logo-grande.png" style={{ maxWidth: "100%" }} />
                                    </div>
                                    <h3 className="text-center mb-4">Área de Administração</h3>
                                    <div className="text-center mb-3">
                                        <h5>Login</h5>
                                    </div>
                                    <form className={`${style.formSignin}`}>
                                        <div className="form-floating mb-3">
                                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                            <label for="floatingInput">Email ou CNPJ</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                            <label for="floatingPassword">Senha</label>
                                        </div>

                                        <div className="d-grid gap-2">
                                            <button className="btn btn-lg btn-primary" type="submit">Entrar</button>
                                        </div>
                                        <div className="ms-5 me-5">
                                            <Link href="#"><a className="d-block text-end mt-2" href="#">Esqueceu a senha?</a></Link>
                                        </div>
                                    </form>

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

export default AdminLogin
