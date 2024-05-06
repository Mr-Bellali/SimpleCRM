import express, { Router } from 'express';
import { createBondcomand, getAllboncomands } from '../controllers/boncomands.js';

const router = express.Router(); 

router.get("/", getAllboncomands);
router.post('/', createBondcomand);


export default router;