import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from 'nookies'
import axios from 'axios'
import { EXAM } from '../service/routes'
import { settings } from "./auth";

export const ExamContext = createContext({
    list: []
})


export function Exam({ children }) {
    const { [settings.token.profileId]: profile, [settings.token.auth]: token } = parseCookies()
    const [list, setList] = useState([])

    useEffect(() => {
        if (profile && token)
            axios.get(EXAM.LIST, { headers: { Authorization: `Bearer ${token}` } }).then(x => setList(x.data.exam))
    }, [])

    return (
        <ExamContext.Provider value={{ list }}>
            {children}
        </ExamContext.Provider>
    )
}