import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Tag = db.define("tag", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  color: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Tag;
