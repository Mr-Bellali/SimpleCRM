import express from 'express';
import { getAllFactures, getFacture, createFacture, updateFacture, deleteFacture } from '../controllers/factures.js';

const router = express.Router(); 

router.get("/", getAllFactures);
router.get("/:id", getFacture);
router.post("/", createFacture);
router.put("/:id", updateFacture);
router.delete("/:id", deleteFacture);

export default router;
