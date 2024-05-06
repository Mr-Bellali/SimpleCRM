import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


export const getAllEntreprises = async (req,res) => {
    const allEntreprises = await prisma.entreprises.findMany();
    res.send(allEntreprises);
}

export const getEntreprise = async (req, res) => {
    const id = req.params.id;
    try {
        const getEntreprise = await prisma.entreprises.findUnique({
            where: {
                ID_entreprise: parseInt(id)
            }
        })
        res.send(getEntreprise);
    } catch (error) {
        res.send(error);
    }
}

export const createEntreprise = async (req,res) => {
    try {
        const newEntreprise = await prisma.entreprises.create({data: req.body});
        res.send(newEntreprise);
    } catch (err) {
        res.send(err);
    }
}

export const updateEntreprise = async (req,res) => {
    const id = req.params.id;
    const newNom_entreprise = req.body.Nom_entreprise;
    const newAdresse_siege_social = req.body.Adresse_siege_social;
    const newDate_creation = req.body.Date_creation;
    const newNumero_identification_fiscale = req.body.Numero_identification_fiscale;
    const newCapital = req.body.Capital;
    const newNombre_employes = req.body.Nombre_employes;
    const newVille = req.body.Ville ;
    const newPersonne_responsable = req.body.Personne_responsable;
    const newNumero_telephone_entreprise = req.body.Numero_telephone_entreprise;
    const newEmail_entreprise = req.body.Email_entreprise ;
    try {
        
        const updatedEntreprise = await prisma.entreprises.update({
            where : {ID_entreprise: parseInt(id)},
            data: {
                Nom_entreprise: newNom_entreprise,
                Adresse_siege_social: newAdresse_siege_social,
                Date_creation: newDate_creation,
                Numero_identification_fiscale: newNumero_identification_fiscale,
                Capital: newCapital,
                Nombre_employes: newNombre_employes,
                Ville: newVille,
                Personne_responsable: newPersonne_responsable,
                Numero_telephone_entreprise: newNumero_telephone_entreprise,
                Email_entreprise: newEmail_entreprise
            }
           
        })
        res.send(updatedEntreprise);
    } catch (err) {
        res.send(err);
    }
}

export const deleteEntreprise = async (req, res) => {
    const id = req.params.id;

    try {
        const deletedEntreprise = await prisma.entreprises.delete({
            where: {
                ID_entreprise: parseInt(id)
            }
        })
        res.send(deletedEntreprise);
        res.send("Entreprise deleted");
    } catch (error) {
        res.send(error)
    }

}

