const jwt =require("jsonwebtoken")
function auth(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            message: "Token Missing"
        });
    }
    try{
        const token = authHeader.split(" ")[1]
        console.log("token",token)
        const decoded =jwt.verify(token,process.env.JWT_SECRET)
        console.log("decoded",decoded)

        req.user=decoded;
        next();
    }
    catch(error){
        res.status(401).json({
            message:"Invalid token"
        })
    }

    
}

module.exports = auth;