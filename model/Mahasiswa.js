const { connect } = require("../config/db")

module.exports = {
    get: function (con, callback) {
        con.query("SELECT * FROM mahasiswa", callback)
    },
    getById: function (con, id, callback) {
        con.query(`SELECT * FROM mahasiswa WHERE id = ${id}`, callback)
    },
    create: function (con, data, callback) {
        con.query(
            `INSERT INTO mahasiswa SET 
            nim = '${data.nim}', 
            firstname = '${data.firstname}', 
            lastname = '${data.lastname}', 
            email = '${data.email}'`,
            callback
        )
    },
    update: function (con, data, id, callback) {
        console.log(data.nim)
        console.log(data.firstname)
        console.log(data.lastname)
        console.log(data.email)
        console.log(id)
        let sql = "UPDATE mahasiswa SET nim='" + data.nim + "', firstname='" + data.firstname + "', lastname='" + data.lastname + "', email='" + data.email + "' WHERE id=" + id;
        con.query(sql, callback)
        // should make code like bellow, but cannot forever
        // con.query(`UPDATE mahasiswa SET nim = '${data.nim}', firstname = '${data.firstname}', lastname = '${data.lastname}', email = '${data.email}', WHERE id = ${id}`, callback)
    },
    destroy: function (con, id, callback) {
        // console.log(id)
        con.query(`DELETE FROM mahasiswa WHERE id = ${id}`, callback)
    }
}