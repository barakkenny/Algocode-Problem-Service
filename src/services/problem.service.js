const sanitizeMarkdownContent = require('../utils/markdownSanitizer');

class ProblemService {

    constructor(problemRepository) {
        this.problemRespository = problemRepository;
    }

    async createProblem(problemData) {
            problemData.description = sanitizeMarkdownContent(problemData.description);

            console.log('problem data', problemData)
            const problem = this.problemRespository.createProblem(problemData)
            console.log('problem created', problem)
            return problem;
        
    }

    async getAllProblems() {
            const problems = await this.problemRespository.getAllProblems();
            return problems;
}

}

module.exports =  ProblemService;