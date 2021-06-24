import axios from "axios";
import { parseCookies, setCookie } from "nookies";
import { USER } from '../service/routes'

export async function userProfile(ctx, id) {
    const { ['AUT']: token } = parseCookies(ctx)
    try {
        const json = await axios.get(USER.PROFILE.replace(/:id/gi, id), { headers: { Authorization: `Bearer ${token}` } })
        const { user } = json.data
        return user
    } catch (error) {
        if (error.response === undefined) throw "Fatal error"

        const { data, status } = error.response
        switch (status) {
            case 400 || 404:
                switch (data.message) {
                    case "You're not an administrator and is trying to retrieve a different user data, you can only retrieve your own user data.":
                        throw "Sem autorização"
                        break;
                    default:
                        throw "Usuário não existe"
                }
                break
            default:
                throw "Erro desconhecido"
        }
    }
}
