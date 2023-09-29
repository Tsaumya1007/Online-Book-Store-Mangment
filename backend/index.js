import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import {Book} from './models/bookModel.js';
import bookRouter from "./routes/booksRoute.js";
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());

app.use('/books',bookRouter);  


// app.use(
//     cors({
//         origin: 'http://localhost:5173',
//         methods: ['GET','POST','PUT','DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// );

app.get('/',(req,res)=>{
    //console.log(req);
    return res.status(234).send('welcome to mern stack Tutorial')
})


mongoose
  .connect(mongoDBURL)
  .then(()=>{
    console.log('App connected to database');
    app.listen(PORT,()=>{
        console.log(`App is listening to port: ${PORT}`);
    
    });
  })
  .catch((e)=>{
    console.log(e);
  });