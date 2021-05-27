import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import style from '../../styles/ConsultorLogin.module.css'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const ConsultorLogin = () => {

    let [change, setChange] = useState('login')

    return (
        <>
            <Head>
                <title>Área do Consultor - Beneficiário Prime</title>
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
                                    <div className={`${style.row} row mb-5`}>
                                        <div className="col-lg-6 text-center">
                                            <button onClick={() => { setChange('login') }}>Login</button>
                                        </div>
                                        <div className="col-lg-6 text-center">
                                            <button onClick={() => { setChange('cadastrar') }}>Cadastrar</button>
                                        </div>
                                    </div>
                                    {change === 'login' ?
                                        <form className={`${style.formSignin}`}>
                                            <div className="form-floating mb-3">
                                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                                <label for="floatingInput">Email ou CPF</label>
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
                                        :
                                        <form className={`${style.formSignin}`}>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3">
                                                        <input name="name" type="text" className="form-control" id="floatingInput" placeholder="Nome" />
                                                        <label for="floatingInput">Nome</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3">
                                                        <input name="lastname" type="text" className="form-control" id="floatingInput" placeholder="Sobrenome" />
                                                        <label for="floatingInput">Sobrenome</label>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="form-floating mb-3">
                                                        <input name="cpf" type="text" className="form-control" id="floatingPassword" placeholder="CPF" />
                                                        <label for="floatingPassword">CPF</label>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="form-floating mb-3">
                                                        <input name="phone" type="text" className="form-control" id="floatingPassword" placeholder="Telefone" />
                                                        <label for="floatingPassword">Telefone</label>
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <div className="form-floating mb-3">
                                                        <input name="email" type="email" className="form-control" id="floatingPassword" placeholder="Email" />
                                                        <label for="floatingPassword">Email</label>
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <div className="form-floating mb-3">
                                                        <input name="password" type="email" className="form-control" id="floatingPassword" placeholder="Senha" />
                                                        <label for="floatingPassword">Senha</label>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-12">
                                                    <div className="form-floating mb-3">
                                                        <input name="password" type="email" className="form-control" id="floatingPassword" placeholder="Confirmar senha" />
                                                        <label for="floatingPassword">Confirmar senha</label>
                                                    </div>
                                                </div>

                                                <div className="d-grid gap-2">
                                                    <button className="btn btn-lg btn-primary" type="submit">Entrar</button>
                                                </div>
                                            </div>
                                        </form> }
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

export default ConsultorLogin
