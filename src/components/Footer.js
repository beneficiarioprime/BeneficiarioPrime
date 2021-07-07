import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-white">
            <div className="container py-5">
                <div className="row py-4 link-footer">
                    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                        <img src="/img/logos/logo-teste.png" alt="" width="180" className="mb-3" />
                        <ul className="list-unstyled mb-0 text-muted">
                            <li className="mb-2">Av. Paes de barros, 2448 - São Paulo - SP</li>
                            <li className="">(11) 96733-9999</li>
                            <li className="mb-2">(11) 4659-0040</li>
                            <li className="mb-2">sac@beneficiarioprime.com.br</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                        <h6 className="text-uppercase font-weight-bold mb-4">Beneficiários</h6>
                        <ul className="list-unstyled mb-0">
                            {/* <li className="mb-2"><Link href="/patient/plans"><a className="text-muted">Contrate Agora</a></Link></li> */}
                            <li className="mb-2"><a href="#" className="text-muted">Como Funciona</a></li>
                            <li className="mb-2"><a href="#" className="text-muted">Mapa de Atendimento</a></li>
                            <li className="mb-2"><a href="#" className="text-muted">Painel Administrativo</a></li>
                            <li className="mb-2"><a href="#" className="text-muted">Termos de Uso e Política de Privacidade</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                        <h6 className="text-uppercase font-weight-bold mb-4">Prestadores</h6>
                        <ul className="list-unstyled mb-0">
                            {/* <li className="mb-2"><Link href="/clinical/login"><a className="text-muted">Credencie seu Estabelecimento de Saúde</a></Link></li> */}
                            {/* <li className="mb-2"><Link href="/clinical/documents"><a className="text-muted">Painel do Prestador</a></Link></li> */}
                            <li className="mb-2"><a href="#" className="text-muted">Sistema Autorizador</a></li>
                            <li className="mb-2"><a href="#" className="text-muted">Contato</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-lg-0">
                        <h6 className="text-uppercase font-weight-bold mb-4">Consultores</h6>
                        <ul className="list-unstyled mb-0">
                            {/* <li className="mb-2"><Link href="/consultant/login"><a className="text-muted">Seja um Consultor</a></Link></li> */}
                            {/* <li className="mb-2"><Link href="/consultant/personal"><a className="text-muted">Painel do Consultor</a></Link></li> */}
                            <li className="mb-2"><a href="#" className="text-muted">Material de Apoio e Marketing</a></li>
                            <li className="mb-2"><a href="#" className="text-muted">Treinamento</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
