// routes/elements_facture.js
import express from 'express';
import { getAllElementsFacture, getElementFacture, createElementFacture, updateElementFacture, deleteElementFacture } from '../controllers/elements_facture.js';

const router = express.Router(); 

router.get("/", getAllElementsFacture);
router.get("/:id", getElementFacture);
router.post("/", createElementFacture);
router.put("/:id", updateElementFacture);
router.delete("/:id", deleteElementFacture);

export default router;
