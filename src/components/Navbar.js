import React from 'react'
import styles from '../styles/components/Navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = (props) => {
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
                            <Link href="/clinical/login"><a className={`nav-link ${styles.navLink}`} href="#">Área do Prestador</a></Link>
                        </li>
                        <li className="me-3 ms-3 nav-item">
                            <a className={`nav-link ${styles.navLink}`} href="#">Planos para Empresas</a>
                        </li>
                    </ul>
                    <a onClick={props.onClick} className={`me-5 ${styles.btnLogin}`}>Entrar</a>
                    <a onClick={props.onClickRegister} className={`btn ${styles.btnRegister}`} type="submit">Cadastre-se</a>
                </div>
            </div>
        </nav>
        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav> */}
    </>
    )
}

export default Navbar
