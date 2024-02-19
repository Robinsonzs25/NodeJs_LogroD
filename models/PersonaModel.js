import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";
import { TypeUsersModel } from "./TypeUsersModel.js";

export const PersonaModel = sequelize.define("persona",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Cedula: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Correo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Telefono: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Especialidad: {
      type: DataTypes.STRING,
      allowNull: true,
      
    },
  },
  {
    timestamps: false,
  });

TypeUsersModel.hasMany(PersonaModel, { foreignKey: "typeusers_id" });
PersonaModel.belongsTo(TypeUsersModel, { foreignKey: "typeusers_id" });
