import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import FloatingLabels from '../../../components/FloatingLabels';
import RowDataClinical from '../../../components/RowDataClinical';
import style from '../../../styles/PersonalData.module.css';
import Head from 'next/head';
import Image from 'next/image';
import { faPencilAlt, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

const data = {
    name: "Doas Urgouxei Zuygo",
    cpf: "816.305.150-78",
    email: "email@email.com",
    link: "algumlink.com"
}

const sales = [
    { id: "1", name: "Maria Aparecida", appointment: "Oftamologista", crm: 15000 },
    { id: "2", name: "Maria Aparecida", appointment: "Oftamologista", crm: 15000 },
    { id: "3", name: "Maria Aparecida", appointment: "Oftamologista", crm: 15000 },
    { id: "4", name: "Maria Aparecida", appointment: "Oftamologista", crm: 15000 },
    { id: "5", name: "Maria Aparecida", appointment: "Oftamologista", crm: 15000 },
    { id: "6", name: "Maria Aparecida", appointment: "Oftamologista", crm: 15000 },
    { id: "7", name: "Maria Aparecida", appointment: "Oftamologista", crm: 15000 }
]

const NewDoctor = () => {
    return (
        <>
            <Head>
                <title>Novo Médico(a) - Beneficiário Prime</title>
            </Head>
            <div className={`${style.body}`}>
                <div className="container pt-5 mb-5">
                    <div className="card card-body mb-3">
                        <div className={`${style.title}`}>
                            Olá, {data.name}
                        </div>
                    </div>
                    <RowDataClinical>
                        <form>
                            <h1 className="mb-5">Novo Médico(a)</h1>
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <FloatingLabels className={`${style.floatingLabel}`} type="text" title="Nome do médico" placeholder="nome" />
                                </div>
                                <div className="col-12 col-md-6">
                                    <FloatingLabels className={`${style.floatingLabel}`} type="text" title="Especialidade" placeholder="especialidade" />
                                </div>
                                <div className="col-7 col-md-4">
                                    <FloatingLabels className={`${style.floatingLabel}`} type="text" title="Orgão de classe" placeholder="orgão" />
                                </div>
                                <div className="col-5 col-md-4">
                                    <FloatingLabels className={`${style.floatingLabel}`} type="text" title="N° CRM" placeholder="crm" />
                                </div>
                                <div className="col col-md-4">
                                    <FloatingLabels className={`${style.floatingLabel}`} type="text" title="Estado" placeholder="Estado" />
                                </div>
                            </div>

                            <h5 className="mt-3 mb-4">Horários de atendimento</h5>
                            <div className="row mb-4">
                                <div className="col-12 col-md">
                                    <div className="form-check mb-3">
                                        <input className="form-check-input" type="checkbox" value="" id="childish" />
                                        <label className="form-check-label" for="childish">Atendimento Infantil</label>
                                    </div>
                                    <div className="form-check mb-3">
                                        <input className="form-check-input" type="checkbox" value="" id="adults" />
                                        <label className="form-check-label" for="adults">Atendimento Adultos</label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-check mb-3">
                                        <input className="form-check-input" type="checkbox" value="" id="telemedicin" />
                                        <label className="form-check-label" for="telemedicin">Atendimento Telemedicina</label>
                                    </div>
                                    <div className="form-check mb-3">
                                        <input className="form-check-input" type="checkbox" value="" id="domicile" />
                                        <label className="form-check-label" for="domicile">Atendimento Domiciliar</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <input className="form-control" type="text" placeholder="Dia" aria-label="default input example" />
                                </div>
                                <div className="col d-flex">
                                    <input className="form-control me-2" type="text" placeholder="00:00" aria-label="default input example" />
                                    até
                                    <input className="form-control ms-2" type="text" placeholder="00:00" aria-label="default input example" />
                                </div>
                                <div className="col">
                                    <button className="btn btn-primary"><FontAwesomeIcon icon={faPlus} /></button>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button className="btn btn-primary mt-5">Salvar</button>
                            </div>
                        </form>
                    </RowDataClinical>
                </div>
            </div>
        </>
    )
}

export default NewDoctor
