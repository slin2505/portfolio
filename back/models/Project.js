import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Project = db.define("project", {
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
    unique: true,
  },

  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  desc: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  link: {
    type: DataTypes.STRING,
    allowNull: false,
    isUrl: true,
  },
});

export default Project;
