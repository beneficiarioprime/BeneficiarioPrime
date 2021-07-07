import React, { useState } from 'react'
import styles from '../styles/components/Navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileMedicalAlt } from '@fortawesome/free-solid-svg-icons'

const data = {
    name: "Roberto Camargo",
}
const cart = 1

const Navbar = (props) => {

    const [logged, setLogged] = useState(false);

    return (<>
        <nav className={`navbar navbar-expand-lg navbar-light ${styles.navbar}`}>
            <div className={`container-fluid ${styles.container}`}>
                <Link href="/"><a className="navbar-brand me-5"><Image src="/img/logos/logo-teste.png" width={210} height={49} /></a></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse`} id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* <li className="me-3 ms-3 nav-item">
                            <Link href="/consultant/login"><a className={`nav-link ${styles.navLink}`} aria-current="page">Seja um consultor</a></Link>
                        </li> */}
                        <li className="me-3 ms-3 nav-item">
                            {/* <Link href="/clinical/login"><a className={`nav-link ${styles.navLink}`} href="#">Área do Prestador</a></Link> */}
                        </li>
                        <li className="me-3 ms-3 nav-item">
                            <a className={`nav-link ${styles.navLink}`} href="#">Planos para Empresas</a>
                        </li>
                    </ul>
                    <Link href="/cart"><a className={`me-5 ${styles.btnCart}`}><FontAwesomeIcon icon={faFileMedicalAlt} />{cart > 0 && <span className={`${styles.cartNumber}`}>{cart}</span>}</a></Link>
                    {logged ?
                        <Link href="/patient/profile"><a className={`me-5 ${styles.btnLogin}`}>{data.name}</a></Link>
                        :
                        <>
                            <a onClick={props.onClick} className={`me-5 ${styles.btnLogin}`}>Entrar</a>
                            <a onClick={props.onClickRegister} className={`btn ${styles.btnRegister}`} type="submit">Cadastre-se</a>
                        </>
                    }
                    <a onClick={props.onClick} className={`me-5 ${styles.btnLogin}`}>Entrar</a>
                    <a className={`btn ${styles.btnRegister}`} type="submit">Cadastre-se</a>
                    {isLogged ?
                        <>
                            {/* <Link href="/cart"><a className={`me-5 ${styles.btnCart}`}><FontAwesomeIcon icon={faFileMedicalAlt} />{cart > 0 && <span className={`${styles.cartNumber}`}>{cart}</span>}</a></Link> */}
                            {/* <Link href={AuthDashboard(user.role)}><a className={`me-5 ${styles.btnLogin}`}>{user.name}</a></Link> */}
                        </>
                        :
                        <>
                            {/* <a onClick={() => setIsModalVisible(true)} className={`me-5 ${styles.btnLogin}`}>Entrar</a> */}
                            {/* <a onClick={() => setIsModalVisible(true)} className={`btn ${styles.btnRegister}`} type="submit">Assine aqui</a> */}
                        </>
                    }
                </div>
            </div>
        </nav>
    </>
    )
}

export default Navbar
