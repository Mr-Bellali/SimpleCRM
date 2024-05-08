import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getAllFactures = async (req, res) => {
    try {
        const allFactures = await prisma.factures.findMany();
        res.send(allFactures);
    } catch (error) {
        res.send(error);
    }
}

export const getFacture = async (req, res) => {
    const id = req.params.id;
    try {
        const facture = await prisma.factures.findUnique({
            where : {
                ID_facture: parseInt(id)
            }
        })
        res.send(facture);
    } catch (error) {
        res.send(error);
    }
}

export const createFacture = async (req, res) => {
    try {
        const createdFacture = await prisma.factures.create({
            data: {
                Date_facture: req.body.Date_facture,
                Echeance: req.body.Echeance,
                Total_HT: req.body.Total_HT,
                TVA: req.body.TVA,
                Total_TTC: req.body.Total_TTC,
                ID_entreprise: req.body.ID_entreprise,
                ID_client: req.body.ID_client,
                elements: req.body.elements // Assuming req.body.elements contains the array of elements_facture
            }
        })
        res.send(createdFacture);
    } catch (error) {
        res.send(error);
    }
}

export const updateFacture = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedFacture = await prisma.factures.update({
            where: {
                ID_facture: parseInt(id)
            },
            data: {
                Date_facture: req.body.Date_facture,
                Echeance: req.body.Echeance,
                Total_HT: req.body.Total_HT,
                TVA: req.body.TVA,
                Total_TTC: req.body.Total_TTC,
                ID_entreprise: req.body.ID_entreprise,
                ID_client: req.body.ID_client,
                elements: req.body.elements // Assuming req.body.elements contains the array of elements_facture
            }
        })
        res.send(updatedFacture);
    } catch (error) {
        res.send(error);
    }
}

export const deleteFacture = async (req, res) => {
    const id = req.params.id;
    try {
        await prisma.factures.delete({
            where : {
                ID_facture: parseInt(id)
            }
        })
        res.send("Facture deleted !!");
    } catch (error) {
        res.send(error);
    }
}
