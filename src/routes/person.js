const personRoute = require('express').Router();
const personController = require('../controllers/personController');

personRoute.get('/', personController.getAllPeople);
personRoute.get('/:id', personController.getPersonDetail);
personRoute.post('/', personController.storePerson);
personRoute.put('/:id', personController.updatePerson);
personRoute.delete('/:id', personController.deletePerson);

module.exports = personRoute;