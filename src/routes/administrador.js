const express=require('express');
const controller = require('../controllers/administradorController');
const router= express.Router()
const administradorController=require('../controllers/administradorController')


router.get('/',administradorController.list)
router.post('/add', administradorController.save)
router.get('/delete/:id', administradorController.delete)
router.get('/update/:id', administradorController.edit)
router.post('/update/:id', administradorController.newdata)
module.exports=router;