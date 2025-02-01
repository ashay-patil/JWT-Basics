const jwt = require('jsonwebtoken');
const {BadRequest} = require('../errors');        // by default index.js file is served


// For login controller : - 
// Check username, password form body of post request
// If exists then create new JWT
// Send Token back to Front End


//For dashBoard controller : -
// Setup Authentication so that only request with JWT can access their respective data

const login = async (req, res)=>{
    const {username, password} = req.body;
    if(!username || !password){
        throw new BadRequest('Provide Username and Password');
    }
    const id = new Date().getDate();
    const token = jwt.sign({id, username},process.env.JWT_SECRET,{expiresIn:'30d'});          // payload , secretKey, options
    res.status(200).json({msg : 'User Created', token});
}

const dashBoard = async (req,res)=>{
    const {username} = req.user;
    const luckyNumber = Math.floor(Math.random()*100);
    res.status(200).json({msg : `Hey ${username}`,secret : `Your Lucky Number is ${luckyNumber}`});
}


module.exports = {login, dashBoard};


/*

JSON Web Tokens consist of three parts separated by dots (.), which are:

Header
Payload
Signature


Header
The header typically consists of two parts: the type of the token, which is JWT, and the signing algorithm being used, such as HMAC SHA256 or RSA.

For example:

{
  "alg": "HS256",
  "typ": "JWT"
}
Then, this JSON is Base64Url encoded to form the first part of the JWT.

Payload

The second part of the token is the payload, which contains the claims. Claims are statements about an entity (typically, the user) and additional data

An example payload could be:

{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}
The payload is then Base64Url encoded to form the second part of the JSON Web token

Signature
To create the signature part you have to take the encoded header, the encoded payload, a secret, the algorithm specified in the header, and sign that.

For example if you want to use the HMAC SHA256 algorithm, the signature will be created in the following way:

HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)
The signature is used to verify the message wasn't changed along the way, and, in the case of tokens signed with a private key, it can also verify that the sender of the JWT is who it says it is.


In authentication, when the user successfully logs in using their credentials, a JSON Web Token will be returned. Since tokens are credentials, great care must be taken to prevent security issues. In general, you should not keep tokens longer than required.

You also should not store sensitive session data in browser storage due to lack of security.

Whenever the user wants to access a protected route or resource, the user agent should send the JWT, typically in the Authorization header using the Bearer schema. The content of the header should look like the following:

Authorization: Bearer <token>
This can be, in certain cases, a stateless authorization mechanism. The server's protected routes will check for a valid JWT in the Authorization header, and if it's present, the user will be allowed to access protected resources. If the JWT contains the necessary data, the need to query the database for certain operations may be reduced, though this may not always be the case.

Note that if you send JWT tokens through HTTP headers, you should try to prevent them from getting too big. Some servers don't accept more than 8 KB in headers. If you are trying to embed too much information in a JWT token, like by including all the user's permissions, you may need an alternative solution, like Auth0 Fine-Grained Authorization.

*/