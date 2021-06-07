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
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import FormOptions from '../../components/FormOptions';

const data = {
    name: "Doas Urgouxei Zuygo",
    cpf: "816.305.150-78",
    email: "email@email.com",
    link: "algumlink.com"
}

const sales = [
    { exam: "Oftamologista", price: 15.00},
    { exam: "Oftamologista", price: 15.00},
    { exam: "Oftamologista", price: 15.00},
    { exam: "Oftamologista", price: 15.00},
    { exam: "Oftamologista", price: 15.00},
    { exam: "Oftamologista", price: 15.00},
    { exam: "Oftamologista", price: 15.00}
]

const ClinicalExams = () => {
    return (
        <>
            <Head>
                <title>Exames - Beneficiário Prime</title>
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
                            <h1 className="mb-5">Exames</h1>
                            <h6>Adicionar novo exame</h6>
                            <div className="row">
                                <div className="col-12 col-md-9">
                                    <FormOptions placeholder="Raio-x de Tórax" list="exams" for="estado">Selecione ou digite o exame</FormOptions>
                                    <datalist id="exams">
                                        <option>Exame 1</option>
                                        <option>Exame 2</option>
                                    </datalist>
                                </div>
                                <div className="col col-md">
                                    <FloatingLabels className={`${style.floatingLabel}`} type="text" title="Valor" placeholder="Valor" />
                                </div>
                            </div>
                            <div class="d-grid gap-2 mt-3">
                                <button class="btn btn-primary" type="button">Adicionar</button>
                            </div>
                            <input className="form-control mt-5" type="text" placeholder="Pesquise pelo exame" />
                            <div className="table-responsive">
                                <table className="table mt-3">
                                    <thead>
                                        <tr>
                                            <th>Exame</th>
                                            <th>Preço</th>
                                            <th>Ação</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {sales.map(sale => (
                                            <tr>
                                                <td>{sale.exam}</td>
                                                <td>{sale.price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</td>
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

export default ClinicalExams
