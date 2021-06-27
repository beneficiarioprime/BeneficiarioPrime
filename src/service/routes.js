const API_URL_BASE = "http://apibeneficiarioprime-com-br.umbler.net"
module.exports = { 
    EXAM: {
        LIST: `${API_URL_BASE}/exam/`
    },
    VACCNINE: {
        LIST: `${API_URL_BASE}/vaccine/`
    },
    USER: {
        REGISTER: `${API_URL_BASE}/user`,
        LOGIN: `${API_URL_BASE}/user/authenticate/:role`,
        UPDATE: `${API_URL_BASE}/user/:id`,
        PROFILE: `${API_URL_BASE}/user/:id`
    }
}