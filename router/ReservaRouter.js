import express from 'express';
import { store } from '../controller/ReservaController.js';


const router = express.Router();

router.post('/reserva', store);

export const RouterReserva = router;