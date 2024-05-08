import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getAllBonCommandes = async (req, res) => {
    try {
        const allBonCommandes = await prisma.boncommandes.findMany();
        res.send(allBonCommandes);
    } catch (error) {
        res.send(error);
    }
}

export const getBonCommande = async (req, res) => {
    const id = req.params.id;
    try {
        const bonCommande = await prisma.boncommandes.findUnique({
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
        const { elements, ...bonCommandeData } = req.body; 
        const createdBonCommande = await prisma.boncommandes.create({
            data: {
                ...bonCommandeData, 
                elements: {
                    create: elements
                }
            },
            include: {
                elements: true
            }
        });
        res.send(createdBonCommande);
    } catch (error) {
        res.send(error);
    }
}

export const updateBonCommande = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedBonCommande = await prisma.boncommandes.update({
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
