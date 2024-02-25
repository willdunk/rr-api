import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import Property from "../models/property";

// Global Config
export const propertyRouter = express.Router();

propertyRouter.use(express.json());

// GET
propertyRouter.get("/", async (_req: Request, res: Response) => {
  try {
    //@ts-ignore
    const games = (await collections.property.find({}).toArray()) as Property[];

    res.status(200).send(games);
  } catch (error) {
    //@ts-ignore
    res.status(500).send(error.message);
  }
});

// POST

// PUT

// DELETE