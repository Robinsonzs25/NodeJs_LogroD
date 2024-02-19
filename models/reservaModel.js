import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";
import { PersonaModel } from "./PersonaModel.js";

export const reservaModel = sequelize.define("reserva",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,

    },
    Medico:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    FechaCita:{
        type:DataTypes.DATE,
        allowNull:false,
    },
},
{
    timestamps:false
});

PersonaModel.hasMany(reservaModel, { foreignKey: "persona_id" });
reservaModel.belongsTo(PersonaModel, { foreignKey: "persona_id" });