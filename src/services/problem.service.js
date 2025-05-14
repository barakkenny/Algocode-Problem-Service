const sanitizeMarkdownContent = require('../utils/markdownSanitizer');

class ProblemService {

    constructor(problemRepository) {
        this.problemRespository = problemRepository;
    }

    async createProblem(problemData) {
        try {
            problemData.description = sanitizeMarkdownContent(problemData.description);

            console.log('problem data', problemData)
            const problem = this.problemRespository.createProblem(problemData)
            console.log('problem created', problem)
            return problem;
        } catch(error) {
            console.log(error)
            throw error;
        }
        
    }
}

module.exports =  ProblemService;