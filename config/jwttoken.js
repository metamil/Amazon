const jwt = require("jsonwebtoken");

exports.generateToken = (id) => {
      
 return jwt.sign({id}, process.env.SECRET_KEY,{"expiresIn" : "3d"});

}


