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
  faArrowCircleRight,
  faCheck,
  faTimes,
  faTimesCircle,
  faCheckCircle
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

const CardAppointments = props => {
  return (
    <div className={`${styles.bodyAppointment}`} style={{ width: "520px" }}>
      <div className={`card ${styles.cardOffers} ${props.className}`}>
        <div className="card-body">
          {props.children}
        </div>
      </div>
    </div>
  )
}

const FaCheck = () => {
  return (
    <span className={`${styles.faCheck}`}><FontAwesomeIcon icon={faCheckCircle} /></span>
  )
}

const FaTimes = () => {
  return (
    <span className={`${styles.faTimes}`}><FontAwesomeIcon icon={faTimesCircle} /></span>
  )
}

export default function Home() {

  let [option, setOption] = useState('consulta')
  let [count, setCount] = useState(0);

  // let [consultas, setConsultas] = useState(0);
  // let [beneficiarios, setBeneficiarios] = useState(0);
  // let [especialidades, setEspecialidades] = useState(0);
  // let [exames, setExames] = useState(0);
  // let [atendimento, setAtendimento] = useState(0);

  useEffect(() =>{
    counter(0,75000)
  },[])

const counter = (minimum, maximum) => {
  for(let count = minimum; count <= maximum; count++) {
    setTimeout(() => {
      setCount(count)
    }, 1000)
  }
}

  return (
    <>
      <Head>
        <title>Home - Beneficiário Prime</title>
      </Head>
      <Navbar />

      <header className={styles.container}>
        <div className={`container-fluid d-flex flex-row-reverse ${styles.containerFluid}`} style={{ height: "626px" }}>
          <div className={`${styles.imageBackground}`}>
            <Image src="/svg/undraw_doctors_hwty.svg" layout="fill" />
          </div>
          <div className={`d-flex`}>
            <div className={`${styles.content} ${styles.contentCard}`}>
              <h1 className={`${styles.title} card-title`}>Tem sempre uma clínica perto de você!</h1>
              <h4>Agende agora mesmo sua consulta, exame, procedimento, ou vacina. São centenas de estabelecimentos credenciados.</h4>
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
                      <FormOptions placeholder="São Paulo" list="cidades" for="estado">Selecione seu estado</FormOptions>
                      <datalist id="cidades">
                        <option>Cidade 1</option>
                        <option>Cidade 2</option>
                      </datalist>
                      <FormOptions placeholder="Dentista" for="especialidade">Digite ou escolha uma especialidade</FormOptions>
                      <div className={`${styles.cardBtnCenter}`}>
                        <FormOptions placeholder="Jardim" className="flex-grow-1" for="cidade">Escolha o bairro</FormOptions>
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
              <CardOffers className={`${styles.cardDarkBlue}`}>
                <span>PLANO</span>
                <br />
                <h1 className={`mb-2`}>ESSENCIAL</h1>
                <p className={`mb-4`}>Qualquer consulta: R$ 59,90</p>
                <p className="mb-4">Exames até 50% mais baratos</p>
                <p className="mb-4">Exames a partir de R$ 5,00</p>
                <p className="mb-4">Consultas presenciais ou telemedicina</p>
                <ul>
                  <li>1 Vida = 12 X R$ 24,90</li>
                  <li>2 Vidas - 12 X R$ 35,90</li>
                  <li>3 Vidas - 12 X R$ 40,90</li>
                </ul>
                <p>Plano Família + R$ 5,00/mês por dependente adicional</p>
                <div className={`${styles.btnPlan} ${styles.btnFirst} d-flex flex-row-reverse`}>
                  <Link href="#"><a>ASSINE AGORA</a></Link>
                </div>
              </CardOffers>
              <CardOffers className={`${styles.cardBlue}`}>
                <span>PLANO</span>
                <br />
                <h1 className={`mb-2`}>PRIME</h1>
                <p className={`mb-4`}>Qualquer consulta: R$ 49,90</p>
                <p className="mb-4">Exames até 70% mais baratos</p>
                <p className="mb-4">Exames a partir de R$ 4,00</p>
                <p className="mb-4">Consultas presenciais ou telemedicina</p>
                <p className="mb-4">Procedimentos e Vacinas</p>
                <ul>
                  <li>1 Vida - 12 X R$ 35,90</li>
                  <li>2 Vidas - 12 X R$ 45,90</li>
                  <li>3 Vidas - 12 X R$ 54,90</li>
                </ul>
                <p>Plano Família + R$9,00/mês por dependente adicional</p>
                <div className={`${styles.btnPlan} ${styles.btnSecond} d-flex flex-row-reverse`}>
                  <Link href="#"><a>ASSINE AGORA</a></Link>
                </div>
              </CardOffers>
              <CardOffers className={`${styles.cardGreen}`}>
                <span>PLANO</span>
                <br />
                <h1 className={`mb-2`}>ESPECIAL</h1>
                <p className={`mb-4`}>Qualquer consulta: R$ 39,90</p>
                <p className="mb-4">Exames até 90% mais baratos</p>
                <p className="mb-4">Exames a partir de R$ 3,00</p>
                <p className="mb-4">Consultas presenciais ou telemedicina</p>
                <p className="mb-4">Procedimentos e Vacinas</p>
                <p className="mb-4">Medicina Estética (botox, harmonização facial, etc...)</p>
                <ul>
                  <li>1 Vida - 12 X R$ 45,90</li>
                  <li>2 Vidas - 12 X R$ 54,90</li>
                  <li>3 Vidas - 12 X R$ 66,90</li>
                </ul>
                <p>Plano Família + R$ 12,00/mês por dependente adicional</p>
                <div className="d-flex flex-row-reverse ">
                  <div style={{ marginTop: "24px" }} className={`${styles.btnPlan} ${styles.btnSpotlight} animate__animated animate__pulse animate__slow animate__infinite`}>
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
                <p>Selecione a data e horário previsto</p>
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
                <p>Receba a confirmação</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.container}`}>
        <div className={`${styles.containerFluid} container-fluid`} style={{ backgroundColor: "#f4f4f4" }}>
          <div className={`mt-5 d-flex justify-content-between`}>
            <div className={`mt-5`}>
              <div className={`mb-4`}>
                <h1>COMPARE VOCÊ MESMO</h1>

              </div>
              <div className={`d-flex ${styles.containerBenefits}`}>
                <div className={`${styles.benefits} mb-5`}>
                  <h2 className="mb-3">Convênios Antigos</h2>
                  <ul>
                    <li><FaCheck /><span>Consultas médicas</span></li>
                    <li><FaCheck /><span>Exames diagnósticos</span></li>
                    <li><FaCheck /><span>Acesso a Procedimentos</span></li>
                    <li><FaCheck /><span>Pronto socorro</span></li>
                    <li><FaCheck /><span>Internação</span></li>
                    <li><FaTimes /><span>Carência em tudo</span></li>
                    <li><FaTimes /><span>Rede de atendimento limitada</span></li>
                    <li><FaTimes /><span>Aumenta o plano conforme idade</span></li>
                    <li><FaTimes /><span>Agendamento difícil, até 30 dias de espera, via telefone</span></li>
                    <li><FaTimes /><span>Sem Medicina Estética</span></li>
                    <li><FaTimes /><span>Dificuldade em encontrar credenciais</span></li>
                    <li><FaTimes /><span>Valor médio R$ 500,00/mês</span></li>
                  </ul>
                </div>
                <div className={`${styles.benefits} mb-5`}>
                  <h2 className="mb-3">Beneficiário Prime</h2>
                  <ul>
                    <li><FaCheck /><span>Consultas médicas</span></li>
                    <li><FaCheck /><span>Exames diagnósticos</span></li>
                    <li><FaCheck /><span>Acesso a Procedimentos</span></li>
                    <li><FaTimes /><span>Pronto socorro</span></li>
                    <li><FaTimes /><span>Internação</span></li>
                    <li><FaCheck /><span>Carência 0, uso imediato</span></li>
                    <li><FaCheck /><span>Rede de atendimento ilimitada</span></li>
                    <li><FaCheck /><span>Não aumenta o plano conforme idade</span></li>
                    <li><FaCheck /><span>Agendamento fácil, via telefone, site ou app, até para o mesmo dia</span></li>
                    <li><FaCheck /><span>Medicina estética</span></li>
                    <li><FaCheck /><span>Há sempre um credenciado perto de você</span></li>
                    <li><FaCheck /><span>Valor médio R$ 35,90/mês</span></li>
                  </ul>
                </div>
              </div>
              <div className={`text-center mb-5 ${styles.btnPlan} ${styles.btnGreen}`}>
                <Link href="#"><a>ASSINE AGORA</a></Link>
              </div>
            </div>
            <div className={`${styles.imageBenefits}`}>
              <Image src="/img/home/medicos-olhando.png" width={539} height={513} />
            </div>
          </div>
        </div>
      </div>
      <section className={`${styles.container}`}>
        <div className={`${styles.containerFluid} ${styles.containerAppointments} container-fluid`}>
          <div className={`mt-5`}>
            <h1>Vantagens de verdade para nossos Beneficiários</h1>
            <h4>Menor preço garantido em consultas, exames, vacinas e procedimentos, confira!</h4>
            <div className={`${styles.content} ${styles.contentAppointments} ${styles.scrollXAppointments} d-flex`}>
              <CardAppointments>
                <h3 className={`mb-2`}>CONSULTA MÉDICAS</h3>
                <div className="d-flex justify-content-between">
                  <ul className="pt-4">
                    <li></li>
                    <li>Clínica Médica</li>
                    <li>Ginecologia</li>
                    <li>Pediatria</li>
                    <li>Cardiologia</li>
                    <li>Psiquiatria</li>
                    <li>Vascular</li>
                    <li>Urologia</li>
                    <li>Ortopedia</li>
                    <li>Dermatologia</li>
                    <li>Psicologia</li>
                    <li>Oftamologia</li>
                    <li>Nutrição</li>
                  </ul>

                  <ul className="text-center">
                    <li>PARTICULAR</li>
                    <li>90</li>
                    <li>200</li>
                    <li>150</li>
                    <li>250</li>
                    <li>250</li>
                    <li>300</li>
                    <li>250</li>
                    <li>150</li>
                    <li>150</li>
                    <li>200</li>
                    <li>150</li>
                    <li>150</li>
                  </ul>

                  <ul className="text-center">
                    <li>PELO PLANO</li>
                    <li>39,90</li>
                    <li>39,90</li>
                    <li>39,90</li>
                    <li>39,90</li>
                    <li>39,90</li>
                    <li>39,90</li>
                    <li>39,90</li>
                    <li>39,90</li>
                    <li>39,90</li>
                    <li>39,90</li>
                    <li>39,90</li>
                    <li>39,90</li>
                  </ul>
                </div>
                <ul className={``}>
                  <li style={{ fontSize: "14px", marginTop: "-38px!important" }}>Mais outras dezenas de especialidades por R$39,90</li>
                </ul>
                <div className={`${styles.btnPlan} ${styles.btnGreen} d-flex justify-content-center`}>
                  <Link href="#"><a>VEJA MAIS</a></Link>
                </div>
              </CardAppointments>
              <CardAppointments>
                <h3 className={`mb-2`}>EXAMES DIAGNÓSTICOS</h3>
                <div className="d-flex justify-content-between">
                  <ul className="pt-4">
                    <li></li>
                    <li>Hemograma Completo</li>
                    <li>Colesterol</li>
                    <li>Glicose</li>
                    <li>Ácido Úrico</li>
                    <li>Urina I</li>
                    <li>Electrocardiograma</li>
                    <li>Raio X Tórax</li>
                    <li>Raio X Coluna</li>
                    <li>Mamografia Digital</li>
                    <li>Ultrassom Mamas</li>
                    <li>Ultrassom Obstétrico</li>
                    <li>Tomografia Compu. Crânio</li>
                    <li>Tomografia Compu. Tórax</li>
                  </ul>
                  <ul className="text-center">
                    <li>PARTICULAR</li>
                    <li>22</li>
                    <li>20</li>
                    <li>17</li>
                    <li>17</li>
                    <li>17</li>
                    <li>70</li>
                    <li>80</li>
                    <li>80</li>
                    <li>300</li>
                    <li>300</li>
                    <li>300</li>
                    <li>600</li>
                    <li>600</li>
                  </ul>
                  <ul className="text-center">
                    <li>PELO PLANO</li>
                    <li>6</li>
                    <li>5</li>
                    <li>6</li>
                    <li>5</li>
                    <li>6</li>
                    <li>25</li>
                    <li>25</li>
                    <li>25</li>
                    <li>99</li>
                    <li>99</li>
                    <li>99</li>
                    <li>190</li>
                    <li>190</li>
                  </ul>
                </div>
                <div className={`${styles.btnPlan} ${styles.btnGreen} d-flex justify-content-center`}>
                  <Link href="#"><a>VEJA MAIS</a></Link>
                </div>
              </CardAppointments>
              <CardAppointments>
                <h3 className={`mb-2`}>EXAMES DIAGNÓSTICOS</h3>
                <div className="d-flex justify-content-between">
                  <ul className="pt-4">
                    <li></li>
                    <li>Vacina da Gripe</li>
                    <li>Vacina da Gripe</li>
                    <li>Vacina da Gripe</li>
                    <li>Vacina da Gripe</li>
                    <li>Vacina da Gripe</li>
                    <li>Vacina da Gripe</li>
                    <li>Vacina da Gripe</li>
                    <li>Vacina da Gripe</li>
                    <li>Vacina da Gripe</li>
                    <li>Vacina da Gripe</li>
                    <li>Vacina da Gripe</li>
                    <li>Vacina da Gripe</li>
                    <li>Vacina da Gripe</li>
                  </ul>
                  <ul className="text-center">
                    <li>PARTICULAR</li>
                    <li>100</li>
                    <li>100</li>
                    <li>100</li>
                    <li>100</li>
                    <li>100</li>
                    <li>100</li>
                    <li>100</li>
                    <li>100</li>
                    <li>100</li>
                    <li>100</li>
                    <li>100</li>
                    <li>100</li>
                    <li>100</li>
                  </ul>
                  <ul className="text-center">
                    <li>PELO PLANO</li>
                    <li>50</li>
                    <li>50</li>
                    <li>50</li>
                    <li>50</li>
                    <li>50</li>
                    <li>50</li>
                    <li>50</li>
                    <li>50</li>
                    <li>50</li>
                    <li>50</li>
                    <li>50</li>
                    <li>50</li>
                    <li>50</li>
                  </ul>
                </div>
                <div className={`${styles.btnPlan} ${styles.btnGreen} d-flex justify-content-center`}>
                  <Link href="#"><a>VEJA MAIS</a></Link>
                </div>
              </CardAppointments>
            </div>
            <span style={{ fontSize: "12px" }}>*Valores referenciais, com base na Tabela do Plano Especial de São Paulo em Janeiro de 2021. Consulte os laboratórios e clínicas participantes no ato da compra.</span>
          </div>
        </div>
      </section>
      <div className={`${styles.container}`}>
        <div className={`${styles.containerFluid} container-fluid pt-5 pb-5`} style={{ backgroundColor: "#37B6AB", color: "#FFFFFF" }}>
          <div className="d-flex">
            <div className="me-5">
              <p>{count}</p>
              <p></p>
            </div>
            <div className="me-5">
              <p></p>
              <p></p>
            </div>
            <div className="me-5">
              <p></p>
              <p></p>
            </div>
            <div className="me-5">
              <p></p>
              <p></p>
            </div>
            <div className="me-5">
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.container}`}>
        <div className={`${styles.containerFluid} container-fluid`}>
          <h1 className="mt-5 mb-5">Últimas mídias:</h1>
          <div className="d-flex justify-content-around mb-5">
            <div className="card" style={{ width: "30rem" }}>
              <img src="/img/home/imagem-teste.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className={`${styles.btnGreen} ${styles.btnPlan} mt-4 mb-3`}>
                  <a href="#">Saiba mais</a>
                </div>
              </div>
            </div>
            <div className="card" style={{ width: "30rem" }}>
              <img src="/img/home/imagem-teste.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className={`${styles.btnGreen} ${styles.btnPlan} mt-4 mb-3`}>
                  <a href="#">Saiba mais</a>
                </div>
              </div>
            </div>
            <div className="card" style={{ width: "30rem" }}>
              <img src="/img/home/imagem-teste.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className={`${styles.btnGreen} ${styles.btnPlan} mt-4 mb-3`}>
                  <a href="#">Saiba mais</a>
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
