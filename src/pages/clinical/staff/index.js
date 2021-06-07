import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import FloatingLabels from '../../../components/FloatingLabels';
import RowDataClinical from '../../../components/RowDataClinical';
import style from '../../styles/PersonalData.module.css';
import Head from 'next/head';
import Image from 'next/image';
import {
    faFacebook,
    faInstagram,
    faWhatsapp
} from '@fortawesome/free-brands-svg-icons';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

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

const ClinicalStaff = () => {
    return (
        <>
            <Head>
                <title>Corpo Clínico - Beneficiário Prime</title>
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
                            <h1 className="mb-5">Corpo Clínico</h1>
                            <div className="d-grid gap-2">
                                <button className="btn btn-primary mb-5" type="button">Adicionar</button>
                            </div>
                            <input className="form-control mt-5" type="text" placeholder="Pesquise pelo nome, especialidade ou nº de CRM do profissional" />
                            <div className="table-responsive">
                                <table className="table mt-3">
                                    <thead>
                                        <tr>
                                            <th>Doutor(a)</th>
                                            <th>Especialidade</th>
                                            <th>N° CRM</th>
                                            <th>Ação</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {sales.map(sale => (
                                            <tr>
                                                <td>{sale.name}</td>
                                                <td>{sale.appointment}</td>
                                                <td>{sale.crm}</td>
                                                <td><Link href="/clinical/staff/oaisfjoisafj/edit"><a className="btn btn-primary"><FontAwesomeIcon icon={faPencilAlt} /></a></Link></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </RowDataClinical>
                </div>
            </div>
        </>
    )
}

export default ClinicalStaff
