module.exports = event => {
    let json = {}
    event.preventDefault()
    const formData = new FormData(event.target)
    for (let [key, value] of formData.entries()) json[key] = value
    return json
}