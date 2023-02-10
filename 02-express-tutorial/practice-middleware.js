const statement = 'I love eating tacos with guac';

const consoleLog = (req,res, next)=> {
    console.log(statement);
    next();
}
exports.consoleLog = consoleLog;