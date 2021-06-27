import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import FloatingLabels from '../../components/FloatingLabels';
import RowDataClinical from '../../components/RowDataClinical';
import style from '../../styles/PersonalData.module.css';
import Head from 'next/head';
import Image from 'next/image';
import {
    faFacebook,
    faInstagram,
    faWhatsapp
} from '@fortawesome/free-brands-svg-icons';
import { faCalendarDay, faCheck, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import FormOptions from '../../components/FormOptions';

const data = {
    name: "Doas Urgouxei Zuygo",
    cpf: "816.305.150-78",
    email: "email@email.com",
    link: "algumlink.com"
}

const users = [
    { name: "Roberto Carlos", date: "02/05/2021", hour: "20:00", appointment: "Psicólogo", token: 9877 },
    { name: "Roberto Carlos", date: "02/05/2021", hour: "20:00", appointment: "Psicólogo", token: 9877 },
    { name: "Roberto Carlos", date: "02/05/2021", hour: "20:00", appointment: "Psicólogo", token: 9877 },
    { name: "Roberto Carlos", date: "02/05/2021", hour: "20:00", appointment: "Psicólogo", token: 9877 },
    { name: "Roberto Carlos", date: "02/05/2021", hour: "20:00", appointment: "Psicólogo", token: 9877 },
    { name: "Roberto Carlos", date: "02/05/2021", hour: "20:00", appointment: "Psicólogo", token: 9877 },
    { name: "Roberto Carlos", date: "02/05/2021", hour: "20:00", appointment: "Psicólogo", token: 9877 }
]

const ClinicalValidation = () => {
    return (
        <>
            <Head>
                <title>Usuários - Beneficiário Prime</title>
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
                            <h1 className="mb-5">Atendimentos agendados</h1>
                            <input className="form-control mt-5" type="text" placeholder="Pesquise pelo nome do paciente" />
                            <div className="table-responsive">
                                <table className="table mt-3">
                                    <thead>
                                        <tr>
                                            <th>Nome do paciente</th>
                                            <th>Dia</th>
                                            <th>Hora</th>
                                            <th>Consulta</th>
                                            <th>Token</th>
                                            <th>Validados?</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map(users => (
                                            <tr>
                                                <td>{users.name}</td>
                                                <td>{users.date}</td>
                                                <td>{users.hour}</td>
                                                <td>{users.appointment}</td>
                                                <td>{users.token}</td>
                                                <td>
                                                    <Link href="/clinical/staff/oaisfjoisafj/edit"><a className="btn btn-warning me-2" title="Ver detalhes"><FontAwesomeIcon icon={faPencilAlt} /></a></Link>
                                                    <Link href="/clinical/staff/oaisfjoisafj/edit"><a className="btn btn-success me-2" title="Validar"><FontAwesomeIcon icon={faCheck} /></a></Link>
                                                    <Link href="/clinical/staff/oaisfjoisafj/edit"><a className="btn btn-primary" title="Remarcar"><FontAwesomeIcon icon={faCalendarDay} /></a></Link>
                                                </td>
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

export default ClinicalValidation
