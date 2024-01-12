const jwt = require('jsonwebtoken')
// SECREATEKEY
const fetchUser = async(req,res,next)=>{
   try {
    const token = req.headers.authorization;
    if(!token){
        res.status(401).send({error: "please authenticate a valid token"})
    }else{
        const data = jwt.verify(token,process.env.SECREATEKEY);
        req.body = data;
        next()
    }
   } catch (error) {
    console.log('Get not user detailes yet');
    res.status(401).send('Get not user detailes ' + error)
   }
}
module.exports = fetchUser;