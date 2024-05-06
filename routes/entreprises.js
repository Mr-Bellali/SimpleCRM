import express from 'express';
import { createEntreprise, deleteEntreprise, getAllEntreprises, getEntreprise, updateEntreprise } from '../controllers/entreprises.js';

const router = express.Router();

router.get("/" , getAllEntreprises);
router.get("/:id", getEntreprise)
router.post("/", createEntreprise);
router.put("/:id", updateEntreprise);
router.delete("/:id", deleteEntreprise)
export default router;