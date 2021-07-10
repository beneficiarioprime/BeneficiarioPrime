import React, { useState, useContext, useEffect } from "react";
import FloatingLabels from "../../components/FloatingLabels";
import RowData from "../../components/RowData";
import style from "../../styles/PersonalData.module.css";
import Head from "next/head";
import Image from "next/image";
import { update, UserContext } from "../../contexts/user";
import { AuthContext } from "../../contexts/auth";
import InputMask from "react-input-mask";
import { useForm, Controller } from "react-hook-form";

const BankData = () => {
  const [hasPix, setHasPix] = useState(false);
  const { isLogged, user } = useContext(AuthContext);
  const { handleSubmit, register, control } = useForm();
  const { update } = useContext(UserContext);

  const handleClick = () => {
    setHasPix(!hasPix);
  };

  async function handleUpdate(data) {
    try {
      await update(user._id, data).then((json) => {
        console.log(json);
        location.reload();
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (user.hasPix != undefined) setHasPix(user.hasPix);
  }, [user]);

  return (
    <>
      {isLogged && user.role == "consultant" ? (
        <>
          <Head>
            <title>Dados bancários - Beneficiário Prime</title>
          </Head>
          <div className={`${style.body}`}>
            <div className="container pt-5">
              <div className="card card-body mb-3">
                <div className={`${style.title}`}>Olá, {user.name}</div>
              </div>
              <RowData>
                <form onSubmit={handleSubmit(handleUpdate)}>
                  <h3 className="mb-5">Dados Bancários</h3>
                  <FloatingLabels
                    className={`${style.floatingLabel}`}
                    placeholder="Banco"
                    type="text"
                    title="Nome do Banco"
                    name="bankName"
                    defaultValue={user.bankName}
                    name="bankName"
                    register={{ ...register("bankName") }}
                  />
                  <FloatingLabels
                    className={`${style.floatingLabel}`}
                    placeholder="Agência"
                    type="text"
                    title="Agência"
                    defaultValue={user.bankAgency}
                    name="bankAgency"
                    register={{ ...register("bankAgency") }}
                  />
                  <FloatingLabels
                    className={`${style.floatingLabel}`}
                    placeholder="Conta Corrente"
                    type="text"
                    title="Conta Corrente"
                    defaultValue={user.bankAccount}
                    name="bankAccount"
                    register={{ ...register("bankAccount") }}
                  />

                  <div class="form-check">
                    <input
                      class="form-check-input"
                      checked={hasPix}
                      onClick={handleClick}
                      type="checkbox"
                      value=""
                      id="hasPix"
                      name="hasPix"
                      register={{ ...register("hasPix") }}
                    />
                    <label class="form-check-label" for="hasPix">
                      Possui pix?
                    </label>
                  </div>
                  {hasPix && (
                    <div className="mt-3">
                      <FloatingLabels
                        className={`${style.floatingLabel}`}
                        placeholder="Pix"
                        type="text"
                        title="Chave Pix"
                        defaultValue={user.numberPix}
                        name="numberPix"
                        register={{ ...register("numberPix") }}
                      />
                    </div>
                  )}
                  <div className="d-flex justify-content-end">
                    <button className="btn btn-primary" type="submit">
                      Salvar
                    </button>
                  </div>
                </form>
              </RowData>
            </div>
          </div>
        </>
      ) : (
        <> </>
      )}
    </>
  );
};

export default BankData;
