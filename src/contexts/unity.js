import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from 'nookies'
import axios from 'axios'
import { UNITY } from '../service/routes'
import { settings, saveCookie } from "./auth";

export const UnityContext = createContext({
    list: [],
    signUp: () => { },
    listUnity: () => { }
})


export function Unity({ children }) {
    const { [settings.token.profileId]: profile, [settings.token.auth]: token } = parseCookies()
    const [list, setList] = useState([])

    async function listUnity() {
        axios.get(UNITY.LIST, { headers: { Authorization: `Bearer ${token}` } }).then(x => setList(x.data.unity))
    }

    async function signUp(params) {
        try {
            const apiUnity = await axios.post(UNITY.CREATE, params, { headers: { Authorization: `Bearer ${token}` } })
            saveCookie(apiUnity.data.data)
        } catch (error) {
            if (error.response === undefined) throw "Fatal error"
            throw error.response.data.message || error.response.data.error
        }
    }

    return (
        <UnityContext.Provider value={{ list, signUp, listUnity }}>
            {children}
        </UnityContext.Provider>
    )
}