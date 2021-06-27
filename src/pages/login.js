import React, { useState, useContext } from 'react'

import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Footer from '../components/Footer'
import style from '../styles/Login.module.css'
import FloatingLabels from '../components/FloatingLabels'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../contexts/auth';

const Login = () => {

    let [erro, setErro] = useState(null);
    const { signIn, signUp } = useContext(AuthContext)
    const { handleSubmit, register } = useForm();

    async function handleLogin(data) {
        try {
            setErro(null)
            await signIn(data)
        } catch (error) {
            setErro(error)
        }
    }

    return (
        <>
            <Head>
                <title>Login - Beneficiário Prime</title>
            </Head>
            <main className={`${style.container}`}>
                <div className="container">
                    <div className={`row ${style.row}`}>
                        <div className="col-lg-12 col-xl-9 mx-auto">
                            <div className={`card ${style.cardSignin} my-5`}>
                                <div className={`${style.cardImgLeft} d-none justify-content-center d-md-flex`}>
                                    <div className={`pt-5 ps-3 pe-3 ${style.text}`}>
                                        <p>Bem vindo a</p>
                                        <p>Área do Consultor</p>
                                    </div>
                                    <div className="mb-1 text-center">{erro}</div>
                                </div>
                                <div className="card-body">
                                    <div className={`d-flex justify-content-center ${style.logo}`}>
                                        <img src="/img/logos/logo-grande.png" style={{ maxWidth: "100%" }} />
                                    </div>
                                    <form className={`${style.formSignin}`} onSubmit={handleSubmit(handleRegister)}>
                                        <div className="form-floating mb-3">
                                            <FloatingLabels title="Email" placeholder="name@example.com" name="email" type="email" id="email" register={{ ...register('email', { required: true }) }} />
                                        </div>


                                        <div className="form-floating mb-3">
                                            <FloatingLabels title="Senha" type="password" placeholder="Senha" name="password" register={{ ...register('password', { required: true }) }} />
                                        </div>

                                        <div className="d-grid gap-2">
                                            <button className="btn btn-lg btn-primary" type="submit">Entrar</button>
                                        </div>
                                        <div className="ms-5 me-5">
                                            <Link href="#"><a className="d-block text-end mt-2" href="#">Esqueceu a senha?</a></Link>
                                        </div>
                                        <div className={`d-flex justify-content-center ${style.btnRegister}`}>
                                            Não tem uma conta?<Link href="/register"><a className={`text-center ms-1`}>Cadastre-se</a></Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Login;
