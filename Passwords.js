class Passwords {
    constructor() {
        this.passwords = [];
    }

    getAllPassword() {
        return this.passwords;
    }

    getPasswordByID(id) {
        return this.passwords.find((password) => password.id === id);
    }

    createPassword(password) {
        let id = this.passwords.length + 1;
        password.id = id;
        this.passwords.push(password);
        return password;
    }

    updatePassword(id, updatePassword) {
        let index = this.passwords.findIndex((password) => password.id === id);

        this.passwords[index].name = updatePassword.name || this.passwords.name;
        this.passwords[index].password = updatePassword.password || this.passwords.password;
        this.passwords[index].email = updatePassword.email || this.passwords.email;

        return this.passwords[index]
    }

    deletePassword(id) {
        let index = this.passwords.findIndex((password) => password.id === id);
        let refOBJ = this.passwords[index]
        this.passwords = this.passwords.filter(password => password.id !== id)

        return refOBJ
    }
}

module.exports = Passwords
