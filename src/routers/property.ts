import express, { Request, Response } from "express";
import { Property } from '../models/property';
import { StatusCodes } from 'http-status-codes';
import { v4 as uuid } from 'uuid';

// Global Config
export const propertyRouter = express.Router();

propertyRouter.use(express.json());

// GET
propertyRouter.get("/", async (_req: Request, res: Response) => {
    try {
        const newProperty = await Property.create({ name: uuid() })
        console.log(newProperty);
        res.status(StatusCodes.CREATED).json(newProperty);
    } catch (error) {
        //@ts-ignore
        res.status(500).send(error.message);
    }
});

// POST
propertyRouter.post("/", async (_req: Request, res: Response) => {


})