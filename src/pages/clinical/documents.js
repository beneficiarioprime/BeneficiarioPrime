import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import FloatingLabels from '../../components/FloatingLabels';
import RowDataClinical from '../../components/RowDataClinical';
import style from '../../styles/PersonalData.module.css';
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
    link: "algumlink.com"
}

const ClinicalDocuments = () => {

    const [hasPix, setHasPix] = useState(false)

    const handleClick = () => {
        setHasPix(!hasPix)
    }
    return (
        <>
            <Head>
                <title>Documentos do Prestador - Beneficiário Prime</title>
            </Head>
            <div className={`${style.body}`}>
                <div className="container pt-5 mb-5">
                    <div className="card card-body mb-3">
                        <div className={`${style.title}`}>
                            Olá, {data.name}
                        </div>
                    </div>
                    <RowDataClinical>
                        <form>
                            <h3 className="mb-5">Documentos do Prestador</h3>
                            <FloatingLabels className={`${style.floatingLabel}`} type="text" title="Nome da clínica" disabled="true" defaultValue={data.name} />
                            <FloatingLabels className={`${style.floatingLabel}`} type="email" title="Email" disabled="disabled" defaultValue={data.email} />
                            <div className="mb-3">
                                <label for="cnpj" className="form-label">CNPJ</label>
                                <FloatingLabels className={`${style.floatingLabel}`} type="CPNJ" title="CNPJ" disabled="disabled" defaultValue={data.email} />
                                <input className={`${style.floatingLabel} form-control`} type="file" id="cnpj" />
                            </div>
                            <div className="mb-3">
                                <label for="alvara" className="form-label">Alvara Vigilância</label>
                                <input className={`${style.floatingLabel} form-control`} type="file" id="alvara" />
                            </div>
                            <div className="mb-3">
                                <label for="cremesp" className="form-label">CremeSP</label>
                                <input className={`${style.floatingLabel} form-control`} type="file" id="cremesp" />
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <div>
                                        <FloatingLabels className={`${style.floatingLabel}`} type="text" title="Rua" placeholder="rua" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div>
                                        <FloatingLabels className={`${style.floatingLabel}`} type="text" title="Número" placeholder="número" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div>
                                        <FloatingLabels className={`${style.floatingLabel}`} type="text" title="Cidade" placeholder="Cidade" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div>
                                        <FloatingLabels className={`${style.floatingLabel}`} type="text" title="Estado" placeholder="Estado" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div>
                                        <FloatingLabels className={`${style.floatingLabel}`} type="text" title="Bairro" placeholder="Bairro" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div>
                                        <FloatingLabels className={`${style.floatingLabel}`} type="text" title="CEP" placeholder="CEP" />
                                    </div>
                                </div>
                            </div>
                            <hr className="mt-4 mb-4" />
                            <div className="row">
                                <div className={`col-12 col-md ${style.borderRight}`}>
                                    <FloatingLabels className={`${style.floatingLabel}`} type="text" title="Nome do responsável técnico" placeholder="técnico" />
                                    <div className="row">
                                        <div className="col-12 col-md">
                                            <FloatingLabels className={`${style.floatingLabel}`} type="text" title="Email" placeholder="email" />
                                        </div>
                                        <div className="col-12 col-md">
                                            <FloatingLabels className={`${style.floatingLabel}`} type="text" title="Telefone" placeholder="telefone" />
                                        </div>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label" for="flexCheckDefault">É o responsável financeiro?</label>
                                    </div>
                                </div>
                                <div className="col col-md">
                                    <div className="col-12 col-md">
                                        <FloatingLabels className={`${style.floatingLabel}`} type="text" title="Nome do responsável financeiro" placeholder="técnico" />
                                        <div className="row">
                                            <div className="col-12 col-md">
                                                <FloatingLabels className={`${style.floatingLabel}`} type="text" title="Email" placeholder="email" />
                                            </div>
                                            <div className="col-12 col-md">
                                                <FloatingLabels className={`${style.floatingLabel}`} type="text" title="Telefone" placeholder="telefone" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h4 className="mt-5 mb-4">Dados bancários</h4>
                            <div className="row">
                                <div className="col col-md-4">
                                    <FloatingLabels className={`${style.floatingLabel}`} type="text" title="Nome do banco" placeholder="banco" />
                                </div>
                                <div className="col col-md-4">
                                    <FloatingLabels className={`${style.floatingLabel}`} type="text" title="Agência" placeholder="Agência" />
                                </div>
                                <div className="col col-md-4">
                                    <FloatingLabels className={`${style.floatingLabel}`} type="text" title="Conta corrente" placeholder="Conta corrente" />
                                </div>
                            </div>
                            <div class="form-check mb-3">
                                <input class="form-check-input" checked={hasPix} onClick={handleClick} type="checkbox" value="" id="hasPix" />
                                <label class="form-check-label" for="pix">Possui pix?</label>
                            </div>
                            {hasPix && (
                                <div className="mt-3">
                                    <FloatingLabels className={`${style.floatingLabel}`} placeholder="Pix" type="text" title="Chave Pix" />
                                </div>
                            )}
                        </form>
                        <div className="d-flex justify-content-center mt-4">
                            <button className="btn btn-primary">Salvar e enviar</button>
                        </div>
                    </RowDataClinical>
                </div>
            </div>
        </>
    )
}

export default ClinicalDocuments
