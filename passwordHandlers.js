const passwords = require('./Passwords')

exports.getPassword = (req, res) => {
    res.json(passwords.getAllPassword())
}

exports.createPassword = (req, res) => {
    let {name, password, email} = req.body

    let passwordRef = passwords.createPassword({name, password, email})

    res.json(passwordRef)
}

exports.getPasswordBYID = (req, res) => {
    let {id} = req.params
    id = parseInt(id)
    let passwordRef = passwords.getPasswordByID(id)
    res.json(passwordRef)
}

exports.updatePassword = (req, res) => {
    let {id} = req.params
    id = parseInt(id)

    let {name, password, email} = req.body

    let passwordRef = passwords.updatePassword(id, {
        name, password, email
    })

    res.json(passwordRef)
}

exports.deletePassword = (req, res) => {
    let {id} = req.params
    id = parseInt(id)

    let passwordRef = passwords.deletePassword(id)

    res.json(passwordRef)
}