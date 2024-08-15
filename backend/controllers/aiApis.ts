import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createAiApis = async (req: Request, res: Response) => {
  try {
    const { description, status, url, category, price } = req.body;
    const aiApis = await prisma.api.create({
      data: {
        category,
        description,
        url,
        price,
      },
    });

    return res.status(201).json(aiApis);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getAllAIApis = async (req: Request, res: Response) => {
  try {
    const aiApis = await prisma.api.findMany();
    res.status(200).json(aiApis);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
