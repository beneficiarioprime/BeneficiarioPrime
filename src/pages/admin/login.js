import React, { useState, useContext } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import style from '../../styles/AdminLogin.module.css'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import FloatingLabels from '../../components/FloatingLabels'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../contexts/auth';

const AdminLogin = () => {
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
                                    <div className="mb-1 text-center">{erro}</div>
                                    <div className="text-center mb-3">
                                        <h5>Login</h5>
                                    </div>
                                    <form className={`${style.formSignin}`}  onSubmit={handleSubmit(handleLogin)}>
                                        <div className="form-floating mb-3">
                                            <FloatingLabels title="Email" placeholder="name@example.com" name="email" type="email" id="email" register={{ ...register('email', { required: true }) }} />
                                        </div>
                                        <div className="form-floating mb-3">
                                            <FloatingLabels title="Senha" placeholder="Password" name="password" type="password" id="password" register={{ ...register('password', { required: true }) }} />
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
