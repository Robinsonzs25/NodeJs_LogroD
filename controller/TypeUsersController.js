import { TypeUsersModel } from "../models/TypeUsersModel.js";

export const getTypesUser = async (req, res) => {
    const types = await TypeUsersModel.findAll();
    if (!types) {
      return res.status(401).json({ message: "there is not data" });
    }
    res.status(200).json({ type: types });
};

export const store=async(req,res)=>{
  try {
      const {type}=req.body
      if(!type){
          return res.status(400).json({messageF:'todos los campos son requeridos'})
      } 
      const creartipo=await TypeUsersModel.create({
          type:type
      })
    return res.status(201).json({message:'tipo creado exitosamente', creartipo:creartipo})
  
    } catch (error) {
            return res.status(500).json({error:error.message})
    
    }    
}
