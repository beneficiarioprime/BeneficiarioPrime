import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from 'nookies'
import axios from 'axios'
import { VACCNINE } from '../service/routes'
import { settings } from "./auth";

export const VaccineContext = createContext({
    list: []
})


export function Vaccine({ children }) {
    const { [settings.token.profileId]: profile, [settings.token.auth]: token } = parseCookies()
    const [list, setList] = useState([])

    useEffect(() => {
        if (profile && token)
            axios.get(VACCNINE.LIST, { headers: { Authorization: `Bearer ${token}` } }).then(x => setList(x.data.data))
    }, [])

    return (
        <VaccineContext.Provider value={{ list }}>
            {children}
        </VaccineContext.Provider>
    )
}