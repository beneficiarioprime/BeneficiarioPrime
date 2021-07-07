import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const IBGEContext = createContext({
  estado: [],
  cidade: [],
  distrito: [],
  getDistrito: () => {},
  getCidade: () => {},
});

export function IBGE({ children }) {
  const [estado, setEstado] = useState([]);
  const [cidade, setCidade] = useState([]);
  const [distrito, setDistrito] = useState([]);

  useEffect(() => {
    axios
      .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then((x) =>
        x.data.forEach((data) => {
          const { nome, sigla } = data;
          setEstado((old) => [...old, { nome, sigla }]);
        })
      );
  }, []);

  function getCidade(UF) {
    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}/municipios`
      )
      .then((x) => setCidade(x.data));
  }

  function getDistrito(ID) {
    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${ID}/distritos`
      )
      .then((x) => setDistrito(x.data));
  }

  return (
    <IBGEContext.Provider
      value={{ estado, cidade, getCidade, getDistrito, distrito }}
    >
      {children}
    </IBGEContext.Provider>
  );
}
