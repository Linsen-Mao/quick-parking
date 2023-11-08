import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export async function getUsers(req: Request, res: Response) {
  try {
    const { offset, limit, filterBy } = req.query;

    // You can add further authentication check for 'guard' or 'admin' here.

    let usersQuery = prisma.user.findMany({
      skip: parseInt(offset as string) || 0,
      take: parseInt(limit as string) || 10,
    });

    const users = await usersQuery;

    res.json({ users });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unexpected error occurred" });
    }
  }
}
