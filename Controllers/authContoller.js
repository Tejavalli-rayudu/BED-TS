const loginService -require("../Services/authService")

function login(req,res){
    const (username,password) =req.body;
    const result =loginService(username,password);

    if(result.success){
        return res.status(401).json(result)  
    }
    res.status(200).json(result);
}
module exports  ={
    login
}