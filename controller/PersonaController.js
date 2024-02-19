import { PersonaModel } from "../models/PersonaModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const store = async (req, res) => {
  try {
      const {Nombre, Apellido, Cedula, Correo, Telefono, Especialidad, typeusers_id} = req.body;
      if (!Nombre || !Apellido || !Cedula || !Correo || !Telefono || !Especialidad || !typeusers_id) {
          return res.status(400).json({messageF: 'Todos los campos son requeridos'});
      }

      // Verificar si ya existe una persona con el mismo correo o teléfono
      const existingPersona = await PersonaModel.findOne({
          $or: [
              { Correo: Correo },
              { Telefono: Telefono }
          ]
      });

      if (existingPersona) {
          return res.status(400).json({message: 'Ya existe un usuario con el mismo correo electrónico o teléfono'});
      }

      const persona = await PersonaModel.create({
          Nombre: Nombre,
          Apellido: Apellido,
          Cedula: Cedula,
          Correo: Correo,
          Telefono: Telefono,
          Especialidad: Especialidad,
          typeusers_id: typeusers_id
      });

      return res.status(201).json({message: 'Usuario creado exitosamente', persona: persona});
  } catch (error) {
      return res.status(500).json({error: error.message});
  }
};