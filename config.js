module.exports = {
    ENV: process.env.NODE_ENV || 'production',
    PORT: process.env.PORT || 3000,
    URL: process.env.BASE_URL || 'http://localhost:3000',
    MONGODB_URI: process.env.MONGO_URI || 'mongodb://teacher:teacher123@ds119996.mlab.com:19996/live_poll'
}