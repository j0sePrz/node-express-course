const jwt = require('jsonwebtoken')


const logon = async (req,res) =>{
  const {name,password} = req.body;
  if (!name || !password){
  res.status(401).json({msg:'no name or password has been added'});
}else{
  const token = jwt.sign({name},`${process.env.JWT_SECRET}`,{expiresIn:'24h'});
res.status(200).json({msg:'user created',token});
}
}


const hello = async (req,res)=>{
 res.status(200).json(req.name);
}

module.exports = {
  logon,
  hello
}