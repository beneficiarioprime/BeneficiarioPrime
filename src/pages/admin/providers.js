import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import FloatingLabels from '../../components/FloatingLabels';
import RowDataAdmin from '../../components/RowDataAdmin';
import style from '../../styles/AdminProviders.module.css';
import Head from 'next/head';
import Image from 'next/image';
import {
    faFacebook,
    faInstagram,
    faWhatsapp
} from '@fortawesome/free-brands-svg-icons';
import FormOptions from '../../components/FormOptions';
import Link from 'next/link'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

const data = {
    name: "Doas Urgouxei Zuygo",
    cpf: "816.305.150-78",
    email: "email@email.com",
    link: "algumlink.com",
    cargo: "ADM",
    phone: "11987562145"
}

const AdminProviders = () => {

    return (
        <>
            <Head>
                <title>Prestadores - Beneficiário Prime</title>
            </Head>
            <div className={`${style.body}`}>
                <div className="container pt-5">
                    <div className="card card-body mb-3">
                        <div className={`${style.title}`}>
                            Olá, {data.name}
                        </div>
                    </div>
                    <RowDataAdmin>
                        <form>
                            <h1 className="mb-5">Prestadores</h1>
                            <h6>Adicionar novo prestador</h6>
                            <div className="row">
                                <div className="col-12 col-md-9">
                                    <FormOptions placeholder="Marcelo Oliveira" for="Opa">Digite o nome do prestador</FormOptions>
                                </div>
                            </div>
                            <div class="d-grid gap-2 mt-3">
                                <button class="btn btn-primary" type="button">Adicionar</button>
                            </div>
                            <input className="form-control mt-5" type="text" placeholder="Pesquise com o nome ou CPNJ" />
                            <div className="table-responsive">
                                <table className="table mt-3">
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th>CNPJ</th>
                                            <th>Validar</th>
                                            <th>Ação</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Pedro Alvares</td>
                                            <td>56.364.066/0001-15</td>
                                            <td>Ativo</td>
                                            <td><Link href="/clinical/staff/oaisfjoisafj/edit"><a className="btn btn-primary"><FontAwesomeIcon icon={faPencilAlt} /></a></Link></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </RowDataAdmin>
                </div>
            </div>
        </>
    )
}

export default AdminProviders
