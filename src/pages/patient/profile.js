import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import FloatingLabels from '../../components/FloatingLabels';
import RowDataPatient from '../../components/RowDataPatient';
import style from '../../styles/AdminProfile.module.css';
import $ from 'jquery'
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
    gender: "Masculino",
    phone: "11987562145",
    date: "1999-02-08"
}

const PatientProfile = () => {

    const [password, setPassword] = useState(false);

    $("#cep").focusout(function(){
        //Início do Comando AJAX
        $.ajax({
            //O campo URL diz o caminho de onde virá os dados
            //É importante concatenar o valor digitado no CEP
            url: 'https://viacep.com.br/ws/'+$(this).val()+'/json/unicode/',
            //Aqui você deve preencher o tipo de dados que será lido,
            //no caso, estamos lendo JSON.
            dataType: 'json',
            //SUCESS é referente a função que será executada caso
            //ele consiga ler a fonte de dados com sucesso.
            //O parâmetro dentro da função se refere ao nome da variável
            //que você vai dar para ler esse objeto.
            success: function(resposta){
                //Agora basta definir os valores que você deseja preencher
                //automaticamente nos campos acima.
                $("#logradouro").val(resposta.logradouro);
                $("#complemento").val(resposta.complemento);
                $("#bairro").val(resposta.bairro);
                $("#cidade").val(resposta.localidade);
                $("#uf").val(resposta.uf);
                //Vamos incluir para que o Número seja focado automaticamente
                //melhorando a experiência do usuário
                $("#numero").focus();
            }
        });
    });

    return (
        <>
            <Head>
                <title>Perfil - Beneficiário Prime</title>
            </Head>
            <div className={`${style.body} mb-5`}>
                <div className="container pt-5">
                    <div className="card card-body mb-3">
                        <div className={`${style.title}`}>
                            Olá, {data.name}
                        </div>
                    </div>
                    <RowDataPatient>
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
                                            <FloatingLabels title="Gênero" placeholder="Gênero" defaultValue={data.gender} />
                                            <FloatingLabels title="Data de Nascimento" type="date" placeholder="Data de Nascimento" value={data.date} />
                                        </div>
                                        <div className="col-12 col-md">
                                            <FloatingLabels title="CPF" placeholder="CPF" defaultValue={data.cpf} />
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
                            <div className="row mb-5">
                                <div className="col-6 col-md-3">
                                    <FloatingLabels type="text" title="Peso" placeholder="Peso" />
                                </div>
                                <div className="col-6 col-md-3">
                                    <FloatingLabels type="text" title="Altura" placeholder="Altura" />
                                </div>
                                <div className="col col-md-12">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="deficiencia" />
                                        <label className="form-check-label" for="deficiencia">
                                            Possui alguma deficiência?
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-3">
                                    <FloatingLabels id="cep" type="text" title="CEP" placeholder="CEP" />
                                </div>
                                <div className="col-12 col-md-7">
                                    <FloatingLabels id="logradouro" type="text" title="Endereço" placeholder="Endereço" />
                                </div>
                                <div className="col-5 col-md-2">
                                    <FloatingLabels id="numero" type="text" title="Nª" placeholder="Nª" />
                                </div>
                                <div className="col-7 col-md-3">
                                    <FloatingLabels id="complemento" type="text" title="Complemento" placeholder="Complemento" />
                                </div>
                                <div className="col-12 col-md-5">
                                    <FloatingLabels id="bairro" type="text" title="Bairro" placeholder="Bairro" />
                                </div>
                                <div className="col-12 col-md-4">
                                    <FloatingLabels id="cidade" type="text" title="Cidade" placeholder="Cidade" />
                                </div>
                                <div className="col-12 col-md-4">
                                    <div className="form-floating">
                                        <select className="form-select" id="uf" aria-label="Estado">
                                            <option selected>Selecione um deles</option>
                                            <option value="AC">Acre</option>
                                            <option value="AL">Alagoas</option>
                                            <option value="AP">Amapá</option>
                                            <option value="AM">Amazonas</option>
                                            <option value="BA">Bahia</option>
                                            <option value="CE">Ceará</option>
                                            <option value="DF">Distrito Federal</option>
                                            <option value="ES">Espírito Santo</option>
                                            <option value="GO">Goiás</option>
                                            <option value="MA">Maranhão</option>
                                            <option value="MT">Mato Grosso</option>
                                            <option value="MS">Mato Grosso do Sul</option>
                                            <option value="MG">Minas Gerais</option>
                                            <option value="PA">Pará</option>
                                            <option value="PB">Paraíba</option>
                                            <option value="PR">Paraná</option>
                                            <option value="PE">Pernambuco</option>
                                            <option value="PI">Piauí</option>
                                            <option value="RJ">Rio de Janeiro</option>
                                            <option value="RN">Rio Grande do Norte</option>
                                            <option value="RS">Rio Grande do Sul</option>
                                            <option value="RO">Rondônia</option>
                                            <option value="RR">Roraima</option>
                                            <option value="SC">Santa Catarina</option>
                                            <option value="SP">São Paulo</option>
                                            <option value="SE">Sergipe</option>
                                            <option value="TO">Tocantins</option>
                                        </select>
                                        <label>Estado</label>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center mt-4">
                                <button className="btn btn-primary">Salvar</button>
                            </div>
                        </form>
                    </RowDataPatient>
                    <div></div>
                </div>
            </div>
        </>
    )
}

export default PatientProfile
