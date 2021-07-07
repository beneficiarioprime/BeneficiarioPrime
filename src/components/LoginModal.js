import React, { useState, useContext } from 'react'
import style from '../styles/components/LoginModal.module.css'
import FloatingLabels from '../components/FloatingLabels'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { AuthContext } from '../contexts/auth';
import InputMask from "react-input-mask";
import { useFormContext, useForm, Controller } from 'react-hook-form';

const LoginModal = ({ id = "modal", defaultState = "login", onClose = () => { } }) => {

    let [login, setLogin] = useState(defaultState);
    let [erro, setErro] = useState(null);
    const { handleSubmit, register, control } = useForm();

    const { signIn, signUp } = useContext(AuthContext)

    const handleOutsideClick = (e) => {
        if (e.target.id === id) onClose();
    }

    async function handleLogin(data) {
        try {
            setErro(null)
            await signIn(data, "patient")
            location.reload()
        } catch (error) {
            setErro(error)
        }
    }

    async function handleRegister(data) {
        try {
            setErro(null)
            await signUp(data)
            location.reload()
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
                                    <FloatingLabels title="Email" placeholder="Email" name="email" type="email" id="email" register={{ ...register('email', { required: true }) }} />
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
                                    <div className="mt-3">Não tem uma conta? <a className={`${style.btnRegister}`} onClick={() => setLogin("register")}>Registrar-se</a></div>
                                </form>
                            ) :
                                <form className="" onSubmit={handleSubmit(handleRegister)}>
                                    <h4 className="mb-4 text-center">Área do Paciente</h4>
                                    <div className="mb-1 text-center">{erro}</div>
                                    <FloatingLabels title="Nome Completo" type="text" placeholder="Nome Completo" name="name" register={{ ...register('name', { required: true }) }} />
                                    <FloatingLabels title="Email" placeholder="Email" name="email" register={{ ...register('email', { required: true }) }} />
                                    <FloatingLabels title="Senha" type="password" placeholder="Senha" name="password" register={{ ...register('password', { required: true }) }} />
                                    <FloatingLabels title="Repetir Senha" type="password" placeholder="Repetir Senha" name="checkpassword" />
                                    <Controller
                                        name="gender"
                                        control={control}
                                        rules={{ required: true }}
                                        render={({ field }) => <div className="form-floating mb-3">
                                            <select {...field} className="form-select" id="floatingSelect" aria-label="Selecione o Gênero">
                                                <option selected>Selecione</option>
                                                <option value="M">Masculino</option>
                                                <option value="F">Feminino</option>
                                                <option value="indeterminado">Indeterminado</option>
                                            </select>
                                            <label for="floatingSelect">Gênero</label>
                                        </div>}
                                    />
                                    <FloatingLabels title="Data de Nascimento" placeholder="Data de Nascimento" type="date" name="birthDate" register={{ ...register('birthDate', { required: true }) }} />
                                    <div className="row">
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
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            Aceito os termos de serviço
                                        </label>
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
                                    <div className="mt-3">Já tem uma conta? <a className={`${style.btnRegister}`} onClick={() => setLogin("login")}>Entrar</a></div>
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
