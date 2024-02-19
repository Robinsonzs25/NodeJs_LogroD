import { reservaModel } from "../models/reservaModel.js";

export const store = async(req,res)=>{
  try {
      
      const {Medico, persona_id, FechaCita}=req.body
      if(!Medico||!persona_id||!FechaCita){
          return res.status(400).json({messageF:'todos los campos son requeridos'})
      }
     
      const Cita=await reservaModel.create({
        Medico:Medico,
        persona_id:persona_id,
        FechaCita:FechaCita
      })
     
    return res.status(201).json({message:'Cita creado exitosamente', cita:Cita})
  
    } catch (error) {
            return res.status(500).json({error:error.message})
    
    }    
  }

  