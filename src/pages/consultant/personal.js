import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
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

const data = {
    name: "Doas Urgouxei Zuygo",
    cpf: "816.305.150-78",
    email: "email@email.com",
    link: "algumlink.com"
}

const PersonalData = () => {
    return (
        <>
            <Head>
                <title>Dados Pessoais - Beneficiário Prime</title>
            </Head>
            <div className={`${style.body}`}>
                <div className="container pt-5">
                    <div className="card card-body mb-3">
                        <div className={`${style.title}`}>
                            Olá, {data.name}
                        </div>
                    </div>
                    <RowData>
                        <form>
                            <h3 className="mb-5">Seus dados</h3>
                            <FloatingLabels className={`${style.floatingLabel}`} type="text" title="Nome completo" defaultValue={data.name} />
                            <FloatingLabels className={`${style.floatingLabel}`} type="email" title="Email" disabled="disabled" defaultValue={data.email} />
                            <div className="row">
                                <div className="col col-md-4">
                                    <FloatingLabels className={`${style.floatingLabel}`} type="text" title="CPF" disabled="disabled" defaultValue={data.cpf} />
                                </div>
                                <div className="col col-md-4">
                                    <FloatingLabels className={`${style.floatingLabel}`} type="text" title="Celular" disabled="disabled" defaultValue={data.cpf} />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Link de compartilhamento</label>
                                <div className="d-flex">
                                    <input type="text" className={`${style.floatingLabel} form-control me-3`} id="exampleFormControlInput1" value={data.link} />
                                    <button className="btn btn-primary" onClick={() => { navigator.clipboard.writeText(data.link) }}>Copiar</button>
                                </div>
                            </div>
                            <div className="d-flex">
                                <button className="btn btn-primary me-3"><FontAwesomeIcon icon={faWhatsapp} /></button>
                                <button className="btn btn-primary me-3"><FontAwesomeIcon icon={faFacebook} /></button>
                                <button className="btn btn-primary me-3"><FontAwesomeIcon icon={faInstagram} /></button>
                            </div>
                        </form>
                    </RowData>
                </div>
            </div>
        </>
    )
}

export default PersonalData
