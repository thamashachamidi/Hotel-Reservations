
const mongoose = require ("mongoose"); 
var mongoURL ='mongodb+srv://thamashachamidi2002:<password>@cluster0.bzlnswh.mongodb.net/hotel_booking_db'

mongoose.connect(mongoURL , {useUnifiedTopology : true , useNewUrlParser: true})

var connection = mongoose.connection

connection.on('error',()=>{

    console.log('mongodb connection error')
    
    
    })
    connection.on('conncted',()=>{

        console.log('mongo ela')
        
        
        })
    module.exports = mongoose

