import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import React, { useEffect, useState, useContext } from 'react';
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
  faTimesCircle,
  faCheckCircle,
  faHeartbeat,
  faUsers,
  faDiagnoses,
  faArrowCircleUp
} from '@fortawesome/free-solid-svg-icons'
import Footer from '../components/Footer';
import AnimatedCounter from '../components/AnimatedCounter';
import CollapseAnswer from '../components/CollapseAnswer';
import LoginModal from '../components/LoginModal';
import FormOptions from '../components/FormOptions';
import CardResult from '../components/CardResult';
import Loading from '../components/Loading';
import { IBGEContext, IBGE } from '../contexts/ibge';

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

  let [option, setOption] = useState('consulta');
  const [showScroll, setShowScroll] = useState(false);
  const [showCardResult, setShowCardResult] = useState(false);
  const { estado, cidade, getCidade, distrito, getDistrito } = useContext(IBGEContext)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false)
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
    <>
      <Head>
        <title>Home - Benefici??rio Prime</title>
      </Head>
      <Navbar />

      <header className={styles.container}>
        <div className={`container-fluid flex-row-reverse ${styles.containerFluid} ${styles.displayFlexCard}`} style={{ maxHeight: "700px" }}>
          <div className={`${styles.imageBackground}`}>
            <Image src="/svg/undraw_doctors_hwty.svg" layout="fill" />
          </div>
          <div className={`${styles.containerCard}`}>
            <div className={`${styles.content} ${styles.contentCard}`}>
              <h1 className={`${styles.title} card-title`}>Tem sempre uma cl??nica perto de voc??!</h1>
              <h4>Agende agora mesmo sua consulta, exame, procedimento, ou vacina. S??o centenas de estabelecimentos credenciados.</h4>
              <div className={`card mt-4 ${styles.card}`}>
                <div className="card-body">
                  <div className={`mb-1 ${styles.scrollX}`}>
                    <ButtonOptions className={option === "consulta" && `${styles.buttonOptionsSelected}`} onClick={() => setOption('consulta')}><span><FontAwesomeIcon icon={faStethoscope} /></span> Consultas Presenciais</ButtonOptions>
                    <ButtonOptions className={option === "telemedicina" && `${styles.buttonOptionsSelected}`} onClick={() => setOption('telemedicina')}><span><FontAwesomeIcon icon={faVideo} /></span> Telemedicina</ButtonOptions>
                    <ButtonOptions className={option === "exames" && `${styles.buttonOptionsSelected}`} onClick={() => setOption('exames')}><span><FontAwesomeIcon icon={faMicroscope} /></span> Exames</ButtonOptions>
                    <ButtonOptions className="d-none" onClick={() => setOption('vacinas')}><span><FontAwesomeIcon icon={faCrutch} /></span> Vacinas</ButtonOptions>
                    <ButtonOptions className="d-none" onClick={() => setOption('procedimentos')}><span><FontAwesomeIcon icon={faNotesMedical} /></span> Procedimentos</ButtonOptions>
                  </div>
                  {option == 'telemedicina' ? (
                    <>
                      <FormOptions placeholder="Dentista" htmlFor="especialidade">Digite ou escolha uma especialidade</FormOptions>
                      <div className={`d-flex justify-content-center align-items-center ${styles.buttonSend}`}>
                        <button className={`ms-3`}
                        // onClick={() => setShowCardResult(true)}
                        >Buscar</button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="form-floating mb-3">
                        <select className="form-select mb-3" id="estados" aria-label="Selecione seu estado" onChange={(x) => getCidade(x.target.value)}>
                          <option selected>Selecione</option>
                          {estado.map((x, i) => <option key={i} value={x.sigla}>{x.sigla} - {x.nome}</option>)}

                        </select>
                        <label for="floatingSelect">Selecione seu estado</label>
                      </div>

                      <div className="form-floating mb-3">
                        <select className="form-select mb-3" id="cidades" aria-label="Selecione sua cidade" disabled={cidade.length == 0} onChange={(x) => getDistrito(x.target.value)}>
                          <option selected>Selecione</option>
                          {cidade.map((x, i) => <option key={i} value={x.id}>{x.nome}</option>)}
                        </select>
                        <label for="floatingSelect">Selecione sua cidade</label>
                      </div>

                      <FormOptions placeholder="Dentista" htmlFor="especialidade">Digite ou escolha uma especialidade</FormOptions>
                      <div className={`${styles.cardBtnCenter}`}>
                        <div className="form-floating flex-grow-1">
                          <select className="form-select flex-grow-1" id="bairros" aria-label="Selecione um bairro" disabled={distrito.length == 0}>
                            <option selected>Selecione</option>
                            {distrito.map((x, i) => <option key={i} value={x.id}>{x.nome}</option>)}
                          </select>
                          <label for="floatingSelect">Selecione um bairro</label>
                        </div>
                        <div className={`d-flex align-items-center ${styles.buttonSend}`}>
                          <button className={`ms-3`}
                          // onClick={() => setShowCardResult(true)}
                          >Buscar</button>
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
      {showCardResult ? (
        <section className={`${styles.container}`}>
          <div className={`${styles.containerFluid} container-fluid`}>
            <CardResult
              title="Exame tal tal"
              description="Deserunt adipisicing laborum amet tempor sint eu ut dolor."
            />
          </div>
        </section>
      ) : (
        <>
          <section className={styles.container}>
            <div className={`${styles.containerFluid} container-fluid`}>
              <div className={`${styles.containerCardOffers}`}>
                <h1>O Benefici??rio Prime ?? tudo que voc?? est?? precisando!</h1>
                <h4>Com ele, ter?? assist??ncia m??dica e laboratorial de qualidade e com pre??o justo.</h4>
                <h4>Consultas presenciais, telemedicina, exames e procedimentos.</h4>
                <h3>Confira nossos planos:</h3>
                <div className={`${styles.content} ${styles.contentCardOffers} d-flex`}>
                  <CardOffers className={`${styles.cardDarkBlue}`}>
                    <span>PLANO</span>
                    <br />
                    <h1 className={`mb-2`}>ESSENCIAL</h1>
                    <p className={`mb-4`}>Qualquer consulta: R$ 59,90</p>
                    <p className="mb-4">Exames at?? 50% mais baratos</p>
                    <p className="mb-4">Exames a partir de R$ 5,00</p>
                    <p className="mb-4">Consultas presenciais ou telemedicina</p>
                    <ul>
                      <li>1 Vida = 12 X R$ 24,90</li>
                      <li>2 Vidas - 12 X R$ 35,90</li>
                      <li>3 Vidas - 12 X R$ 40,90</li>
                    </ul>
                    <p>Plano Fam??lia + R$ 5,00/m??s por dependente adicional</p>
                    <div className={`${styles.btnPlan} ${styles.btnFirst} d-flex flex-row-reverse`}>
                      <Link href="#"><a>ASSINE AGORA</a></Link>
                    </div>
                  </CardOffers>
                  <CardOffers className={`${styles.cardBlue}`}>
                    <span>PLANO</span>
                    <br />
                    <h1 className={`mb-2`}>PRIME</h1>
                    <p className={`mb-4`}>Qualquer consulta: R$ 49,90</p>
                    <p className="mb-4">Exames at?? 70% mais baratos</p>
                    <p className="mb-4">Exames a partir de R$ 4,00</p>
                    <p className="mb-4">Consultas presenciais ou telemedicina</p>
                    <p className="mb-4">Procedimentos e Vacinas</p>
                    <ul>
                      <li>1 Vida - 12 X R$ 35,90</li>
                      <li>2 Vidas - 12 X R$ 45,90</li>
                      <li>3 Vidas - 12 X R$ 54,90</li>
                    </ul>
                    <p>Plano Fam??lia + R$9,00/m??s por dependente adicional</p>
                    <div className={`${styles.btnPlan} ${styles.btnSecond} d-flex flex-row-reverse`}>
                      <Link href="#"><a>ASSINE AGORA</a></Link>
                    </div>
                  </CardOffers>
                  <CardOffers className={`${styles.cardGreen}`}>
                    <span>PLANO</span>
                    <br />
                    <h1 className={`mb-2`}>ESPECIAL</h1>
                    <p className={`mb-4`}>Qualquer consulta: R$ 49,90</p>
                    <p className="mb-4">Exames at?? 90% mais baratos</p>
                    <p className="mb-4">Exames a partir de R$ 3,00</p>
                    <p className="mb-4">Consultas presenciais ou telemedicina</p>
                    <p className="mb-4">Procedimentos e Vacinas</p>
                    <p className="mb-4">Medicina Est??tica (botox, harmoniza????o facial, etc...)</p>
                    <ul>
                      <li>1 Vida - 12 X R$ 45,90</li>
                      <li>2 Vidas - 12 X R$ 54,90</li>
                      <li>3 Vidas - 12 X R$ 66,90</li>
                    </ul>
                    <p>Plano Fam??lia + R$ 12,00/m??s por dependente adicional</p>
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
                  <h1>?? muito f??cil agendar uma consulta</h1>
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
                    <p>Selecione a data e hor??rio previsto</p>
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
                    <p>Receba a confirma????o</p>
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
                    <h1>COMPARE VOC?? MESMO</h1>

                  </div>
                  <div className={`d-flex ${styles.containerBenefits}`}>
                    <div className={`${styles.benefits} mb-5`}>
                      <h2 className="mb-3">Conv??nios Antigos</h2>
                      <ul>
                        <li><FaCheck /><span>Consultas m??dicas</span></li>
                        <li><FaCheck /><span>Exames diagn??sticos</span></li>
                        <li><FaCheck /><span>Acesso a Procedimentos</span></li>
                        <li><FaCheck /><span>Pronto socorro</span></li>
                        <li><FaCheck /><span>Interna????o</span></li>
                        <li><FaTimes /><span>Car??ncia em tudo</span></li>
                        <li><FaTimes /><span>Rede de atendimento limitada</span></li>
                        <li><FaTimes /><span>Aumenta o plano conforme idade</span></li>
                        <li><FaTimes /><span>Agendamento dif??cil, at?? 30 dias de espera, via telefone</span></li>
                        <li><FaTimes /><span>Sem Medicina Est??tica</span></li>
                        <li><FaTimes /><span>Dificuldade em encontrar credenciais</span></li>
                        <li><FaTimes /><span>Valor m??dio R$ 500,00/m??s</span></li>
                      </ul>
                    </div>
                    <div className={`${styles.benefits} mb-5`}>
                      <h2 className="mb-3">Benefici??rio Prime</h2>
                      <ul>
                        <li><FaCheck /><span>Consultas m??dicas</span></li>
                        <li><FaCheck /><span>Exames diagn??sticos</span></li>
                        <li><FaCheck /><span>Acesso a Procedimentos</span></li>
                        <li><FaTimes /><span>Pronto socorro</span></li>
                        <li><FaTimes /><span>Interna????o</span></li>
                        <li><FaCheck /><span>Car??ncia 0, uso imediato</span></li>
                        <li><FaCheck /><span>Rede de atendimento ilimitada</span></li>
                        <li><FaCheck /><span>N??o aumenta o plano conforme idade</span></li>
                        <li><FaCheck /><span>Agendamento f??cil, via telefone, site ou app, at?? para o mesmo dia</span></li>
                        <li><FaCheck /><span>Medicina est??tica</span></li>
                        <li><FaCheck /><span>H?? sempre um credenciado perto de voc??</span></li>
                        <li><FaCheck /><span>Valor m??dio R$ 35,90/m??s</span></li>
                      </ul>
                    </div>
                  </div>
                  <div className={`text-center mb-5 ${styles.btnPlan} ${styles.btnGreen}`}>
                    {/* <Link href="/patient/plans"> */}
                    <a href="#">ASSINE AGORA</a>
                    {/* </Link> */}

                  </div>
                </div>
                <div className={`${styles.imageBenefits}`}>
                  <Image src="/img/home/medicos-olhando.png" width={739} height={713} />
                </div>
              </div>
            </div>
          </div>
          <section className={`${styles.container}`}>
            <div className={`${styles.containerFluid} ${styles.containerAppointments} container-fluid`}>
              <div className={`mt-5`}>
                <h1>Vantagens de verdade para nossos Benefici??rios</h1>
                <h4>Menor pre??o garantido em consultas, exames, vacinas e procedimentos, confira!</h4>
                <div className="d-flex justify-content-center">
                  <div className={`${styles.content} ${styles.contentAppointments} ${styles.scrollXAppointments} d-flex`}>
                    <CardAppointments>
                      <h3 className={`mb-2 text-center`}>CONSULTA M??DICAS</h3>
                      <div className="d-flex justify-content-between">
                        <ul>
                          <li className={`${styles.liEspaco}`}></li>
                          <li>Cl??nica M??dica</li>
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
                          <li>Nutri????o</li>
                        </ul>

                        <ul className="text-center">
                          <li>PARTICULAR</li>
                          <li>R$</li>
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
                          <li>R$</li>
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
                      <h3 className={`mb-2 text-center`}>EXAMES DIAGN??STICOS</h3>
                      <div className="d-flex justify-content-between">
                        <ul>
                          <li className={`${styles.liEspaco}`}></li>
                          <li>Hemograma Completo</li>
                          <li>Colesterol</li>
                          <li>Glicose</li>
                          <li>??cido ??rico</li>
                          <li>Urina I</li>
                          <li>Electrocardiograma</li>
                          <li>Raio X T??rax</li>
                          <li>Raio X Coluna</li>
                          <li>Mamografia Digital</li>
                          <li>Ultrassom Mamas</li>
                          <li>Ultrassom Obst??trico</li>
                          <li>Tomografia Compu. Cr??nio</li>
                          <li>Tomografia Compu. T??rax</li>
                        </ul>
                        <ul className="text-center">
                          <li>PARTICULAR</li>
                          <li>R$</li>
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
                          <li>R$</li>
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
                    {/* <CardAppointments className="d-none">
                      <h3 className={`mb-2 text-center`}>EXAMES DIAGN??STICOS</h3>
                      <div className="d-flex justify-content-between">
                        <ul>
                          <li className={`${styles.liEspaco}`}></li>
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
                          <li>R$</li>
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
                          <li>R$</li>
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
                    </CardAppointments> */}
                  </div>
                </div>
                <span style={{ fontSize: "12px" }}>*Valores referenciais, com base na Tabela do Plano Especial de S??o Paulo em Janeiro de 2021. Consulte os laborat??rios e cl??nicas participantes no ato da compra.</span>
              </div>
            </div>
          </section>
          <div className={`${styles.container}`}>
            <div className={`${styles.containerFluid} container-fluid pt-5 pb-5`} style={{ backgroundColor: "#3174B4", color: "#FFFFFF" }}>
              <div className="d-flex justify-content-center">
                <div>
                  <AnimatedCounter
                    number={2133}
                    icon={faCalendarAlt}
                    name="Consultas Agendadas"
                  />
                  <AnimatedCounter
                    number={5193}
                    icon={faHeartbeat}
                    name="Total de Benefici??rios"
                  />
                  <AnimatedCounter
                    number={67}
                    icon={faUsers}
                    name="Especialidades"
                  />
                  <AnimatedCounter
                    number={2400}
                    icon={faDiagnoses}
                    name="Exames Dispon??veis"
                  />
                  <AnimatedCounter
                    number={84}
                    icon={faMapMarkerAlt}
                    name="Unidades de Atendimento"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <div className={`${styles.container}`}>
            <div className={`${styles.containerFluid} container-fluid`}>
              <h1 className="mt-5 mb-5">??ltimas m??dias:</h1>
              <div className="d-flex justify-content-center mb-5">
                <div>
                  <div className="card ms-3 me-3 mb-3" style={{ maxWidth: "30rem", minWidth: "20rem", display: "inline-block" }}>
                    <img src="/img/home/imagem-teste.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <div className={`${styles.btnGreen} ${styles.btnPlan} mt-4 mb-3`}>
                        <a href="#">Saiba mais</a>
                      </div>
                    </div>
                  </div>
                  <div className="card ms-3 me-3 mb-3" style={{ maxWidth: "30rem", minWidth: "20rem", display: "inline-block" }}>
                    <img src="/img/home/imagem-teste.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <div className={`${styles.btnGreen} ${styles.btnPlan} mt-4 mb-3`}>
                        <a href="#">Saiba mais</a>
                      </div>
                    </div>
                  </div>
                  <div className="card ms-3 me-3 mb-3" style={{ maxWidth: "30rem", minWidth: "20rem", display: "inline-block" }}>
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
          </div> */}
          <div className={`${styles.container}`}>
            <div className={`${styles.containerFluid} ${styles.containerCollapse} container-fluid`}>
              <div>
                <h1>Perguntas e Respostas</h1>
                <CollapseAnswer id="pergunta1"
                  answer="Por que devo ser um Benefici??rio Prime?">
                  <p>Como Benefici??rio, voc?? ter?? acesso ?? medicina de qualidade em ??timas cl??nicas e laborat??rios e hospitais por um pre??o que ir?? adorar pagar.<br />
                    Voc?? pode fazer um plano s?? para voc?? ou incluir toda fam??lia, pois os planos s??o bem em conta e o melhor funciona!</p>
                </CollapseAnswer>
                <CollapseAnswer id="pergunta2"
                  answer="Quanto pagarei nas consultas? E tem direito a retorno?">
                  <p>O valor ?? sempre fixo, conforme o plano escolhido, independente da especialidade m??dica, que deseja passar. Escolha um dos planos dispon??veis Essencial, Prime ou Especial.<br />
                    Voc?? ainda tem direito a retorno gratuito nas especialidades M??dicas CRM em at?? 30 dias.
                    E se marcar consulta online, voc?? pode retornar de forma presencial, com mesmo especialista.
                    Somente n??o h?? previs??o de retorno nas especialidades de tratamento cont??nuo, que s??o obstetr??cia e psiquiatria.
                  </p>
                </CollapseAnswer>
                <CollapseAnswer id="pergunta3"
                  answer="Demora muito para conseguir agendar uma consulta?">
                  <p>N??o! Voc?? consegue agendar at?? para o mesmo dia, desde haja disponibilidade na agenda do m??dico.</p>
                </CollapseAnswer>
                <CollapseAnswer id="pergunta4"
                  answer="Como funciona no caso dos exames?">
                  <p>Voc?? ter?? acesso a ??timos laborat??rios espalhados pelo Brasil, podendo escolher aquele que melhor lhe atender. Quanto melhor o plano escolhido menor ser?? o pre??o dos exames.</p>
                </CollapseAnswer>
                <CollapseAnswer id="pergunta5"
                  answer="E se eu precisar de uma cirurgia?">
                  <p>Tamb??m ter?? suporte a mais de 30 tipos de cirurgias, em excelentes hospitais, podendo at?? parcelar o pagamento. Al??m das cirurgias, voc?? tem acesso ??s centenas de procedimentos realizados em ambiente cl??nico.</p>
                </CollapseAnswer>
                <CollapseAnswer id="pergunta6"
                  answer="Vacinas t??m?">
                  <p>Sim, voc?? tamb??m ter?? acesso ??s dezenas de cl??nicas de vacinas espalhadas em todo Brasil. E n??s negociamos para que voc?? pague um pre??o justo por elas. E claro, quanto melhor o plano escolhido, menor o pre??o cobrado.</p>
                </CollapseAnswer>
                <CollapseAnswer id="pergunta7"
                  answer="E medicina Est??tica ou Terap??utica, t??m?">
                  <p>Tem sim! Botox, harmoniza????o facial, escleroterapia (secagem dos vasinhos)* e outros.<br />
                    Tamb??m tem terapia para tratar da sa??de mental e f??sica, tais como tratamento de dores ou emagrecimento, condicionamento f??sico.</p>
                </CollapseAnswer>
                <CollapseAnswer id="pergunta8"
                  answer="Voc??s s??o conv??nio? Qual ?? a diferen??a?">
                  <p>N??o somos conv??nio e n??o cobrimos pronto socorro.<br />
                    Mas voc?? sabia que em 98% dos casos, seu problema de sa??de ?? resolvido a n??vel cl??nico?
                    Mesmo os exames mais complexos, conosco voc?? pagar?? mais barato!</p>
                </CollapseAnswer>
                <CollapseAnswer id="pergunta9"
                  answer="E quais as vantagens ent??o?">
                  <p>A primeira grande vantagem ?? que seu plano n??o aumenta conforme a idade.<br />
                    A segunda vantagem, ?? que voc?? ser?? atendida por excelentes m??dicos, pagando bem menos do que um conv??nio cobra todo m??s. <br />
                    N??s negociamos todos os pre??os para que voc?? consiga realizar todo seu tratamento m??dico, com toda dignidade que merece.<br />
                    E mais uma coisa! Voc?? nunca ter?? que se aborrecer para agendar uma consulta ou exame.</p>
                </CollapseAnswer>
                <CollapseAnswer id="pergunta10"
                  answer="E se eu quiser cancelar, pago multa?">
                  <p>N??o, voc?? pode cancelar quando quiser! Nossos Benefici??rios est??o conosco pois est??o contentes com o servi??o oferecido, n??o por que obrigamos. Com voc?? n??o ser?? diferente!</p>
                </CollapseAnswer>
              </div>
            </div>
          </div>
        </>)}
      <div onClick={scrollTop} style={{ display: showScroll ? 'flex' : 'none' }} className={`${styles.scrollTop}`}><FontAwesomeIcon icon={faArrowCircleUp} /></div>
      <Footer />
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossOrigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT" crossOrigin="anonymous"></script>
    </>
  )
}