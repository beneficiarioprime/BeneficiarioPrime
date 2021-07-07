import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import FloatingLabels from "../../components/FloatingLabels";
import RowDataClinical from "../../components/RowDataClinical";
import style from "../../styles/PersonalData.module.css";
import Head from "next/head";
import Image from "next/image";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import FormOptions from "../../components/FormOptions";
import { AuthContext } from "../../contexts/auth";

const sales = [
  { vaccine: "Coronavac", price: 15.0 },
  { vaccine: "Coronavac", price: 15.0 },
  { vaccine: "Coronavac", price: 15.0 },
  { vaccine: "Coronavac", price: 15.0 },
  { vaccine: "Coronavac", price: 15.0 },
  { vaccine: "Coronavac", price: 15.0 },
  { vaccine: "Coronavac", price: 15.0 },
];

const ClinicalVaccines = () => {
  const { isLogged, user } = useContext(AuthContext);
  return (
    <>
      {isLogged && user.role == "provider" ? (
        <>
          <Head>
            <title>Exames - Beneficiário Prime</title>
          </Head>
          <div className={`${style.body}`}>
            <div className="container pt-5 mb-5">
              <div className="card card-body mb-3">
                <div className={`${style.title}`}>Olá, {user.name}</div>
              </div>
              <RowDataClinical>
                <form>
                  <h1 className="mb-5">Vacinas</h1>
                  <h6>Adicionar nova vacina</h6>
                  <div className="row">
                    <div className="col-12 col-md-9">
                      <FormOptions
                        placeholder="Raio-x de Tórax"
                        list="exams"
                        for="estado"
                      >
                        Selecione ou digite a vacina
                      </FormOptions>
                      <datalist id="exams">
                        <option>Vacina 1</option>
                        <option>Vacina 2</option>
                      </datalist>
                    </div>
                    <div className="col col-md">
                      <FloatingLabels
                        className={`${style.floatingLabel}`}
                        type="text"
                        title="Valor"
                        placeholder="Valor"
                      />
                    </div>
                  </div>
                  <div class="d-grid gap-2 mt-3">
                    <button class="btn btn-primary" type="button">
                      Adicionar
                    </button>
                  </div>
                  <input
                    className="form-control mt-5"
                    type="text"
                    placeholder="Pesquise pela vacina"
                  />
                  <div className="table-responsive">
                    <table className="table mt-3">
                      <thead>
                        <tr>
                          <th>Vacina</th>
                          <th>Preço</th>
                          <th>Ação</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sales.map((sale) => (
                          <tr>
                            <td>{sale.vaccine}</td>
                            <td>
                              {sale.price.toLocaleString("pt-br", {
                                minimumFractionDigits: 2,
                              })}
                            </td>
                            <td>
                              <Link href="/clinical/staff/oaisfjoisafj/edit">
                                <a className="btn btn-primary">
                                  <FontAwesomeIcon icon={faPencilAlt} />
                                </a>
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </form>
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

export default ClinicalVaccines;
