import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from 'nookies'
import axios from 'axios'
import { UNITY } from '../service/routes'
import { settings } from "./auth";

export const UnityContext = createContext({
    list: []
})


export function Unity({ children }) {
    const { [settings.token.profileId]: profile, [settings.token.auth]: token } = parseCookies()
    const [list, setList] = useState([])

    useEffect(() => {
        if (profile && token)
            axios.get(UNITY.LIST, { headers: { Authorization: `Bearer ${token}` } }).then(x => setList(x.data.unity))
    }, [])

    return (
        <UnityContext.Provider value={{ list }}>
            {children}
        </UnityContext.Provider>
    )
}