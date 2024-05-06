import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getAllboncomands = async (req, res) => {
    try {
        const boncomands = await prisma.boncommandes.findMany();
        res.send(boncomands);
    } catch (error) {
        res.send(error);
    }
}

export const createBondcomand = async (req, res) => {
    try {
        const createdBondcomand = await prisma.boncommandes.create({
            data: req.body
        })
        res.send(createdBondcomand);
    } catch (error) {
        res.send(error);
    }
}