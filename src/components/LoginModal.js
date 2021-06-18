import React, { useState } from 'react'
import style from '../styles/components/LoginModal.module.css'
import FloatingLabels from '../components/FloatingLabels'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import ButtonConvertApi from '../api/util/buttonConvertApi';
import UserApi from '../api/user'

const LoginModal = ({ id = "modal", onClose = () => { } }) => {

    let [login, setLogin] = useState("login");
    let [erro, setErro] = useState(null);

    const handleOutsideClick = (e) => {
        if (e.target.id === id) onClose();
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
                                <div className="" onSubmit={event => {
                                    const jsonData = ButtonConvertApi(event)
                                    new UserApi(jsonData).login().then(response => {
                                        alert("Cadastrou")
                                    }).catch(erro => {
                                        setErro(erro)
                                        console.log(erro)
                                    })
                                }}>
                                    <h4 className="mb-4 text-center">Área do Paciente</h4>
                                    <div className="mb-1 text-center">{erro}</div>
                                    <FloatingLabels title="Email" placeholder="Email" name="email" />
                                    <FloatingLabels title="Senha" placeholder="Senha" name="password" />
                                    <a>Esqueceu sua senha?</a>
                                    <div className={`d-grid mt-4 ${style.btnLogin}`}>
                                        <button className="btn btn-primary" type="submit">Entrar</button>
                                    </div>
                                    <p className="mt-3 text-center">OU</p>
                                    <div className={`d-grid mt-3 ${style.btnLogin} ${style.btnFacebook}`}>
                                        <button className="btn btn-primary"><FontAwesomeIcon icon={faFacebook} /> Entrar com Facebook</button>
                                    </div>
                                    <div className={`d-grid mt-2 ${style.btnLogin} ${style.btnGoogle}`}>
                                        <button className="btn btn-primary mb-3"><FontAwesomeIcon icon={faGoogle} /> Entrar com Google</button>
                                    </div>
                                    <div className="">Não tem uma conta? <a className={``} onClick={() => setLogin("register")}>Registrar-se</a></div>
                                </div>
                            ) :
                                <form className="" onSubmit={event => {
                                    const jsonData = ButtonConvertApi(event)
                                    new UserApi(jsonData).register().then(response => {
                                        alert("Cadastrou")
                                    }).catch(erro => {
                                        setErro(erro)
                                        console.log(erro)
                                    })
                                }}>
                                    <h4 className="mb-4 text-center">Área do Pacciente</h4>
                                    <div className="mb-1 text-center">{erro}</div>
                                    <FloatingLabels title="Nome Completo" placeholder="Nome Completo" name="name" />
                                    <FloatingLabels title="Email" placeholder="Email" name="email" />
                                    <FloatingLabels title="Senha" placeholder="Senha" name="password" />
                                    <FloatingLabels title="Repetir Senha" placeholder="Repetir Senha" />
                                    <div className="row">
                                        <div className="col">
                                            <FloatingLabels title="CPF" placeholder="CPF" name="cpf" />
                                        </div>
                                        <div className="col">
                                            <FloatingLabels title="Telefone" placeholder="Telefone" name="phone" />
                                        </div>
                                    </div>
                                    <div className={`d-grid mt-4 ${style.btnLogin}`}>
                                        <button className="btn btn-primary" type="submit">Registrar</button>
                                    </div>
                                    <p className="mt-3 text-center">OU</p>
                                    <div className={`d-grid mt-3 ${style.btnLogin} ${style.btnFacebook}`}>
                                        <button className="btn btn-primary"><FontAwesomeIcon icon={faFacebook} /> Entrar com Facebook</button>
                                    </div>
                                    <div className={`d-grid mt-2 ${style.btnLogin} ${style.btnGoogle}`}>
                                        <button className="btn btn-primary mb-3"><FontAwesomeIcon icon={faGoogle} /> Entrar com Google</button>
                                    </div>
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
