const authorize = (req,res,next) => {
    const {user} = req.query
    if (user === 'jose') {
        req.user = { name: 'jose', age:20}
        next()
    }   else{
        res.status(401).send('Unauthorzed')
    }
}

module.exports = authorize