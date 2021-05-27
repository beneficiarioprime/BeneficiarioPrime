import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Footer from '../components/Footer'
import style from '../styles/Login.module.css'

const Login = () => {
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
                                </div>
                                <div className="card-body">
                                    <div className={`d-flex justify-content-center ${style.logo}`}>
                                        <img src="/img/logos/logo-grande.png" style={{ maxWidth: "100%" }} />
                                    </div>
                                    <form className={`${style.formSignin}`}>
                                        <div className="form-floating mb-3">
                                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                            <label for="floatingInput">Email</label>
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
