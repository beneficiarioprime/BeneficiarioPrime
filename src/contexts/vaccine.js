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
            getList().then(x => console.log('loading VACCNINE...'))
    }, [])

    async function getList() {
        try {
            axios.get(VACCNINE.LIST, { headers: { Authorization: `Bearer ${token}` } }).then(x => setList(x.data.data))
        } catch (error) {
            if (error.response === undefined) throw "Fatal error"
            throw error.response.data.message || error.response.data.error
        }
    }

    async function remove(id) {
        try {
            const json = await axios.delete(VACCNINE.REMOVE.replace(/:id/gi, id), { headers: { Authorization: `Bearer ${token}` } })
            await getList()
        } catch (error) {
            if (error.response === undefined) throw "Fatal error"
            throw error.response.data.message || error.response.data.error
        }
    }

    async function create(params) {
        try {
            const json = await axios.post(VACCNINE.CREATE, params, { headers: { Authorization: `Bearer ${token}` } })
            await getList()
        } catch (error) {
            if (error.response === undefined) throw "Fatal error"
            throw error.response.data.message || error.response.data.error
        }
    }

    return (
        <VaccineContext.Provider value={{ list, create, remove }}>
            {children}
        </VaccineContext.Provider>
    )
}