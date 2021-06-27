import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import RowDataClinical from '../../components/RowDataAdmin';
import style from '../../styles/AdminVaccines.module.css';
import Head from 'next/head';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import FormOptions from '../../components/FormOptions';
import { AuthContext } from '../../contexts/auth';
import { VaccineContext, Vaccine } from '../../contexts/vaccine';


const sales = [
    { exam: "Oftamologista", price: 15.00 },
    { exam: "Oftamologista", price: 15.00 },
    { exam: "Oftamologista", price: 15.00 },
    { exam: "Oftamologista", price: 15.00 },
    { exam: "Oftamologista", price: 15.00 },
    { exam: "Oftamologista", price: 15.00 },
    { exam: "Oftamologista", price: 15.00 }
]

const AdminVaccines = () => {
    const { isLogged, user } = useContext(AuthContext)
    const { list } = useContext(VaccineContext)
    return (
        <>
            <Head>
                <title>Vacinas - Beneficiário Prime</title>
            </Head>
            <div className={`${style.body}`}>
                <div className="container pt-5 mb-5">
                    <div className="card card-body mb-3">
                        <div className={`${style.title}`}>
                            Olá, {user.name}
                        </div>
                    </div>
                    <RowDataClinical>
                        <form>
                            <h1 className="mb-5">Vacinas</h1>
                            <h6>Adicionar nova vacina</h6>
                            <FormOptions placeholder="Nome do exame">Nome da vacina</FormOptions>
                            <FormOptions placeholder="Sinônimo">Sinônimo</FormOptions>
                            <div className="form-floating">
                                <textarea className="form-control" placeholder="Descreva o exame" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                                <label for="floatingTextarea2">Descrição</label>
                            </div>
                            <div className="row">
                                {/* <div className="col-6 col-md">
                                    <FloatingLabels className={`${style.floatingLabel}`} type="text" title="Preço Particular" placeholder="Preço Particular" />
                                </div>
                                <div className="col col-md">
                                    <FloatingLabels className={`${style.floatingLabel}`} type="text" title="Preço Plano 1" placeholder="Preço Plano 1" />
                                </div>
                                <div className="col-6 col-md">
                                    <FloatingLabels className={`${style.floatingLabel}`} type="text" title="Preço Plano 2" placeholder="Preço Plano 2" />
                                </div>
                                <div className="col col-md">
                                    <FloatingLabels className={`${style.floatingLabel}`} type="text" title="Preço Plano 3" placeholder="Preço Plano 3" />
                                </div> */}
                            </div>
                            <div className="d-grid gap-2 mt-3">
                                <button className="btn btn-primary" type="button">Adicionar</button>
                            </div>
                            <input className="form-control mt-5" type="text" placeholder="Pesquise pela vacina" />
                            <div className="table-responsive">
                                <table className="table mt-3">
                                    <thead>
                                        <tr>
                                            <th>Vacina</th>
                                            <th>Sinônimo</th>
                                            <th>Descrição</th>
                                            <th>Ação</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            list.map(x => (
                                                <tr>
                                                    <td>Hemorróida</td>
                                                    <td>Sangue</td>
                                                    <td>Alguma coisa</td>
                                                    <td><Link href="#"><a className="btn btn-primary"><FontAwesomeIcon icon={faPencilAlt} /></a></Link> <Link href="#"><a className="btn btn-danger"><FontAwesomeIcon icon={faTrash} /></a></Link></td>
                                                </tr>
                                            ))
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </RowDataClinical>
                </div>
            </div>
        </>
    )
}

export default function renderVaccines() {
    return (<> <Vaccine><AdminVaccines /></Vaccine> </>)
}