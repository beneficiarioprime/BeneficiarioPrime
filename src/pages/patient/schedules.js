import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useContext } from 'react';
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
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../../contexts/auth';

const PatientSchedules = () => {
    const { isLogged, user } = useContext(AuthContext)

    return (
        <>
            {isLogged && user.role == "patient" ?
                <>
                    <Head>
                        <title>Agendamentos - Beneficiário Prime</title>
                    </Head>
                    <div className={`${style.body} mb-5`}>
                        <div className="container pt-5">
                            <div className="card card-body mb-3">
                                <div className={`${style.title}`}>
                                    Olá, {user.name}
                                </div>
                            </div>
                            <RowDataPatient>
                                <h5>Olá {user.name}, fique atento às consultas marcadas:</h5>
                                <div className="table-responsive">
                                    <table className="table mt-3">
                                        <thead>
                                            <tr>
                                                <th>Procedimento</th>
                                                <th>Especificação</th>
                                                <th>Data</th>
                                                <th>Hora</th>
                                                <th>Local</th>
                                                <th>Status</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {user.schedules.map(schedule => (
                                                <tr>
                                                    <td>{schedule.procedure}</td>
                                                    <td>{schedule.specification}</td>
                                                    <td>{schedule.date}</td>
                                                    <td>{schedule.hour}</td>
                                                    <td>{schedule.place}</td>
                                                    <td>{schedule.status}</td>
                                                    <td><Link href="/clinical/staff/oaisfjoisafj/edit"><a className="btn btn-primary"><FontAwesomeIcon icon={faPencilAlt} /></a></Link></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </RowDataPatient>
                        </div>
                    </div>
                </> : <> </>}
        </>
    )
}

export default PatientSchedules
