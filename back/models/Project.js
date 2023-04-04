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
    validate: { isAlpha: true },
    allowNull: false,
    unique: true,
  },

  image: {
    type: DataTypes.STRING,
    validate: { isAlpha: true },
    allowNull: false,
  },

  desc: {
    type: DataTypes.TEXT,
    validate: { isAlpha: true },
    allowNull: false,
  },

  link: {
    type: DataTypes.STRING,
    validate: { isAlpha: true },
    allowNull: false,
    isUrl: true,
  },
});

export default Project;
