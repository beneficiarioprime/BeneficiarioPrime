import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import FloatingLabels from '../../components/FloatingLabels';
import RowDataClinical from '../../components/RowDataAdmin';
import style from '../../styles/AdminConsultants.module.css';
import Head from 'next/head';
import Image from 'next/image';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import FormOptions from '../../components/FormOptions';
import { AuthContext } from '../../contexts/auth';

const sales = [
    { exam: "Oftamologista", price: 15.00 },
    { exam: "Oftamologista", price: 15.00 },
    { exam: "Oftamologista", price: 15.00 },
    { exam: "Oftamologista", price: 15.00 },
    { exam: "Oftamologista", price: 15.00 },
    { exam: "Oftamologista", price: 15.00 },
    { exam: "Oftamologista", price: 15.00 }
]

const AdminConsultants = () => {
    const { isLogged, user } = useContext(AuthContext)
    const [page, setPage] = useState(1)
    return (
        <>
            {isLogged && user.role == "administrator" ?
                <>
                    <Head>
                        <title>Consultores - Beneficiário Prime</title>
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
                                    <h1 className="mb-5">Consultores</h1>
                                    <h6>Adicionar nova consultor</h6>
                                    <FormOptions placeholder="Nome do exame">Nome ou CPF do consultor</FormOptions>
                                    <div className="d-grid gap-2 mt-3">
                                        <button className="btn btn-primary" type="button">Adicionar</button>
                                    </div>
                                    <input className="form-control mt-5" type="text" placeholder="Pesquise pela vacina" />
                                    <div className="table-responsive">
                                        <table className="table mt-3">
                                            <thead>
                                                <tr>
                                                    <th>Consultor</th>
                                                    <th>CPF</th>
                                                    <th>Ativo</th>
                                                    <th>Ação</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Silvio do Santos</td>
                                                    <td>471.960.220-76</td>
                                                    <td>Ativo</td>
                                                    <td><a className="btn btn-primary"><FontAwesomeIcon icon={faPencilAlt} /></a> <a className="btn btn-danger"><FontAwesomeIcon icon={faTrash} /></a></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    {/* {page && (
                                        <nav aria-label="Page navigation example">
                                            <ul class="pagination justify-content-end align-items-center">
                                                <li class={`page-item ${page == 1 && "disabled"}`}>
                                                    <a class="page-link" tabindex="-1" onClick={() => addPage(-1)}>Voltar</a>
                                                </li>
                                                <li class={`page-item ${page == pagination.maxPage && "disabled"}`}>
                                                    <a class="page-link" onClick={() => addPage(1)}>Próximo</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    )} */}
                                </form>
                            </RowDataClinical>
                        </div>
                    </div>
                </> : <> </>}
        </>
    )
}

export default AdminConsultants
