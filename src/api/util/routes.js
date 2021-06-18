const API_URL_BASE = "http://127.0.0.1:3000"
module.exports = { 
    USER: {
        REGISTER: `${API_URL_BASE}/user`,
        LOGIN: `${API_URL_BASE}/user/authenticate`,
        UPDATE: `${API_URL_BASE}/user/:id`
    }
}