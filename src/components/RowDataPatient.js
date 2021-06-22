import React from 'react';
import style from '../styles/components/RowData.module.css';
import Link from 'next/link';

const RowDataPatient = (props) => {
    return (
        <>
            <div className="row">
                <div className="col-md-3">
                    <div className={style.menu}>
                        <Link href="/patient/profile"><div className={`p-3`}>Perfil</div></Link>
                        <Link href="/patient/#"><div className={`p-3`}>2ª Via</div></Link>
                        <Link href="/patient/yourplan"><div className={`p-3`}>Seu plano</div></Link>
                        <Link href="/patient/schedules"><div className={`p-3`}>Agendamentos</div></Link>
                        <div className={`p-3`}>Sair</div>
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
        </>
    )
}

export default RowDataPatient
