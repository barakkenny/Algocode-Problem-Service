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


 async function getProblem(req, res) {
    try{
        const problem = await problemService.getProblem(req.params.problemId);
            return res.status(StatusCodes.OK).json({
                success: true,
                message: 'Successfully fetched a problem',
                error: {},
                data: problem
            });
    } catch(error){
        next(error);
    }
 }

 async function getProblems(req, res) {
    try{
        const response = await problemService.getAllProblems();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Problems fetched successfully',
            error: {},
            data: response
        });
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