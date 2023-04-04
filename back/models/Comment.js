import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Comment = db.define("comment", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
  },

  content: {
    type: DataTypes.TEXT,
    validate: { isAlpha: true },
    allowNull: false,
  },
});

export default Comment;
