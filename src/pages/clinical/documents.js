import React, { useState, useContext, useEffect } from "react";
import FloatingLabels from "../../components/FloatingLabels";
import RowDataClinical from "../../components/RowDataClinical";
import style from "../../styles/PersonalData.module.css";
import Head from "next/head";
import { useForm, Controller } from "react-hook-form";
import InputMask from "react-input-mask";
import { AuthContext } from "../../contexts/auth";

const ClinicalDocuments = () => {
  const [hasPix, setHasPix] = useState(false);
  const [isFinance, setIsFinance] = useState(true);
  const { handleSubmit, register, control } = useForm();
  const { isLogged, user, unity } = useContext(AuthContext);

  const handleClickPix = () => {
    setHasPix(!hasPix);
  };

  const handleClickFinance = () => {
    setIsFinance(!isFinance);
  };

  useEffect(() => {
    if (unity.hasPix != undefined) setHasPix(unity.hasPix);
  }, [unity]);

  return (
    <>
      {isLogged && user.role == "provider" ? (
        <>
          <Head>
            <title>Dados do Prestador - Beneficiário Prime</title>
          </Head>
          <div className={`${style.body}`}>
            <div className="container pt-5 mb-5">
              <div
                className={`d-flex justify-content-center ${style.logo} mb-3`}
              >
                <img
                  src="/img/logos/logo-grande.png"
                  style={{ maxWidth: "250px" }}
                />
              </div>
              <div className="card card-body mb-3">
                <div className={`${style.title}`}>Olá, {unity.name}</div>
              </div>
              <RowDataClinical>
                <form>
                  <h3 className="mb-5">Dados do Prestador</h3>
                  <FloatingLabels
                    className={`${style.floatingLabel}`}
                    type="text"
                    title="Nome do prestador"
                    disabled="true"
                    defaultValue={user.name}
                  />
                  <FloatingLabels
                    className={`${style.floatingLabel}`}
                    type="email"
                    title="Email"
                    disabled="disabled"
                    defaultValue={user.email}
                  />
                  <Controller
                    render={({ field }) => (
                      <div className="form-floating mb-3">
                        <InputMask
                          id="cpnj"
                          mask="99.999.999/9999-9"
                          {...field}
                          className="form-control"
                        />
                        <label for="cnpj">CNPJ</label>
                      </div>
                    )}
                    control={control}
                    name="cnpj"
                    defaultValue={unity.cnpj}
                    rules={{ required: true }}
                  />
                  {/* <input className={`${style.floatingLabel} form-control`} type="file" id="cnpj" /> */}
                  {/* <div className="mb-3">
                                <label for="alvara" className="form-label">Alvara Vigilância</label>
                                <input className={`${style.floatingLabel} form-control`} type="file" id="alvara" />
                            </div> */}
                  {/* <div className="mb-3">
                                <label for="cremesp" className="form-label">CremeSP</label>
                                <input className={`${style.floatingLabel} form-control`} type="file" id="cremesp" />
                            </div> */}
                  <div className="row">
                    <div className="col-6">
                      <div>
                        <FloatingLabels
                          className={`${style.floatingLabel}`}
                          type="text"
                          title="Rua"
                          placeholder="rua"
                        />
                      </div>
                      <Controller
                        render={({ field }) => (
                          <div className="form-floating mb-3">
                            <InputMask
                              id="cep"
                              mask="99999-999"
                              {...field}
                              className="form-control"
                            />
                            <label for="cep">CEP</label>
                          </div>
                        )}
                        control={control}
                        // defaultValue={user.zipCode}
                        name="zipCode"
                      />
                    </div>
                    <div className="col-6">
                      <div>
                        <FloatingLabels
                          className={`${style.floatingLabel}`}
                          maxLength="120"
                          type="text"
                          title="Rua"
                          placeholder="rua"
                          defaultValue={unity.street}
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div>
                        <FloatingLabels
                          className={`${style.floatingLabel}`}
                          maxLength="8"
                          type="text"
                          title="Número"
                          placeholder="número"
                          defaultValue={unity.number}
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div>
                        <FloatingLabels
                          className={`${style.floatingLabel}`}
                          maxLength="30"
                          type="text"
                          title="Cidade"
                          placeholder="Cidade"
                          defaultValue={unity.city}
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div>
                        <Controller
                          name="state"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <div className="form-floating mb-3">
                              <select
                                {...field}
                                className="form-select"
                                id="uf"
                                aria-label="Estado"
                              >
                                <option selected>Estado</option>
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
                          )}
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div>
                        <FloatingLabels
                          className={`${style.floatingLabel}`}
                          maxLength="120"
                          type="text"
                          title="Bairro"
                          placeholder="Bairro"
                          defaultValue={unity.district}
                        />
                      </div>
                    </div>
                  </div>
                  <hr className="mt-4 mb-4" />
                  <div className="row">
                    <div className={`col-12 col-md-6 ${style.borderRight}`}>
                      <FloatingLabels
                        className={`${style.floatingLabel}`}
                        type="text"
                        title="Nome do responsável técnico"
                        placeholder="técnico"
                        defaultValue={unity.techinicalResponsibleName}
                      />
                      <div className="row">
                        <div className="col-12 col-md">
                          <FloatingLabels
                            className={`${style.floatingLabel}`}
                            type="text"
                            title="Email"
                            placeholder="email"
                            defaultValue={unity.techinicalResponsibleEmail}
                          />
                        </div>
                        <div className="col-12 col-md">
                        <Controller
                              render={({ field }) => (
                                <div className="form-floating mb-3">
                                  <InputMask
                                    id="phone"
                                    mask="+55 (99) 99999-9999"
                                    {...field}
                                    className="form-control"
                                  />
                                  <label for="phone">Telefone</label>
                                </div>
                              )}
                              control={control}
                              name="phone"
                              rules={{ required: true }}
                              defaultValue={unity.techinicalResponsiblePhone}
                            />
                        </div>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          checked={isFinance}
                          onClick={handleClickFinance}
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          É o responsável financeiro?
                        </label>
                      </div>
                    </div>
                    <div className="col col-md">
                      <div className="col-12 col-md">
                        <FloatingLabels
                          className={`${style.floatingLabel}`}
                          type="text"
                          disabled={isFinance && "disabled"}
                          title="Nome do responsável financeiro"
                          placeholder="técnico"
                          defaultValue={unity.financialResponsibleName}
                        />
                        <div className="row">
                          <div className="col-12 col-md">
                            <FloatingLabels
                              className={`${style.floatingLabel}`}
                              disabled={isFinance && "disabled"}
                              type="text"
                              title="Email"
                              placeholder="email"
                              defaultValue={unity.financialResponsibleEmail}
                            />
                          </div>
                          <div className="col-12 col-md">
                            <Controller
                              render={({ field }) => (
                                <div className="form-floating mb-3">
                                  <InputMask
                                    id="phone"
                                    mask="+55 (99) 99999-9999"
                                    {...field}
                                    className="form-control"
                                  />
                                  <label for="phone">Telefone</label>
                                </div>
                              )}
                              control={control}
                              name="phone"
                              rules={{ required: true }}
                              defaultValue={unity.financialResponsiblePhone}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h4 className="mt-5 mb-4">Dados bancários</h4>
                  <div className="row">
                    <div className="col-12 col-md-4">
                      <FloatingLabels
                        className={`${style.floatingLabel}`}
                        type="text"
                        title="Nome do banco"
                        placeholder="banco"
                        defaultValue={unity.bankName}
                      />
                    </div>
                    <div className="col-12 col-md-4">
                      <FloatingLabels
                        className={`${style.floatingLabel}`}
                        type="text"
                        title="Agência"
                        placeholder="Agência"
                        defaultValue={unity.bankAgency}
                      />
                    </div>
                    <div className="col-12 col-md-4">
                      <FloatingLabels
                        className={`${style.floatingLabel}`}
                        type="text"
                        title="Conta corrente"
                        placeholder="Conta corrente"
                        defaultValue={unity.bankAccount}
                      />
                    </div>
                  </div>
                  <div className="form-check mb-3">
                  <input
                      class="form-check-input"
                      checked={hasPix}
                      onClick={handleClickPix}
                      type="checkbox"
                      value=""
                      id="hasPix"
                      name="hasPix"
                      register={{ ...register("hasPix") }}
                    />
                    <label className="form-check-label" for="pix">
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
                        defaultValue={unity.numberPix}
                      />
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
      ) : (
        <> </>
      )}
    </>
  );
};

export default ClinicalDocuments;
