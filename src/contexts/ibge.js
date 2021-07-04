import { createContext, useEffect, useState } from "react";
import axios from 'axios'

export const IBGEContext = createContext({
    estado: []
})

export function IBGE({ children }) {
    const [estado, setEstado] = useState([])

    useEffect(() => {
        axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados").then(x => x.data.forEach(data => {
            const { nome, sigla } = data
            setEstado(old => [...old, { nome, sigla }])
        }))
    }, [])



    return <IBGEContext.Provider value={{ estado }}>
        {children}
    </IBGEContext.Provider >
}