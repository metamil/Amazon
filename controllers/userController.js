const { resolve } = require("path");
const user = require("../models/userModel");
const { findSourceMap } = require("module");
const client = require("../config/dbConnect").client;
const generateToken = require("../config/jwttoken").generateToken;
//console.log(client);

exports.createUser = async (req, res) => {
    console.log(req.body);
    
    const email = req.body.email;
    
    console.log(email);
    const collection = client.db("Users").collection("user");
    console.log("coellction..." + collection);
    const findUser = await collection.findOne({"email":email});

    if(!findUser){
              try{
                    await collection.insertOne(req.body);
                    res.send(req.body);
              }

              catch(error){
                    console.log(error);
                    res.json("Not created!");
              }
    }
    else{
         res.json({"msg" : "email already exists!"});
    }

}

const checkUser = async (collection, email) => {
        const user = await collection.findOne({"email" : email});
       
        if(user){        
            return user;
        }
        return null;
}

exports.loginUser = async (req,res) => {

         const email = req.body.email;
         console.log(req.body);
         const password  = req.body.password;
         const collection = client.db("Users").collection("user");

         //const collection = client.db("Users").collection("user");
         console.log("coellction..." + collection);
         

         const user = await checkUser(collection,email);

         if(user){
                if(user.password == password){
                    res.json({
                           id : user._id,
                           firstName : user.firstName,
                           lastName : user.lastName,
                           email : user.email,
                           mobile : user.mobile,
                           password : user.password,
                           token : generateToken(user._id)
                    })
                }
                else {
                    res.send("Password mismatch");
                }
         }
         else{
            res.send("User not registered");
         }
         
}

exports.getUser = async (req, res) => {
        const collection = client.db("Users").collection("user");
        const userName = req.params.userName;
        const findUser = await collection.findOne({firstName : userName});
        if(findUser){
            res.json(findUser);
        }
        else{
            res.json({
                message : "User not Found!"
            })
        }
}




