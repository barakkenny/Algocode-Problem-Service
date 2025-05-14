const sanitizeMarkdownContent = require('../utils/markdownSanitizer');

class ProblemService {

    constructor(problemRepository) {
        this.problemRespository = problemRepository;
    }

    async createProblem(problemData) {
            problemData.description = sanitizeMarkdownContent(problemData.description);

            const problem = this.problemRespository.createProblem(problemData)
            return problem;
        
    }

    async getAllProblems() {
            const problems = await this.problemRespository.getAllProblems();
            return problems;
}

    async getProblem(problemId){
        const problem = await this.problemRespository.getProblem(problemId);
        return problem;
    }

}

module.exports =  ProblemService;