import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import FloatingLabels from '../../components/FloatingLabels';
import RowDataPatient from '../../components/RowDataPatient';
import style from '../../styles/AdminProfile.module.css';
import $ from 'jquery'
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link'
import {
    faFacebook,
    faInstagram,
    faWhatsapp
} from '@fortawesome/free-brands-svg-icons';

const data = {
    name: "Doas Urgouxei Zuygo",
    plan: "Essencial"
}

const PatientYourPlan = () => {


    return (
        <>
            <Head>
                <title>Seu plano - Beneficiário Prime</title>
            </Head>
            <div className={`${style.body} mb-5`}>
                <div className="container pt-5">
                    <div className="card card-body mb-3">
                        <div className={`${style.title}`}>
                            Olá, {data.name}
                        </div>
                    </div>
                    <RowDataPatient>
                        <div className="row mb-5">
                            <div className="col col-md mb-3">
                                <h4>Plano {data.plan}</h4>
                            </div>
                            <div className="col col-md">
                                <div className="d-flex flex-row-reverse">
                                    <Link href="/patient/plans"><a className="btn btn-primary">Trocar plano</a></Link>
                                </div>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="table mt-3">
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Grau parentesco</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        <tr>
                                            <td>Gabriel Santos</td>
                                            <td>1ª Grau</td>
                                        </tr>
                                </tbody>
                            </table>
                        </div>
                    </RowDataPatient>
                </div>
            </div>
        </>
    )
}

export default PatientYourPlan
