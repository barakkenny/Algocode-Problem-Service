const { StatusCodes} = require('http-status-codes');
const NotImplemented = require('../errors/notImplemented.error.js');
// const BadRequest = require('../errors/badrequest.error.js');
const { ProblemRepository } = require('../repositories');
const { ProblemService } = require('../services');

const problemService = new ProblemService(new ProblemRepository());

async function addProblem(req, res, next) {
    try {
        console.log('incoming request body', req.body)
        const newProblem = await problemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'Problem created successfully',
            error: {},
            data: newProblem
        });  
    } catch(error) {
        next(error);
    }
 }

 function pingProblemController(req, res) {
    return res.json({message: 'ping controller is up'})
 }


 function getProblem(req, res) {
    try{
        throw new NotImplemented('Add Problem')
    } catch(error){
        next(error);
    }
 }

 function getProblems(req, res) {
    try{
        throw new NotImplemented('Add Problem')
    } catch(error){
        next(error);
    }
 }

 function deleteProblem(req, res) {
    try{
        throw new NotImplemented('delete problem')
    } catch(error){
        next(error);
    }
 }  

function updateProblem(req, res) {
    try{
        throw new NotImplemented('update problem')
    } catch(error){
        next(error);
    }        
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblemController
}