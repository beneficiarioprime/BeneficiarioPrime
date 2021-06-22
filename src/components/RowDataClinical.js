import React from 'react';
import style from '../styles/components/RowData.module.css';
import Link from 'next/link';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RowDataClinical = (props) => {
    return (
        <>
            <div className="row">
                <div className="col-md-3">
                    <div className={style.menu}>
                        <Link href="/clinical/documents"><div className={`p-3`}>Documentos</div></Link>
                        <Link href="/clinical/staff"><div className={`p-3`}>Corpo Clínico</div></Link>
                        <Link href="/clinical/exams"><div className={`p-3`}>Exames</div></Link>
                        <Link href="/clinical/vaccines"><div className={`p-3 d-none`}>Vacinas</div></Link>
                        {/* <Link href="/clinical/users"><div className={`p-3`}>Usuários</div></Link> */}
                        <Link href="/clinical/validation"><div className={`p-3`}>Validação</div></Link>
                        <div className={`p-3`}>Sair</div>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className={`card mb-5`}>
                        <div className="card-body">
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5 pb-5 d-flex justify-content-center">
                <div>
                    <div>
                        Algo de errado? Fale conosco.
                    </div>
                    <div className="d-flex justify-content-center">
                        <a className="btn btn-primary btn-lg"><FontAwesomeIcon icon={faWhatsapp} /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RowDataClinical