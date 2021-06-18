const { USER } = require("./util/routes")

module.exports = class User {
  constructor(params) {
    this.params = params
  }

  async register() {
    const fetchApi = await fetch(USER.REGISTER, { method: 'POST', body: JSON.stringify(this.params) })
    return await fetchApi.json()
  }

  async login() {
    const fetchApi = await fetch(USER.LOGIN, { method: 'POST', body: JSON.stringify(this.params) })
    return await fetchApi.json()
  }


}