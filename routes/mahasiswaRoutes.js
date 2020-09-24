const { Router } = require('express');
const express = require('express');
const router = express.Router()
const mahasiswaController = require('../controller/mahasiswaController')

router.get("/", mahasiswaController.index)
router.get('/create', mahasiswaController.create)
router.post('/', mahasiswaController.store)
router.get("/:id/edit", mahasiswaController.edit)
router.put('/:id', mahasiswaController.update)
router.delete('/:id', mahasiswaController.destroy)
module.exports = router