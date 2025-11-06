const express = require('express');
const router = express.Router();


const constactsController = require('../controllers/contacts');

router.get('/', constactsController.getAll);

router.get('/:id', constactsController.getSingle);



// Week 2 endpoints

//POST /contacts/ - create new contact
router.post('/', constactsController.create);
//PUT /contacts/:id - update contact by id
router.put('/:id', constactsController.update);
//DELETE /contacts/:id - delete contact by id
router.delete('/:id', constactsController.deleteContact);


module.exports = router;