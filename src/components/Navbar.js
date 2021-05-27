import React from 'react'
import styles from '../styles/components/Navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = (props) => {
    return (<>
        <nav className={`navbar navbar-expand-lg navbar-light ${styles.navbar}`}>
            <div className={`container-fluid ${styles.container}`}>
                <Link href="/"><a className="navbar-brand me-5"><img src="/img/logos/logo-teste.png" width="210px" /></a></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse`} id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="me-3 ms-3 nav-item">
                            <Link href="/login"><a className={`nav-link ${styles.navLink}`} aria-current="page" href="#">Seja um consultor</a></Link>
                        </li>
                        <li className="me-3 ms-3 nav-item">
                            <a className={`nav-link ${styles.navLink}`} href="#">Credencie sua Clínica</a>
                        </li>
                        <li className="me-3 ms-3 nav-item">
                            <a className={`nav-link ${styles.navLink}`} href="#">Planos para Empresas</a>
                        </li>
                    </ul>
                    <a onClick={props.onClick} className={`me-5 ${styles.btnLogin}`}>Entrar</a>
                    <a className={`btn ${styles.btnRegister}`} type="submit">Cadastre-se</a>
                </div>
            </div>
        </nav>
        {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav> */}
    </>
    )
}

export default Navbar
