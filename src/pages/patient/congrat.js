import React, { useContext } from 'react';
import style from '../../styles/PatientPayment.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Head from 'next/head';
import Link from 'next/link'
import Img from 'next/image'
import { AuthContext } from '../../contexts/auth';

const PatientCongrat = () => {
    const { isLogged, user } = useContext(AuthContext)
    return (
        <>
            {isLogged && user.role == "patient" ?
                <>
                    <Head>
                        <title>Plano feito - Beneficiário Prime</title>
                    </Head>
                    <div className="container">
                        <div className="container-mid mb-5">
                            <div className="card card-body">
                                <div className="d-flex justify-content-center mt-4">
                                    <Img src="/img/logos/logo-teste.png" width={210} height={49} />
                                </div>
                                <div className="d-flex justify-content-center text-center">
                                    <div className="mt-5 mb-5">
                                        <h1 className="mb-5">Parabéns por se tornar um Beneficiário Prime!</h1>
                                        <div>
                                            <a className="btn btn-primary mb-3">Página Inicial</a>
                                        </div>
                                        <Link href="#"><a className="btn btn-primary">Ir para o seu perfil</a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </> : <> </>}
        </>
    )
}

export default PatientCongrat
