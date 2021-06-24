import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from 'nookies'
import Router from 'next/router'
import axios from 'axios'
import { USER } from '../service/routes'

export const AuthContext = createContext({
    user: null,
    signIn: data => { },
    signUp: data => { }
})

export function Auth({ children }) {
    const [user, setUser] = useState({})

    function saveUser(data) {
        const { token, user } = data
        const { _id, name, role } = user
        setCookie(undefined, 'AUT', token, {
            maxAge: 30 * 24 * 60 * 60 // 30 dias
        })
        setCookie(undefined, 'PROFILE', _id, {
            maxAge: 30 * 24 * 60 * 60 //salvar dados simples no localStorage para o javaScript utilizar
        })
        setUser(user)
    }


    async function signIn(params) {
        try {

            const json = await axios.post(USER.LOGIN, params)
            saveUser(json.data)
            Router.push('./patient/profile');

        } catch (error) {
            if (error.response === undefined) throw "Fatal error"

            const { status } = error.response
            switch (status) {
                case 400 || 404:
                    throw "Email ou senha inválidos"
                    break
                default:
                    throw "Erro desconhecido"
            }
        }
    }

    async function signUp(params) {
        try {

            const json = await axios.post(USER.REGISTER, params)
            saveUser(json.data)
            Router.push('./patient/profile');

        } catch (error) {
            if (error.response === undefined) throw "Fatal error"

            const { data, status } = error.response
            switch (status) {
                case 400:
                    switch (data) {
                        case "E-mail is already registered!":
                            throw "Email já cadastrado!"
                            break
                        case "CPF is already registered!":
                            throw "CPF já cadastrado!"
                            break
                        default:
                            throw "Cadastro inválido"
                            break
                    }
                    break
                default:
                    throw "Erro desconhecido"
            }
        }
    }


    return (
        <AuthContext.Provider value={{ user, signIn, signUp }}>
            {children}
        </AuthContext.Provider>
    )
}