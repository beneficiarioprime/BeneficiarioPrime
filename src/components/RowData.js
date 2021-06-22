import React from 'react';
import style from '../styles/components/RowData.module.css';
import Link from 'next/link';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RowData = (props) => {
    return (
        <>
            <div className="row">
                <div className="col-md-3">
                    <div className={style.menu}>
                        <Link href="/consultant/personal"><div className={`p-3`}>Dados Pessoais</div></Link>
                        <Link href="/consultant/bankdata"><div className={`p-3`}>Dados Bancários</div></Link>
                        <Link href="/consultant/wallet"><div className={`p-3`}>Carteira</div></Link>
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

export default RowData
