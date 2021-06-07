import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import FloatingLabels from '../../../../components/FloatingLabels';
import RowDataClinical from '../../../../components/RowDataClinical';
import style from '../../../../styles/PersonalData.module.css';
import Head from 'next/head';
import Image from 'next/image';
import {
    faFacebook,
    faInstagram,
    faWhatsapp
} from '@fortawesome/free-brands-svg-icons';
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

const EditDoctor = () => {
    return (
        <>
            <Head>
                <title>Editar Médico(a) - Beneficiário Prime</title>
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
                            <h1 className="mb-5">Editar Médico(a)</h1>
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <FloatingLabels className={`${style.floatingLabel}`} type="text" title="Nome do médico" placeholder="nome" />
                                </div>
                                <div className="col-12 col-md-6">
                                    <FloatingLabels className={`${style.floatingLabel}`} type="text" title="Especialidade" placeholder="especialidade" />
                                </div>
                                <div className="col-4">
                                    <FloatingLabels className={`${style.floatingLabel}`} type="text" title="Orgão de classe" placeholder="orgão" />
                                </div>
                                <div className="col-4">
                                    <FloatingLabels className={`${style.floatingLabel}`} type="text" title="N° CRM" placeholder="crm" />
                                </div>
                                <div className="col-4">
                                    <FloatingLabels className={`${style.floatingLabel}`} type="text" title="Estado" placeholder="Estado" />
                                </div>
                            </div>

                            <h5 className="mt-3 mb-4">Horários de atendimento</h5>
                            <div class="form-check mb-3">
                                <input class="form-check-input" type="checkbox" value="" id="pix" />
                                <label class="form-check-label" for="pix">Atendimento Infantil</label>
                            </div>
                            <div class="form-check mb-3">
                                <input class="form-check-input" type="checkbox" value="" id="pix" />
                                <label class="form-check-label" for="pix">Atendimento Adultos</label>
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
                            <div className="d-flex justify-content-center mt-5">
                                <button className="btn btn-primary me-2">Excluir</button>
                                <button className="btn btn-primary">Salvar</button>
                            </div>
                        </form>
                    </RowDataClinical>
                </div>
            </div>
        </>
    )
}

export default EditDoctor
