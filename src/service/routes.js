const API_URL_BASE = "http://apibeneficiarioprime-com-br.umbler.net"
module.exports = { 
    USER: {
        REGISTER: `${API_URL_BASE}/user`,
        LOGIN: `${API_URL_BASE}/user/authenticate`,
        UPDATE: `${API_URL_BASE}/user`,
        PROFILE: `${API_URL_BASE}/user/:id`
    }
}