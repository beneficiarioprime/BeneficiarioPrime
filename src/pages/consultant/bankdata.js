
import React, { useState } from 'react';
import FloatingLabels from '../../components/FloatingLabels';
import RowData from '../../components/RowData';
import style from '../../styles/PersonalData.module.css';
import Head from 'next/head';
import Image from 'next/image';

const data = {
  name: "Doas Urgouxei Zuygo",
}

const BankData = () => {

  const [hasPix, setHasPix] = useState(false)

  const handleClick = () => {
    setHasPix(!hasPix)
  }

  return (
    <>
    <Head>
      <title>Dados bancários - Beneficiário Prime</title>
    </Head>
      <div className={`${style.body}`}>
        <div className="container pt-5">
          <div className="card card-body mb-3">
            <div className={`${style.title}`}>
              Olá, {data.name}
            </div>
          </div>
          <RowData>
            <form>
              <h3 className="mb-5">Dados Bancários</h3>
              <FloatingLabels className={`${style.floatingLabel}`} placeholder="Banco" type="text" title="Nome do Banco" />
              <FloatingLabels className={`${style.floatingLabel}`} placeholder="Agência" type="email" title="Agência" />
              <FloatingLabels className={`${style.floatingLabel}`} placeholder="Conta Corrente" type="text" title="Conta Corrente" />

              <div class="form-check">
                <input class="form-check-input" checked={hasPix} onClick={handleClick} type="checkbox" value="" id="hasPix" />
                <label class="form-check-label" for="hasPix">Possui pix?</label>
              </div>
              {hasPix && (
                <div className="mt-3">
                  <FloatingLabels className={`${style.floatingLabel}`} placeholder="Pix" type="text" title="Chave Pix" />
                </div>
              )}
              <div className="d-flex justify-content-end">
                <button className="btn btn-primary">Salvar</button>
              </div>
            </form>
          </RowData>
        </div>
      </div>
    </>
  )
}

export default BankData;
