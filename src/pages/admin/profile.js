import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import FloatingLabels from '../../components/FloatingLabels';
import RowDataAdmin from '../../components/RowDataAdmin';
import style from '../../styles/AdminProfile.module.css';
import Head from 'next/head';
import Image from 'next/image';
import {
    faFacebook,
    faInstagram,
    faWhatsapp
} from '@fortawesome/free-brands-svg-icons';

const data = {
    name: "Doas Urgouxei Zuygo",
    cpf: "816.305.150-78",
    email: "email@email.com",
    link: "algumlink.com",
    cargo: "ADM",
    phone: "11987562145"
}

const AdminProfile = () => {

    const [password, setPassword] = useState(false);

    return (
        <>
            <Head>
                <title>Perfil - Beneficiário Prime</title>
            </Head>
            <div className={`${style.body}`}>
                <div className="container pt-5">
                    <div className="card card-body mb-3">
                        <div className={`${style.title}`}>
                            Olá, {data.name}
                        </div>
                    </div>
                    <RowDataAdmin>
                        <form>
                            <div className="row">
                                <div className="col-12 col-md-4">
                                    <div className="d-flex justify-content-center">
                                        <img src="https://network.grupoabril.com.br/wp-content/uploads/sites/4/2016/10/medico-duvidas2.jpg?quality=70&strip=all" width="200px" className="me-4 rounded float-start" alt={`Foto de ${data.name}`} />
                                    </div>
                                    <div className="text-center">
                                        <a className="btn">Alterar imagem</a>
                                    </div>
                                </div>
                                <div className="col-12 col-md-8">
                                    <FloatingLabels value={data.name} title="Nome completo" placeholder="Nome completo" />
                                    <FloatingLabels defaultValue={data.email} title="Email" placeholder="Email" />
                                    <div className="row">
                                        <div className="col-12 col-md">
                                            <FloatingLabels title="Cargo" placeholder="Cargo" defaultValue={data.cargo} />
                                        </div>
                                        <div className="col">
                                            <FloatingLabels title="Telefone" placeholder="Telefone" defaultValue={data.phone} />
                                        </div>
                                    </div>
                                    <a className="btn mb-3" onClick={() => setPassword(!password)}>Alterar senha</a>
                                </div>
                                {password &&
                                    <>
                                        <div className="col-12 col-md-6">
                                            <FloatingLabels title="Senha atual" />
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <FloatingLabels title="Alterar senha" />
                                            <FloatingLabels title="Repetir senha" />
                                        </div>
                                    </>
                                }
                            </div>
                            <div className="d-flex justify-content-center mt-4">
                                <button className="btn btn-primary">Salvar</button>
                            </div>
                        </form>
                    </RowDataAdmin>
                </div>
            </div>
        </>
    )
}

export default AdminProfile
