import React, { useContext } from 'react';
import style from '../../styles/PatientPayment.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Head from 'next/head';
import Link from 'next/link';
import { AuthContext } from '../../contexts/auth';

const PatientPayment = () => {
    const { isLogged, user } = useContext(AuthContext)
    return (
        <>
            {isLogged && user.role == "patient" ?
                <>
                    <Head>
                        <title>Pagamento do plano - Beneficiário Prime</title>
                    </Head>
                    <div className={`${style.body}`}>
                        <div className="container pt-5 mb-5">
                            <h3>Plano escolhido - Essencial</h3>
                            <Link href="/patient/plans"><a className="btn btn-success mt-3 mb-4"><FontAwesomeIcon icon={faChevronLeft} /> Mudar plano</a></Link>
                            <div className="card">
                                a
                            </div>
                        </div>
                    </div>
                </> : <> </>}
        </>
    )
}

export default PatientPayment
