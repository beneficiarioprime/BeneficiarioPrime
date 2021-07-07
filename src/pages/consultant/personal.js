import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useContext, useEffect } from 'react';
import FloatingLabels from '../../components/FloatingLabels';
import RowData from '../../components/RowData';
import style from '../../styles/PersonalData.module.css';
import Head from 'next/head';
import Image from 'next/image';
import {
    faFacebook,
    faInstagram,
    faWhatsapp
} from '@fortawesome/free-brands-svg-icons';
import { update, UserContext } from '../../contexts/user';
import { AuthContext } from '../../contexts/auth';
import InputMask from "react-input-mask";
import { useForm, Controller } from 'react-hook-form'


const PersonalData = () => {
    const { isLogged, user } = useContext(AuthContext)
    const { handleSubmit, register, control } = useForm();
    const { update } = useContext(UserContext)


    async function handleUpdate(data) {
        try {
            await update(user._id, data).then(json => {
                console.log(json)
                location.reload()
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            {isLogged && user.role == "consultant" ?
                <>
                    <Head>
                        <title>Dados Pessoais - Beneficiário Prime</title>
                    </Head>
                    <div className={`${style.body}`}>
                        <div className="container pt-5">
                            <div className="card card-body mb-3">
                                <div className={`${style.title}`}>
                                    Olá, {user.name}
                                </div>
                            </div>
                            <RowData>
                                <form onSubmit={handleSubmit(handleUpdate)}>
                                    <h3 className="mb-5">Seus dados</h3>
                                    <FloatingLabels className={`${style.floatingLabel}`} type="text" title="Nome completo" register={{ ...register('name') }} defaultValue={user.name} name="name" />
                                    <FloatingLabels className={`${style.floatingLabel}`} type="email" title="Email" disabled="disabled" register={{ ...register('email') }} defaultValue={user.email} name="email" />
                                    <div className="row">
                                        <div className="col col-md-4">
                                            <Controller
                                                render={({ field }) =>
                                                    <div className="form-floating mb-3">
                                                        <InputMask id="cpf" mask="999.999.999-99" {...field} className="form-control" disabled />
                                                        <label for="cpf">CPF</label>
                                                    </div>
                                                }
                                                control={control}
                                                defaultValue={user.cpf}
                                                name="cpf"
                                                rules={{ required: true }}
                                            />
                                        </div>
                                        <div className="col col-md-4">
                                            <Controller
                                                render={({ field }) =>
                                                    <div className="form-floating mb-3">
                                                        <InputMask id="phone" mask="+55 (99) 99999-9999" {...field} className="form-control" />
                                                        <label for="phone">Celular</label>
                                                    </div>
                                                }
                                                control={control}
                                                defaultValue={user.phone}
                                                name="phone"
                                                rules={{ required: true }}
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Link de compartilhamento</label>
                                        <div className="d-flex">
                                            <input type="text" className={`${style.floatingLabel} form-control me-3`} id="exampleFormControlInput1" value={user.link} />
                                            <button className="btn btn-primary" onClick={() => { navigator.clipboard.writeText(user.link) }}>Copiar</button>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <button className="btn btn-primary me-3"><FontAwesomeIcon icon={faWhatsapp} /></button>
                                        <button className="btn btn-primary me-3"><FontAwesomeIcon icon={faFacebook} /></button>
                                        <button className="btn btn-primary me-3"><FontAwesomeIcon icon={faInstagram} /></button>
                                    </div>
                                    <div className="d-flex justify-content-center mt-4">
                                        <button className="btn btn-primary" type="submit">Salvar</button>
                                    </div>
                                </form>
                            </RowData>
                        </div>
                    </div>
                </> : <> </>
            }
        </>
    )
}

export default PersonalData
