const express=require('express');
const bodyParser = require('body-parser');
const {PORT}= require('./config/serverConfig')
const apiRoutes = require('./routes/index')
const UserService= require('./services/user-services')
const app = express() ;
const prepareAndStartServer = () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true }));
    app.use('/api',apiRoutes)
    app.listen(PORT,async()=>{
        console.log(`Server started at Port : ${PORT}`);
        //const repo=new UserRepository() ;
        //const response = await repo.getById(1) ;
        //console.log(response) ;
        //const incomingpassword ='123456' ;
        //const user=await User.findByPk() ;
        //const response= bcrypt.compareSync(incomingpassword,user.password);
        //console.log(response) ;
        //const service = new UserService() ;
        //const newToken=service.createToken({email:'samrendrakumar893@gmail.com',id:1})
        //console.log("new token is",newToken);
    })
}

prepareAndStartServer() ;