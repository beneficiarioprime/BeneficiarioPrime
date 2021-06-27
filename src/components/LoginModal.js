import React, { useState, useContext } from 'react'
import style from '../styles/components/LoginModal.module.css'
import FloatingLabels from '../components/FloatingLabels'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { AuthContext } from '../contexts/auth';
import { useForm } from 'react-hook-form'

const LoginModal = ({ id = "modal", defaultState = "login", onClose = () => { } }) => {

    let [login, setLogin] = useState(defaultState);
    let [erro, setErro] = useState(null);
    const { handleSubmit, register } = useForm();

    const { signIn, signUp } = useContext(AuthContext)

    const handleOutsideClick = (e) => {
        if (e.target.id === id) onClose();
    }

    async function handleLogin(data) {
        try {
            setErro(null)
            await signIn(data)
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

    return (
        <>
            <div id={id} className={`${style.modal}`} onClick={handleOutsideClick}>
                <div className={`${style.container}`}>
                    <button className={`${style.buttonClose}`} onClick={onClose} />
                    <div className={`${style.content}`}>
                        <div>
                            <div className="mb-5 d-flex justify-content-center">
                                <Image src="/img/logos/logo-teste.png" width={210} height={49} />
                            </div>
                            {login === "login" ? (
                                <form className="" onSubmit={handleSubmit(handleLogin)}>
                                    <h4 className="mb-4 text-center">Área do Paciente</h4>
                                    <div className="mb-1 text-center">{erro}</div>
                                    <FloatingLabels title="Email" placeholder="Email" name="email"  type="email" id="email" register={{ ...register('email', { required: true}) }} />
                                    <FloatingLabels title="Senha" placeholder="Senha" name="password" type="password" id="password" register={{ ...register('password', { required: true }) }} />
                                    <a>Esqueceu sua senha?</a>
                                    <div className={`d-grid mt-4 ${style.btnLogin}`}>
                                        <button className="btn btn-primary" type="submit">Entrar</button>
                                    </div>
                                    {/* <p className="mt-3 text-center">OU</p> */}
                                    {/* <div className={`d-grid mt-3 ${style.btnLogin} ${style.btnFacebook}`}>
                                        <button className="btn btn-primary"><FontAwesomeIcon icon={faFacebook} /> Entrar com Facebook</button>
                                    </div>
                                    <div className={`d-grid mt-2 ${style.btnLogin} ${style.btnGoogle}`}>
                                        <button className="btn btn-primary mb-3"><FontAwesomeIcon icon={faGoogle} /> Entrar com Google</button>
                                    </div> */}
                                    <div className="">Não tem uma conta? <a className={``} onClick={() => setLogin("register")}>Registrar-se</a></div>
                                </form>
                            ) :
                                <form className="" onSubmit={handleSubmit(handleRegister)}>
                                    <h4 className="mb-4 text-center">Área do Pacciente</h4>
                                    <div className="mb-1 text-center">{erro}</div>
                                    <FloatingLabels title="Nome Completo" type="text" placeholder="Nome Completo" name="name" register={{ ...register('name', { required: true }) }} />
                                    <FloatingLabels title="Email" placeholder="Email" name="email" register={{ ...register('email', { required: true }) }} />
                                    <FloatingLabels title="Senha" type="password" placeholder="Senha" name="password" register={{ ...register('password', { required: true }) }} />
                                    <FloatingLabels title="Repetir Senha" type="password" placeholder="Repetir Senha" />
                                    <FloatingLabels title="Genero" placeholder="Genero" name="gender" register={{ ...register('gender', { required: true }) }} />
                                    <FloatingLabels title="Data de Nascimento" placeholder="Data de Nascimento"  name="birthDate" register={{ ...register('birthDate', { required: true }) }} />
                                    <div className="row">
                                        <div className="col">
                                            <FloatingLabels title="CPF" placeholder="CPF" name="cpf" register={{ ...register('cpf', { required: true }) }} />
                                        </div>
                                        <div className="col">
                                            <FloatingLabels title="Telefone" placeholder="Telefone" name="phone" register={{ ...register('phone', { required: true }) }} />
                                        </div>
                                    </div>
                                    <div className={`d-grid mt-4 ${style.btnLogin}`}>
                                        <button className="btn btn-primary" type="submit">Registrar</button>
                                    </div>
                                    {/* <p className="mt-3 text-center">OU</p>
                                    <div className={`d-grid mt-3 ${style.btnLogin} ${style.btnFacebook}`}>
                                        <button className="btn btn-primary"><FontAwesomeIcon icon={faFacebook} /> Entrar com Facebook</button>
                                    </div>
                                    <div className={`d-grid mt-2 ${style.btnLogin} ${style.btnGoogle}`}>
                                        <button className="btn btn-primary mb-3"><FontAwesomeIcon icon={faGoogle} /> Entrar com Google</button>
                                    </div> */}
                                    <div className="">Já tem uma conta? <a className={``} onClick={() => setLogin("login")}>Entrar</a></div>
                                </form>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginModal
