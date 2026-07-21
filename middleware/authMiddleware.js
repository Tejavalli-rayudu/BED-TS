function auth(req, res, next) {
  const token = req.headers.authorization;

   if (!token){
    return res.status(401).json({
      message: "Token Missing"
    });
   }
   

    
    
if(token !=="student-secret-token"){
    return res.status(401).json({
        message:"Invalid token "
    });
}
next();

}