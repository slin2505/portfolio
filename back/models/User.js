import { DataTypes } from "sequelize";
import db from "../config/db.js";

const User = db.define("user", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
  },

  email: {
    type: DataTypes.STRING,
    unique: true,
    validate: { isEmail: true },
    allowNull: false,
  },

  name: {
    type: DataTypes.STRING,
    validate: { isAlpha: true },
    allowNull: false,
    unique: true,
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  is_admin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

export default User;
