import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import FloatingLabels from '../../components/FloatingLabels';
import RowDataClinical from '../../components/RowDataAdmin';
import style from '../../styles/AdminExams.module.css';
import Head from 'next/head';
import Image from 'next/image';
import {
    faFacebook,
    faInstagram,
    faWhatsapp
} from '@fortawesome/free-brands-svg-icons';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import FormOptions from '../../components/FormOptions';
import { AuthContext } from '../../contexts/auth';
import { ExamContext, Exam } from '../../contexts/exam';
import { useFormContext, useForm, Controller } from 'react-hook-form';

const AdminExams = () => {
    const { isLogged, user } = useContext(AuthContext)
    let [erro, setErro] = useState(null);
    const { list, create, remove, getList, pagination } = useContext(ExamContext)
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
                        <title>Exames - Beneficiário Prime</title>
                    </Head>
                    <div>
                        <div className="container pt-5 mb-5">
                            <div className="card card-body mb-3">
                                <div className={`${style.title}`}>
                                    Olá, {user.name}
                                </div>
                            </div>
                            <RowDataClinical>
                                <form onSubmit={handleSubmit(handleCreate)}>
                                    <h1 className="mb-5">Exames</h1>
                                    <h6>Adicionar novo exame</h6>
                                    <div className="mb-1 text-center">{erro}</div>
                                    <FloatingLabels title="Nome do exame" placeholder="Nome do exame" name="name" type="text" id="name" register={{ ...register('name', { required: true }) }} />
                                    {/* <FloatingLabels title="Descrição" placeholder="Descrição" name="description" type="text" id="description" register={{ ...register('description', { required: true }) }} /> */}
                                    <div className="form-floating">
                                        <textarea className="form-control" name="description" type="text" placeholder="Descrição" id="description" style={{ height: "100px" }} register={{ ...register('description', { required: true }) }}></textarea>
                                        <label for="description">Descrição</label>
                                    </div>
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
                                    <input className="form-control mt-5" type="text" placeholder="Pesquise pelo exame" />
                                    <div className="table-responsive">
                                        <table className="table mt-3">
                                            <thead>
                                                <tr>
                                                    <th>Exame</th>
                                                    <th>Sinônimo</th>
                                                    <th>Descrição</th>
                                                    <th>Ação</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {list.map((x, i) => (
                                                    <tr key={i}>
                                                        <td>{x.name}</td>
                                                        <td>{x.synonyms.toString()}</td>
                                                        <td>{x.description}</td>
                                                        <td><Link href="#"><a className="btn btn-primary"><FontAwesomeIcon icon={faPencilAlt} /></a></Link> <span onClick={async () => await remove(x._id)}><a className="btn btn-danger"><FontAwesomeIcon icon={faTrash} /></a></span></td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    {page && (
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination justify-content-end align-items-center">
                                                <li className={`page-item ${page == 1 && "disabled"}`} key="voltar">
                                                    <a className="page-link" tabIndex="-1" onClick={() => addPage(-1)}>Voltar</a>
                                                </li>
                                                <li className={`page-item ${page >= pagination.maxPage && "disabled"}`} key="proximo">
                                                    <a className="page-link" onClick={() => addPage(1)}>Próximo</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    )}
                                </form>
                            </RowDataClinical>
                        </div>
                    </div>
                </> : <> </>
            }
        </>
    )
}

export default function renderExam() {
    return (<> <Exam><AdminExams /></Exam> </>)
}
