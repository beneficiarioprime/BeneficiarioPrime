
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useState } from 'react';
import FloatingLabels from '../../components/FloatingLabels';
import RowData from '../../components/RowData';
import style from '../../styles/PersonalData.module.css';
import Footer from '../../components/Footer';

const data = {
    name: "Doas Urgouxei Zuygo",
    saldo: 60000.00,
    link: "algumlink.com"
}

const sales = [
    { id: "1", name: "Maria Aparecida", appointment: "Oftamologista", price: 150.00 },
    { id: "2", name: "Maria Aparecida", appointment: "Oftamologista", price: 150.00 },
    { id: "3", name: "Maria Aparecida", appointment: "Oftamologista", price: 150.00 },
    { id: "4", name: "Maria Aparecida", appointment: "Oftamologista", price: 150.00 },
    { id: "5", name: "Maria Aparecida", appointment: "Oftamologista", price: 150.00 },
    { id: "6", name: "Maria Aparecida", appointment: "Oftamologista", price: 150.00 },
    { id: "7", name: "Maria Aparecida", appointment: "Oftamologista", price: 150.00 }
]

const Wallet = () => {


    return (
        <>
            <div className={`${style.body}`}>
                <div className="container pt-5 mb-5">
                    <div className="card card-body mb-3">
                        <div className={`${style.title}`}>
                            Olá, {data.name}
                        </div>
                    </div>
                    <RowData>
                        <form>
                            <h3 className="mb-5">Carteira</h3>
                            <h1 className="text-center" style={{ fontSize: "60px" }}>R$ {data.saldo.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</h1>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Link de compartilhamento</label>
                                <div className="d-flex">
                                    <input type="text" className={`${style.floatingLabel} form-control me-3`} id="exampleFormControlInput1" value={data.link} />
                                    <button className="btn btn-primary" onClick={() => { navigator.clipboard.writeText(data.link) }}>Copiar</button>
                                </div>
                            </div>
                            <div className="d-flex mb-4">
                                <button className="btn btn-primary me-3"><FontAwesomeIcon icon={faWhatsapp} /></button>
                                <button className="btn btn-primary me-3"><FontAwesomeIcon icon={faFacebook} /></button>
                                <button className="btn btn-primary me-3"><FontAwesomeIcon icon={faInstagram} /></button>
                            </div>
                            <Link href="/consultant/bankdata"><a className="btn btn-success">Tranferir para a conta bancária</a></Link>
                        </form>
                    </RowData>
                    <div className="card card-body mt-4">
                        <div className="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Paciente</th>
                                        <th>Consulta</th>
                                        <th>R$</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sales.map(sale => (
                                        <tr>
                                            <td>{sale.id}</td>
                                            <td>{sale.name}</td>
                                            <td>{sale.appointment}</td>
                                            <td>{sale.price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Wallet;
