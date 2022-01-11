
module.exports = {
    
    DB : process.env.MONGODB || 'mongodb://localhost/xipxat',
    PORT: process.env.PORT || 3000,
    SECRET_TOKEN: 'super_secret_token',
    
}