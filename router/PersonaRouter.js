import express from 'express';
import { store} from '../controller/PersonaController.js';
import { PersonaModel } from '../models/PersonaModel.js';

const router = express.Router();

router.post('/registrar', store);

router.post('/buscar', async (req, res) => {
    try {
      // Obtén la especialidad de los parámetros de la consulta
      const {Especialidad} = req.body;
      
      if (!Especialidad) {
        return res.status(400).json({ message: 'La especialidad es requerida' });
      }
      
      // Buscar personas por especialidad
      const personas = await PersonaModel.findAll({
        where: {
          Especialidad: Especialidad
        }
      });
      
      if (personas.length === 0) {
        return res.status(404).json({ message: 'No se encontraron medico con esa especialidad' });
      }
      
      return res.status(200).json(personas);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  });

export const RouterPersona = router;
