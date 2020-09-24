const { connect, destroy } = require('../config/db');
const Mahasiswa = require('../model/Mahasiswa');

module.exports = {
    index: function (req, res) {
        Mahasiswa.get(req.con, function (err, rows) {
            // console.log(rows)
            res.render('index', ({ mahasiswa: rows }))
        })
    },
    create: function (req, res) {
        res.render("create")
    },
    store: function (req, res) {
        Mahasiswa.create(req.con, req.body, function (err) {
            res.redirect("/")
        })
    },
    edit: function (req, res) {
        Mahasiswa.getById(req.con, req.params.id, function (err, rows) {
            // console.log(rows)
            res.render("edit", { mahasiswa: rows[0] })
        })
    },
    update: function (req, res) {
        Mahasiswa.update(req.con, req.body, req.params.id, function (err) {
            res.redirect("/")
        })
    },
    destroy: function (req, res) {
        Mahasiswa.destroy(req.con, req.params.id, function (err) {
            res.redirect("/")
        })
        // console.log(req)
    }
}