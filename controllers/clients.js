import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getAllClients = async (req, res) => {
    try {
        const allClients = await prisma.clients.findMany();
        res.send(allClients);
    } catch (error) {
        res.send(error);
    }
}

export const getClient = async (req, res) => {
    const id = req.params.id;
    try {
        const client = await prisma.clients.findUnique({
            where : {
                ID_client: parseInt(id)
            }
        })
        res.send(client);
    } catch (error) {
        res.send(error);
    }
}

export const createClient = async (req,res) => {
    try {
        const createdClient = await prisma.clients.create({
            data: req.body
        })
        res.send(createdClient);
    } catch (error) {
        res.send(error);
    }
}

export const updateClient = async (req, res) => {
    const id = req.params.id;
    const newPrenom = req.body.Prenom;
    const newNom = req.body.Nom;
    const newAdresse = req.body.Adresse;
    const newVille = req.body.Ville;
    const newNumero_telephone = req.body.Numero_telephone;
    const newEmail = req.body.Email;

    try {
        const updatedClient = await prisma.clients.update({
            where: {
                ID_client: parseInt(id)
            },
            data:{
                Prenom: newPrenom,
                Nom: newNom,
                Adresse: newAdresse,
                Ville: newVille,
                Numero_telephone: newNumero_telephone,
                Email: newEmail  
            }
        })
        res.send(updatedClient);
    } catch (error) {
        res.send(error);
    }
}

export const deleteClient = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedClient = await prisma.clients.delete({
            where : {
                ID_client: parseInt(id)
            }
        })
        res.send("client deleted !!");
    } catch (error) {
        res.send(error);
    }
}