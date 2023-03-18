

const jwt = require('jsonwebtoken')
 const {BadRequest} = require('../errors')

const login = async (req,res) =>{
    const {username,password} = req.body
//mongo
// Joi
//check in the controller

    if(!username || !password){
    throw new BadRequest('Please provide email and password')  
    }
//demo
    const id = new Date().getDate()

// keep small payload
    const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'})


    res.status(200).json({msg:'user created',token})
}

const dashboard = async (req,res) =>{
   console.log(req.user)


    const luckyNumber = Math.floor(Math.random()*100)

    res.status(200).json({
        msg:`Hello, ${req.user.username}`,
        secret:`Here is your authorized data, your lucky number is ${luckyNumber}`})


}

module.exports = {
    login,
    dashboard
}