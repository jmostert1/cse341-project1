const express = require('express');
const router = express.Router();


const constactsController = require('../controllers/contacts');

router.get('/', constactsController.getAll);

router.get('/:id', constactsController.getSingle);

module.exports = router;

//controls our routes