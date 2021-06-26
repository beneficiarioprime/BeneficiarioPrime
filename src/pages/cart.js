import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import style from '../styles/cart.module.css'
import Head from 'next/head'

const data = [
    { procedure: "Procedimento 1", local: "Local", date: "Data", hour: "Hora", value: 29.90 },
    { procedure: "Procedimento 2", local: "Local", date: "Data", hour: "Hora", value: 29.90 },
    { procedure: "Procedimento 3", local: "Local", date: "Data", hour: "Hora", value: 69.90 },
    { procedure: "Procedimento 4", local: "Local", date: "Data", hour: "Hora", value: 39.90 },
    { procedure: "Procedimento 5", local: "Local", date: "Data", hour: "Hora", value: 29.90 },
    { procedure: "Procedimento 6", local: "Local", date: "Data", hour: "Hora", value: 29.90 },
]

const Cart = () => {

    const valueTotal = () => {
        let total = 0
        data.map(data => data.value).forEach(value => total += value)

        return total.toLocaleString('pt-br', { minimumFractionDigits: 2 })
    }

    return (
        <>
            <Head>
                <title>Procedimentos - Beneficiário Prime</title>
            </Head>
            <Navbar />
            <div className="container mt-5 mb-5">
                <div className={`row`}>
                    <div className="col-lg-12 col-xl-9 mx-auto">
                        <div className={`card`}>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table mt-3">
                                        <thead>
                                            <tr>
                                                <th>Procedimentos</th>
                                                <th>Local</th>
                                                <th>Data</th>
                                                <th>Hora</th>
                                                <th>Valor</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map(data => (
                                                <tr>
                                                    <td>{data.procedure}</td>
                                                    <td>{data.local}</td>
                                                    <td>{data.date}</td>
                                                    <td>{data.hour}</td>
                                                    <td>{data.value.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</td>
                                                    <td><a className="btn btn-primary"><FontAwesomeIcon icon={faTimes} /></a></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="text-center mb-3 fs-3">
                                    Total: {valueTotal()}
                                </div>
                                <div className="text-center">
                                    <Link href="#">
                                        <a className="btn btn-primary">Finalizar</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Cart
