const mongoose = require('mongoose')
require('dotenv').config()

async function connectToDB() {
    try {
        console.log('starting database connection.')

        await mongoose.connect(process.env.MONGO_URL)

        console.log('database connection made successfully')
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectToDB