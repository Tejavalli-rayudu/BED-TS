const jwt = require("jsonwebtoken")
function loginService(username,password){

   const user ={
        username:"Teja",
        password:"1234"
    };
    if(username === user.username && password === user.password){
        const token = jwt.sign({
            id:1,
            username:"Teja"
        },
       process.env.JWT_SECRET,
        {expiresIn :"7d"}
    );
    return{
        success:true,
        token
    };
    }
    return{
        success:false,
        message:"Invalid username or password"
    };
}

module.exports={
    loginService
}