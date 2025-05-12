const { StatusCodes} = require('http-status-codes');
const NotImplemented = require('../errors/notImplemented.error.js');
const BadRequest = require('../errors/badrequest.error.js');

function addProblem(req, res, next) {
    try {
        throw new BadRequest('Problem Name', {message: 'Problem name is required'});    
    } catch(error) {
        next(error);
    }
 }

 function pingProblemController(req, res) {
    return res.json({message: 'ping controller is up'})
 }


 function getProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'addProblem is not implemented yet'
    }); 
 }

 function getProblems(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'addProblem is not implemented yet'
    }); 
 }

 function deleteProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'addProblem is not implemented yet'
    }); 
 }  

function updateProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'addProblem is not implemented yet'
    });        
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblemController
}