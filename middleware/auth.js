const jwt = require('jsonwebtoken');
const {UnauthenticatedError} = require('../errors');        // by default index.js file is served

const authenticationMiddleware = async (req, res, next) =>{
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new UnauthenticatedError('No Token');
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = {username : decoded.username};
        next();
    } catch (error) {
        throw new UnauthenticatedError('Not Authorized');
    }
    
}


module.exports = authenticationMiddleware;