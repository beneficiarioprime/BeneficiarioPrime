import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import FloatingLabels from '../../components/FloatingLabels';
import RowDataClinical from '../../components/RowDataAdmin';
import style from '../../styles/AdminAppointments.module.css';
import Head from 'next/head';
import Image from 'next/image';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import FormOptions from '../../components/FormOptions';
import { AuthContext } from '../../contexts/auth';
import { Appointment, AppointmentContext } from '../../contexts/appointment';
import { useFormContext, useForm, Controller } from 'react-hook-form';

const AdminAppointments = () => {
    const { isLogged, user } = useContext(AuthContext)
    let [erro, setErro] = useState(null);
    const { list, remove, create, getList, pagination } = useContext(AppointmentContext)
    const { handleSubmit, register, control } = useForm();
    const [page, setPage] = useState(1)

    async function handleCreate(data) {
        try {
            setErro(null)
            await create(data)
            setErro("Criado")
        } catch (error) {
            setErro(error)
        }
    }

    async function addPage(number) {
        setPage(page + number)
    }

    useEffect(() => {
        getList(page)
    }, [page])

    return (
        <>
            {isLogged && user.role == "administrator" ?
                <>
                    <Head>
                        <title>Consultas - Beneficiário Prime</title>
                    </Head>
                    <div className={`${style.body}`}>
                        <div className="container pt-5 mb-5">
                            <div className="card card-body mb-3">
                                <div className={`${style.title}`}>
                                    Olá, {user.name}
                                </div>
                            </div>
                            <RowDataClinical>
                                <form onSubmit={handleSubmit(handleCreate)}>
                                    <h1 className="mb-5">Consultas</h1>
                                    <h6>Adicionar novo</h6>
                                    <div className="mb-1 text-center">{erro}</div>
                                    <FloatingLabels title="Nome da Consulta" placeholder="Nome do Consulta" name="name" type="text" id="name" register={{ ...register('name', { required: true }) }} />
                                    <FloatingLabels title="Descrição" placeholder="Descrição" name="description" type="text" id="description" register={{ ...register('description', { required: true }) }} />
                                    <FloatingLabels title="Sinônimos" placeholder="Sinônimos" name="synonyms" type="text" id="synonyms" register={{ ...register('synonyms', { required: true }) }}
                                        showHelpText={true} helpText={`Separe cada sinônimo com um ponto e vírgula (;).`} />
                                    <FloatingLabels title="Preço" placeholder="Preço" name="price" type="text" id="price" register={{ ...register('price', { required: true }) }} />
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
                                        <button className="btn btn-primary" type="submit">Adicionar</button>
                                    </div>
                                    <input className="form-control mt-5" type="text" placeholder="Pesquisar" />
                                    <div className="table-responsive">
                                        <table className="table mt-3">
                                            <thead>
                                                <tr>
                                                    <th>Consulta</th>
                                                    <th>Descrição</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {list.map(x => (
                                                    <tr>
                                                        <td>{x.name}</td>
                                                        <td>{x.description}</td>
                                                        <td><Link href="#"><a className="btn btn-primary"><FontAwesomeIcon icon={faPencilAlt} /></a></Link> <span onClick={async () => await remove(x._id)}><a className="btn btn-danger"><FontAwesomeIcon icon={faTrash} /></a></span></td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    {page && (
                                        <nav aria-label="Page navigation example">
                                            <ul class="pagination justify-content-end">
                        
                                                <li class={`page-item ${page == 1 && "disabled"}`}>
                                                    <a class="page-link" tabindex="-1" onClick={() => addPage(-1)}>Voltar</a>
                                                </li>
                                                <li class={`page-item ${page == pagination.maxPage && "disabled"}`}>
                                                    <a class="page-link" onClick={() => addPage(1)}>Próximo</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    )}
                                </form>
                            </RowDataClinical>
                        </div>
                    </div>
                </> : <> </>}
        </>
    )
}

export default function renderAppointments() {
    return (<> <Appointment><AdminAppointments /></Appointment> </>)
}
