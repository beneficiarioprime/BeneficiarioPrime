const API_URL_BASE = "http://apibeneficiarioprime-com-br.umbler.net"
module.exports = { 
    EXAM: {
        LIST: `${API_URL_BASE}/exam/page/:number?limit=:limit`,
        CREATE: `${API_URL_BASE}/exam/`,
        REMOVE: `${API_URL_BASE}/exam/:id`
    },
    VACCNINE: {
        LIST: `${API_URL_BASE}/vaccine/page/:number?limit=:limit`,
        CREATE: `${API_URL_BASE}/vaccine/`,
        REMOVE: `${API_URL_BASE}/vaccine/:id`
    },
    UNITY: {
        LIST: `${API_URL_BASE}/unity/`
    },
    APPOINTMENT: {
        LIST: `${API_URL_BASE}/appointment/page/:number?limit=:limit`,
        CREATE: `${API_URL_BASE}/appointment/`,
        REMOVE: `${API_URL_BASE}/appointment/:id`
    },
    USER: {
        REGISTER: `${API_URL_BASE}/user?role=:role`,
        LIST: `${API_URL_BASE}/user`,
        LOGIN: `${API_URL_BASE}/user/authenticate?role=:role`,
        UPDATE: `${API_URL_BASE}/user/:id`,
        PROFILE: `${API_URL_BASE}/user/:id`
    }
}