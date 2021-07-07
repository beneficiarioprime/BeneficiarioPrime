import React, { useState, useContext, useEffect } from 'react'

import Head from 'next/head'
import Link from 'next/link'
import style from '../../styles/ConsultantLogin.module.css'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import FloatingLabels from '../../components/FloatingLabels'
import { useFormContext, useForm, Controller } from 'react-hook-form';
import InputMask from "react-input-mask";
import { AuthContext } from '../../contexts/auth';

const ConsultantLogin = () => {

    let [erro, setErro] = useState(null);
    const { signIn, signUp, isLogged } = useContext(AuthContext)
    const { handleSubmit, register, control } = useForm();

    async function handleLogin(data) {
        try {
            setErro(null)
            await signIn(data, "consultant")
        } catch (error) {
            setErro(error)
        }
    }

    async function handleRegister(data) {
        try {
            setErro(null)
            await signUp(data)
        } catch (error) {
            setErro(error)
        }
    }

    useEffect(() => {
        if (isLogged) Router.push("/consultant/wallet")
    }, [isLogged])

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
                                    <h1 className="text-center mb-5">Área do Consultor</h1>
                                    <div className="mb-1 text-center">{erro}</div>
                                    <div className={`${style.row} row mb-5`}>
                                        <div className="col-lg-6 text-center">
                                            <button onClick={() => { setChange('login') }}>Login</button>
                                        </div>
                                        <div className="col-lg-6 text-center">
                                            <button onClick={() => { setChange('cadastrar') }}>Cadastrar</button>
                                        </div>
                                    </div>
                                    {change === 'login' ?
                                        <form className={`${style.formSignin}`} onSubmit={handleSubmit(handleLogin)}>
                                            <div className="form-floating mb-3">
                                                <FloatingLabels title="Email" placeholder="Email" name="email" type="email" id="email" register={{ ...register('email', { required: true }) }} />
                                            </div>
                                            <div className="form-floating mb-3">
                                                <FloatingLabels title="Senha" placeholder="Senha" name="password" type="password" id="password" register={{ ...register('password', { required: true }) }} />
                                            </div>

                                            <div className="d-grid gap-2">
                                                <button className="btn btn-lg btn-primary" type="submit">Entrar</button>
                                            </div>
                                            <div className="ms-5 me-5">
                                                <Link href="#"><a className="d-block text-end mt-2" href="#">Esqueceu a senha?</a></Link>
                                            </div>
                                        </form>
                                        :
                                        <form className={`${style.formSignin}`} onSubmit={handleSubmit(handleRegister)}>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3">
                                                        <FloatingLabels title="Nome Completo" type="text" placeholder="Nome Completo" name="name" register={{ ...register('name', { required: true }) }} />
                                                    </div>
                                                </div>


                                                <div className="col-6">
                                                    <div className="col">
                                                        <Controller
                                                            render={({ field }) =>
                                                                <div className="form-floating mb-3">
                                                                    <InputMask id="cpf" mask="999.999.999-99" {...field} className="form-control" />
                                                                    <label for="cpf">CPF</label>
                                                                </div>
                                                            }
                                                            control={control}
                                                            name="cpf"
                                                            rules={{ required: true }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="col">
                                                        <Controller
                                                            render={({ field }) =>
                                                                <div className="form-floating mb-3">
                                                                    <InputMask id="phone" mask="+55 (99) 99999-9999" {...field} className="form-control" />
                                                                    <label for="phone">Celular</label>
                                                                </div>
                                                            }
                                                            control={control}
                                                            name="phone"
                                                            rules={{ required: true }}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="col-6">
                                                    <div className="form-floating mb-3">
                                                        <FloatingLabels title="Email" placeholder="Email" name="email" register={{ ...register('email', { required: true }) }} />
                                                    </div>
                                                </div>

                                                <div className="col-6">
                                                    <div className="form-floating mb-3">
                                                        <FloatingLabels title="Senha" type="password" placeholder="Senha" name="password" register={{ ...register('password', { required: true }) }} />
                                                    </div>
                                                </div>

                                                <div className="col-6">
                                                    <div className="form-floating mb-3">
                                                        <input name="password" type="password" className="form-control" id="floatingPassword" placeholder="Confirmar senha" />
                                                        <label for="floatingPassword">Confirmar senha</label>
                                                    </div>
                                                </div>

                                                <div className="d-grid gap-2">
                                                    <button className="btn btn-lg btn-primary" type="submit">Inscrever-se</button>
                                                </div>
                                            </div>
                                        </form>}
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


export default ConsultantLogin
