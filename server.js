import express from 'express';
import dotenv from 'dotenv'
import errorHandelerMiddleware from './middlewares/errorHandelerMiddleware.js'
import routeNotFound from './middlewares/routeNotFound.js'
dotenv.config();
import connectDB from './db/connectDB.js';
import userRouter from './routes/userRoutes.js'
import 'express-async-errors';
import cors from 'cors'
const app = express();
app.use(cors());




//middlewares
app.use(express.json());

app.get('/',(req,res)=>{
    throw new Error("This is the welcome error!")
    res.send("Welcome")
});

app.use('/api/v1/auth',userRouter);

app.use(routeNotFound);
app.use(errorHandelerMiddleware);


const port = process.env.PORT || 5000;



const DB = process.env.MONGO_URL.replace('<password>',process.env.PASSWORD);

const start = async()=>{
       try{
             
            const res = await connectDB(DB);
            console.log(res.connections);
            
            app.listen(port,()=>{
                console.log(`App is listening on port ${port}`);
            })

       }catch(err){
           console.log(err.message);
       }
}

start();