import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createAiCompute = async (req: Request, res: Response) => {
  const { name, type, duration, description, price } = req.body;

  try {
    const aiCompute = await prisma.compute.create({
      data: {
        name,
        type,
        duration,
        description,
        price,
      },
    });

    res.status(201).json(aiCompute);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getAiCompute = async (req: Request, res: Response) => {
  try {
    const aiCompute = await prisma.compute.findMany();
    res.status(200).json(aiCompute);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
