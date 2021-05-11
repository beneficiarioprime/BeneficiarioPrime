import React from 'react'
import styles from '../styles/components/Navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav className={`navbar navbar-expand-lg navbar-light ${styles.navbar}`}>
            <div className={`container-fluid ${styles.container}`}>
                <Link href="/"><a className="navbar-brand me-5"><Image src="/img/logo.png" width={188.53} height={42.98} quality={100} /></a></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse`} id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="me-5 nav-item">
                            <a className={`nav-link ${styles.navLink}`} aria-current="page" href="#">Área do Cliente</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${styles.navLink}`} href="#">Área do Prestador</a>
                        </li>
                    </ul>
                    <Link href="/login"><a className={`me-5 ${styles.btnLogin}`} type="submit">Login</a></Link>
                    <a className={`btn ${styles.btnCadastrar}`} type="submit">Cadastre-se</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
