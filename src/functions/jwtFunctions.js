
let jwtSecretKey = process.env.JWT_SECRET_KEY;

// async function generateJWT(userDetailsObj)
async function generateJWT(userId, username, roles = null) {
    
}

async function decodeJWT(tokenToDecode) {
    
}

async function validateUSerAuth(request, response, next) {
    
}

module.exports = {
    generateJWT,
    decodeJWT,
    validateUSerAuth
}