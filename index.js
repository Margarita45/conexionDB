import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import conectarDB from './config/db.js'


dotenv.config(); //para trabajar con las variables de entorno


const PORT  = process.env.PORT || 40<<00;


const app = express();
//para trabajr con documentos json
app.use(express.json());

conectarDB();

// Middleware
app.use('/', (req, res)=>{
    res.json("Hola mundo expressJS joaa me salio esta cagaaa")
});


app.listen(PORT, () =>{
    console.log(`server listening on ${PORT}`);
});