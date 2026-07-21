function loginService(username,password){

    const user ={
        username:"Teja",
        password:"1234"
    };
    if(username === user.username && password === user.password){
        return{
            success:true ,
            token:"student-secret-token"
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