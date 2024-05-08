// controllers/boncommandes.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getAllBonCommandes = async (req, res) => {
    try {
        const allBonCommandes = await prisma.Boncommandes.findMany();
        res.send(allBonCommandes);
    } catch (error) {
        res.send(error);
    }
}

export const getBonCommande = async (req, res) => {
    const id = req.params.id;
    try {
        const bonCommande = await prisma.Boncommandes.findUnique({
            where : {
                ID_boncommande: parseInt(id)
            }
        })
        res.send(bonCommande);
    } catch (error) {
        res.send(error);
    }
}

export const createBonCommande = async (req, res) => {
    try {
        const createdBonCommande = await prisma.Boncommandes.create({
            data: req.body
        })
        res.send(createdBonCommande);
    } catch (error) {
        res.send(error);
    }
}

export const updateBonCommande = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedBonCommande = await prisma.Boncommandes.update({
            where: {
                ID_boncommande: parseInt(id)
            },
            data: req.body
        })
        res.send(updatedBonCommande);
    } catch (error) {
        res.send(error);
    }
}

export const deleteBonCommande = async (req, res) => {
    const id = req.params.id;
    try {
        await prisma.Boncommandes.delete({
            where : {
                ID_boncommande: parseInt(id)
            }
        })
        res.send("Bon commande deleted !!");
    } catch (error) {
        res.send(error);
    }
}
