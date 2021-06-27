import React, { useContext } from 'react';
import style from '../styles/components/RowDataAdmin.module.css';
import Link from 'next/link';
import { AuthContext } from '../contexts/auth';
import Router from 'next/router'

const RowData = (props) => {
    const { isLogged, user, logout } = useContext(AuthContext)
    return (
        <>
            {isLogged && user.role == "administrator" ?
                <div className="row">
                    <div className="col-md-3">
                        <div className={style.menu}>
                            <Link href="/admin/profile"><div className={`p-3`}>Perfil</div></Link>
                            <Link href="/admin/providers"><div className={`p-3`}>Prestadores</div></Link>
                            <Link href="/admin/exams"><div className={`p-3`}>Exames</div></Link>
                            <Link href="/admin/vaccines"><div className={`p-3`}>Vacinas</div></Link>
                            <Link href="/admin/patients"><div className={`p-3`}>Pacientes</div></Link>
                            <Link href="/admin/appointments"><div className={`p-3`}>Consultas</div></Link>
                            <Link href="/admin/consultants"><div className={`p-3`}>Consultores</div></Link>
                            <div className={`p-3`} onClick={() => {
                                logout()
                                window.location.href = "/"
                            }}>Sair</div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className={`card`}>
                            <div className="card-body">
                                {props.children}
                            </div>
                        </div>
                    </div>
                </div>
                : <> </>}
        </>
    )
}

export default RowData
