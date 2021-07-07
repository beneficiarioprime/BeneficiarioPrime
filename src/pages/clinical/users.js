import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
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

const users = [
  { name: "Roberto Carlos", role: "ADM" },
  { name: "Roberto Carlos", role: "ADM" },
  { name: "Roberto Carlos", role: "ADM" },
  { name: "Roberto Carlos", role: "ADM" },
  { name: "Roberto Carlos", role: "ADM" },
  { name: "Roberto Carlos", role: "ADM" },
  { name: "Roberto Carlos", role: "ADM" },
];

const ClinicalVaccines = () => {
  const { isLogged, user } = useContext(AuthContext);
  return (
    <>
      {isLogged && user.role == "provider" ? (
        <>
          <Head>
            <title>Usuários - Beneficiário Prime</title>
          </Head>
          <div className={`${style.body}`}>
            <div className="container pt-5 mb-5">
              <div className="card card-body mb-3">
                <div className={`${style.title}`}>Olá, {user.name}</div>
              </div>
              <RowDataClinical>
                <form>
                  <h1 className="mb-5">Usuários</h1>
                  <h6>Adicionar novo usuário</h6>
                  <div className="row">
                    <div className="col-12 col-md-9">
                      <FormOptions placeholder="Raio-x de Tórax">
                        Digite o nome ou email do usuário
                      </FormOptions>
                    </div>
                    <div className="col col-md">
                      <div class="col-md">
                        <div class="form-floating">
                          <select
                            class="form-select"
                            id="floatingSelectGrid"
                            aria-label="Floating label select example"
                          >
                            <option selected>Selecione</option>
                            <option value="1">Função 1</option>
                            <option value="2">Função 2</option>
                            <option value="3">Função 3</option>
                          </select>
                          <label for="floatingSelectGrid">Função</label>
                        </div>
                      </div>
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
                    placeholder="Pesquise pelo nome ou email"
                  />
                  <div className="table-responsive">
                    <table className="table mt-3">
                      <thead>
                        <tr>
                          <th>Nome</th>
                          <th>Função</th>
                          <th>Ação</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map((users) => (
                          <tr>
                            <td>{users.name}</td>
                            <td>{users.role}</td>
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
