import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getAllElementsFacture = async (req, res) => {
    try {
        const allElementsFacture = await prisma.elements_facture.findMany();
        res.send(allElementsFacture);
    } catch (error) {
        res.send(error);
    }
}

export const getElementFacture = async (req, res) => {
    const id = req.params.id;
    try {
        const elementFacture = await prisma.elements_facture.findUnique({
            where : {
                ID_element_facture: parseInt(id)
            }
        })
        res.send(elementFacture);
    } catch (error) {
        res.send(error);
    }
}

export const createElementFacture = async (req, res) => {
    try {
        const createdElementFacture = await prisma.elements_facture.create({
            data: req.body
        })
        res.send(createdElementFacture);
    } catch (error) {
        res.send(error);
    }
}

export const updateElementFacture = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedElementFacture = await prisma.elements_facture.update({
            where: {
                ID_element_facture: parseInt(id)
            },
            data: req.body
        })
        res.send(updatedElementFacture);
    } catch (error) {
        res.send(error);
    }
}

export const deleteElementFacture = async (req, res) => {
    const id = req.params.id;
    try {
        await prisma.elements_facture.delete({
            where : {
                ID_element_facture: parseInt(id)
            }
        })
        res.send("Element facture deleted !!");
    } catch (error) {
        res.send(error);
    }
}
