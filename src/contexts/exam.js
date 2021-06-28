import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from 'nookies'
import axios from 'axios'
import { EXAM } from '../service/routes'
import { settings } from "./auth";

export const ExamContext = createContext({
    list: [],
    create: data => { },
    remove: data => { }
})


export function Exam({ children }) {
    const { [settings.token.profileId]: profile, [settings.token.auth]: token } = parseCookies()
    const [list, setList] = useState([])

    useEffect(() => {
        if (profile && token)
            getList().then(x => console.log('loading exams...'))
    }, [])

    async function getList() {
        try {
            axios.get(EXAM.LIST, { headers: { Authorization: `Bearer ${token}` } }).then(x => setList(x.data.exam))
        } catch (error) {
            if (error.response === undefined) throw "Fatal error"
            throw error.response.data.message || error.response.data.error
        }
    }

    async function remove(id) {
        try {
            const json = await axios.delete(EXAM.REMOVE.replace(/:id/gi, id), { headers: { Authorization: `Bearer ${token}` } })
            await getList()
        } catch (error) {
            if (error.response === undefined) throw "Fatal error"
            throw error.response.data.message || error.response.data.error
        }
    }

    async function create(params) {
        try {
            const json = await axios.post(EXAM.CREATE, params, { headers: { Authorization: `Bearer ${token}` } })
            await getList()
        } catch (error) {
            if (error.response === undefined) throw "Fatal error"
            throw error.response.data.message || error.response.data.error
        }
    }

    return (
        <ExamContext.Provider value={{ list, create, remove }}>
            {children}
        </ExamContext.Provider>
    )
}