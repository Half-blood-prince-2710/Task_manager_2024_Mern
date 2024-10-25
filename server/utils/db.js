const mongoose = require('mongoose')
const asyncHandler = require('express-async-handler')

const connectDb = asyncHandler( async () =>{
    await mongoose.connect(process.env.URI)
    console.log('db connected')
}

)


module.exports = connectDb;