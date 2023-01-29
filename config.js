const config  = {
    dbUrl: process.env.DB_URL || 'mongodb+srv://dgarcia:I07cyfDfxWUZGtrr@cluster0.ra12jmw.mongodb.net/?retryWrites=true&w=majority',
    port: process.env.PORT || 3000,
    host : process.env.HOST || 'localhost'
}

module.exports = config;