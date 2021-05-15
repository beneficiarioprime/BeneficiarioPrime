import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCommentMedical,
  faMapMarkerAlt,
  faCalendarAlt,
  faCreditCard,
  faThumbsUp,
  faStethoscope,
  faVideo,
  faMicroscope,
  faCrutch,
  faNotesMedical,
  faArrowCircleRight
} from '@fortawesome/free-solid-svg-icons'
import Footer from '../components/Footer';

const ButtonOptions = props => {
  return (
    <button
      className={`${styles.buttonOptions} ${props.className}`}
      title={props.title}
      onClick={props.onClick}
      onChange={props.onChange}
    >{props.children}
    </button>
  )
}

const FormOptions = props => {
  return (
    <div className={`form-floating mb-2 ${props.className}`}>
      <input autoComplete="off" autoCapitalize="none" list={props.list} type="text" className={`form-control`}
        placeholder={props.placeholder}
        id={props.for} />
      <label
        for={props.for}
      >{props.children}</label>
    </div>
  )
}

const CardOffers = props => {
  return (
    <div className={`card ${styles.cardOffers} ${props.className}`}>
      <div className="card-body">
        {props.children}
      </div>
    </div>
  )
}


export default function Home() {

  let [option, setOption] = useState('consulta')

  return (
    <>
      <Navbar />

      <header className={styles.container}>
        <div className={`container-fluid d-flex flex-row-reverse ${styles.containerFluid}`} style={{ height: "626px" }}>
          <div className={`${styles.imageBackground}`}>
            <Image src="/svg/undraw_doctors_hwty.svg" layout="fill" />
          </div>
          <div className={`d-flex`}>
            <div className={`${styles.content} ${styles.contentCard}`}>
              <h1 className={`${styles.title} card-title`}>Conteúdo pra botar pra baixo, será que funciona?</h1>
              <h4>Exercitation dolore et ad laborum labore cillum deserunt id. Ut fugiat aliquip est labore consequat irure esse sint do cupidatat.</h4>
              <div className={`card mt-4 ${styles.card}`}>
                <div className="card-body">
                  <div className={`mb-1 ${styles.scrollX}`}>
                    <ButtonOptions onClick={() => setOption('consulta')}><span><FontAwesomeIcon icon={faStethoscope} /></span> Consultas Presenciais</ButtonOptions>
                    <ButtonOptions onClick={() => setOption('telemedicina')}><span><FontAwesomeIcon icon={faVideo} /></span> Telemedicina</ButtonOptions>
                    <ButtonOptions onClick={() => setOption('exames')}><span><FontAwesomeIcon icon={faMicroscope} /></span> Exames</ButtonOptions>
                    <ButtonOptions onClick={() => setOption('vacinas')}><span><FontAwesomeIcon icon={faCrutch} /></span> Vacinas</ButtonOptions>
                    <ButtonOptions onClick={() => setOption('procedimentos')}><span><FontAwesomeIcon icon={faNotesMedical} /></span> Procedimentos</ButtonOptions>
                  </div>
                  {option == 'telemedicina' ? (
                    <>
                      <FormOptions placeholder="Dentista" for="especialidade">Digite ou escolha uma especialidade</FormOptions>
                      <div className={`d-flex justify-content-center align-items-center ${styles.buttonSend}`}>
                        <button className={`ms-3`}>Buscar</button>
                      </div>
                    </>
                  ) : (
                    <>
                      <FormOptions placeholder="São Paulo" list="cidades" for="estado">Selecione uma cidade</FormOptions>
                      <datalist id="cidades">
                        <option>Cidade 1</option>
                        <option>Cidade 2</option>
                      </datalist>
                      <FormOptions placeholder="Dentista" for="especialidade">Digite ou escolha uma especialidade</FormOptions>
                      <div className={`${styles.cardBtnCenter}`}>
                        <FormOptions placeholder="Jardim" className="flex-grow-1" for="cidade">Escolha um bairro disponível</FormOptions>
                        <div className={`d-flex align-items-center ${styles.buttonSend}`}>
                          <button className={`ms-3`}>Buscar</button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className={styles.container}>
        <div className={`${styles.containerFluid} container-fluid`}>
          <div className={`${styles.containerCardOffers}`}>
            <h1>O Beneficiário Prime é tudo que você está precisando!</h1>
            <h4>Com ele, terá assistência médica e laboratorial de qualidade e com preço justo.</h4>
            <h4>Consultas presenciais, telemedicina, exames e procedimentos.</h4>
            <h3>Confira nossos planos:</h3>
            <div className={`${styles.content} ${styles.contentCardOffers} d-flex`}>
              <CardOffers>
                <span>PLANO</span>
                <br />
                <h1 className={`mb-2`}>ESSENCIAL</h1>
                <p className={`mb-4`}>Qualquer consulta apenas: R$ 59,90, e exames até 50% mais baratos</p>
                <ul>
                  <li>1 Vida = 12 X R$ 24,90 no crédito ou 3 X R$ 99,00 no boleto</li>
                  <li>2 Vidas - 12 X R$ 35,90 no crédito ou 3 X R$ 140,00 no boleto</li>
                  <li>Plano Família + 5,00/ mês por dependente adicional a partir da 3ª vida</li>
                </ul>
                <div className={`${styles.btnPlan} d-flex flex-row-reverse `}>
                  <Link href="#"><a>ASSINE AGORA</a></Link>
                </div>
              </CardOffers>
              <CardOffers className={`${styles.cardGray}`}>
                <span>PLANO</span>
                <br />
                <h1 className={`mb-2`}>PRIME</h1>
                <p className={`mb-4`}>Qualquer consulta apenas: R$ 49,90, e exames até 70% mais baratos</p>
                <ul>
                  <li>1 Vida - 12 X R$ 35,90 no crédito ou 3 X R$ 140,00 no boleto</li>
                  <li>2 Vidas - 12 X R$ 45,90 no crédito ou 3 X R$ 180,00 no boleto</li>
                  <li>Plano Família + 9,00/ mês por dependente adicional a partir da 3ª vida</li>
                </ul>
                <div className={`${styles.btnPlan} ${styles.btnSpotlight} d-flex flex-row-reverse `}>
                  <Link href="#"><a>ASSINE AGORA</a></Link>
                </div>
              </CardOffers>
              <CardOffers className={`${styles.cardGreen}`}>
                <span>PLANO</span>
                <br />
                <h1 className={`mb-2`}>ESPECIAL</h1>
                <p className={`mb-4`}>Qualquer consulta apenas: R$ 39,90, e exames até 90% mais baratos</p>
                <ul>
                  <li>1 Vida - 12 X R$ 45,90 no crédito ou 3 X R$ 180,00 no boleto</li>
                  <li>2 Vidas - 12 X R$ 54,90 no crédito ou 3 X R$ 210,00 no boleto</li>
                  <li>Plano Família + 12,00/ mês por dependente adicional a partir da 3ª vida</li>
                </ul>
                <div className="d-flex flex-row-reverse ">
                  <div className={`${styles.btnPlan} ${styles.btnSpotlight} animate__animated animate__pulse animate__slow animate__infinite`}>
                    <Link href="#"><a className="">ASSINE AGORA</a></Link>
                  </div>
                </div>
              </CardOffers>
            </div>
          </div>
        </div>
      </section>
      <div className={`${styles.container} ${styles.containerScheduling}`}>
        <div className={`${styles.containerFluid} container-fluid`}>
          <div className={`${styles.contentScheduling}`}>
            <div className={`card-title mt-5 mb-5`}>
              <h1>É muito fácil agendar uma consulta</h1>
              <h4>Siga esses 5 passos:</h4>
            </div>
            <div className={`${styles.boxScheduling} `}>
              <div className={`${styles.iconScheduling}`}>
                <figure>
                  <FontAwesomeIcon icon={faCommentMedical} />
                </figure>
                <p>Selecione o tipo de atendimento</p>
              </div>
              <div className={`${styles.iconScheduling}`}>
                <figure>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </figure>
                <p>Escolha o local</p>
              </div>
              <div className={`${styles.iconScheduling}`}>
                <figure>
                  <FontAwesomeIcon icon={faCalendarAlt} />
                </figure>
                <p>Escolha sua sugestão da data e hora</p>
              </div>
              <div className={`${styles.iconScheduling}`}>
                <figure>
                  <FontAwesomeIcon icon={faCreditCard} />
                </figure>
                <p>Realize o pagamento</p>
              </div>
              <div className={`${styles.iconScheduling}`}>
                <figure>
                  <FontAwesomeIcon icon={faThumbsUp} />
                </figure>
                <p>Pronto</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.container}`}>
        <div className={`${styles.containerFluid} container-fluid`} style={{ backgroundColor: "#f4f4f4" }}>
          <div className={`mt-5 mb-5 d-flex justify-content-between`}>
            <div className={`mt-5`}>
              <div className={`mb-4`}>
                <h1>VANTAGENS DE SER</h1>
                <h1>Beneficiário Prime</h1>
              </div>
              <div className={`d-flex`}>
                <div className={`${styles.benefits}`}>
                  <ul>
                    <li><FontAwesomeIcon icon={faArrowCircleRight} /><span>A partir de R$ 13,75 por pessoa</span></li>
                    <li><FontAwesomeIcon icon={faArrowCircleRight} /><span>Consultas médicas com até 90% de desconto</span></li>
                    <li><FontAwesomeIcon icon={faArrowCircleRight} /><span>Exames e Procedimentos com até 100% de desconto</span></li>
                  </ul>
                </div>
                <div className={`${styles.benefits}`}>
                  <ul>
                    <li><FontAwesomeIcon icon={faArrowCircleRight} /><span>Até 4 beneficiários por cartão</span></li>
                    <li><FontAwesomeIcon icon={faArrowCircleRight} /><span>Retorno médico Gratuito!</span></li>
                    <li><FontAwesomeIcon icon={faArrowCircleRight} /><span>Sem nenhuma carência!</span></li>
                    <li><FontAwesomeIcon icon={faArrowCircleRight} /><span>Agendamento fácil, via telefone, site ou celular</span></li>
                  </ul>
                </div>
              </div>
              <div className={`text-center mt-5 ${styles.btnPlan}`}>
                <Link href="#"><a>ASSINE AGORA</a></Link>
              </div>
            </div>
            <div className={`${styles.imageBenefits}`}>
              <Image src="/svg/undraw_doctor.svg" width={600} height={600} />
            </div>
          </div>
        </div>
      </div>
      <section className={styles.container}>
        <div className={`${styles.containerFluid} container-fluid`}>
          <div className={`${styles.containerCardOffers}`}>
            <h1>O Beneficiário Prime é tudo que você está precisando!</h1>
            <h4>Com ele, terá assistência médica e laboratorial de qualidade e com preço justo.</h4>
            <h4>Consultas presenciais, telemedicina, exames e procedimentos.</h4>
            <h3>Confira nossos planos:</h3>
            <div className={`${styles.content} ${styles.contentCardOffers} d-flex`}>
              <CardOffers>
                <span>PLANO</span>
                <br />
                <h1 className={`mb-2`}>ESSENCIAL</h1>
                <p className={`mb-4`}>Qualquer consulta apenas: R$ 59,90, e exames até 50% mais baratos</p>
                <ul>
                  <li>1 Vida = 12 X R$ 24,90 no crédito ou 3 X R$ 99,00 no boleto</li>
                  <li>2 Vidas - 12 X R$ 35,90 no crédito ou 3 X R$ 140,00 no boleto</li>
                  <li>Plano Família + 5,00/ mês por dependente adicional a partir da 3ª vida</li>
                </ul>
                <div className={`${styles.btnPlan} d-flex flex-row-reverse `}>
                  <Link href="#"><a>ASSINE AGORA</a></Link>
                </div>
              </CardOffers>
              <CardOffers>
                <span>PLANO</span>
                <br />
                <h1 className={`mb-2`}>PRIME</h1>
                <p className={`mb-4`}>Qualquer consulta apenas: R$ 49,90, e exames até 70% mais baratos</p>
                <ul>
                  <li>1 Vida - 12 X R$ 35,90 no crédito ou 3 X R$ 140,00 no boleto</li>
                  <li>2 Vidas - 12 X R$ 45,90 no crédito ou 3 X R$ 180,00 no boleto</li>
                  <li>Plano Família + 9,00/ mês por dependente adicional a partir da 3ª vida</li>
                </ul>
                <div className={`${styles.btnPlan} d-flex flex-row-reverse `}>
                  <Link href="#"><a>ASSINE AGORA</a></Link>
                </div>
              </CardOffers>
              <CardOffers>
                <span>PLANO</span>
                <br />
                <h1 className={`mb-2`}>ESSENCIAL</h1>
                <p className={`mb-4`}>Qualquer consulta apenas: R$ 59,90, e exames até 50% mais baratos</p>
                <ul>
                  <li>1 Vida = 12 X R$ 24,90 no crédito ou 3 X R$ 99,00 no boleto</li>
                  <li>2 Vidas - 12 X R$ 35,90 no crédito ou 3 X R$ 140,00 no boleto</li>
                  <li>Plano Família + 5,00/ mês por dependente adicional a partir da 3ª vida</li>
                </ul>
                <div className={`${styles.btnPlan} d-flex flex-row-reverse `}>
                  <Link href="#"><a>ASSINE AGORA</a></Link>
                </div>
              </CardOffers>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
