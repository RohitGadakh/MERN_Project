const express=require('express')
const morgan=require('morgan')
const bodyParser=require('body-parser')
const cors=require('cors')
const dotenv=require('dotenv')
const connectDb=require('./config/config')
// dotenv config
dotenv.config();
connectDb()   // call config.js

const app=express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan('dev'));


const Port= process.env.PORT || 5000

//routes

// app.get("/",async(req,res)=>{
//     res.send("<h1>POS Backend</h1>");
// })

app.use('/api/items',require('./routes/itemRoutes'))
app.use('/api/users',require('./routes/userRoutes'))
app.use('/api/bills',require('./routes/billsRoute'))
//listen
app.listen(Port,()=>{
    console.log(`Server running on Port ${Port}`);
});


