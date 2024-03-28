import express, { Request, Response } from 'express';
import { connectDB } from './config/db';
import { propertyRouter } from './routers/property';

const app = express();

const port = 3000;

const startDB = async () => {
    try {
        await connectDB("mongodb://localhost:27017/rr");
        console.log('Mongodb is connected!!!')
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`);
        })
    } catch (error) {
        console.log(error);
    }
}

startDB();

app.use('/property', propertyRouter);