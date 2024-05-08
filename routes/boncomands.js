import express from 'express';
import { getAllBonCommandes, getBonCommande, createBonCommande, updateBonCommande, deleteBonCommande } from '../controllers/boncommandes.js';

const router = express.Router(); 

router.get("/", getAllBonCommandes);
router.get("/:id", getBonCommande);
router.post("/", createBonCommande);
router.put("/:id", updateBonCommande);
router.delete("/:id", deleteBonCommande);

export default router;
