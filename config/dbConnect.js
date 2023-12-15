const mongoose = require("mongoose");
const mongoDB = require("mongodb");

client = new mongoDB.MongoClient("mongodb+srv://Tamil:Tamil@amazondb.ieuaz7s.mongodb.net/?retryWrites=true&w=majority");
exports.client = client;
exports.dbConnect = async () => {

    try{
    const conn  = await client.connect();
    console.log("connected...");
    }
    catch(error){
        console.log(error);
    }
    
}
