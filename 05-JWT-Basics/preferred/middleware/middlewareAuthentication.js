require('dotenv').config;
const jwt = require('jsonwebtoken');

const verifyToken =  (req,res,next)=> {
   const bearerHeader = req.headers.authorization;

   if (bearerHeader == null)
    return res.status(401)
   .json({msg:"unauthorized"});

   const token = bearerHeader.split(" ")[1];

   jwt.verify(token,`${process.env.JWT_SECRET}`, (err, name) => {
       if(err) return res.status(403)
       req.name = name;
       next();
   });
  
}
module.exports = verifyToken;
