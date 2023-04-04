import { DataTypes } from "sequelize";
import db from "../config/db.js";

const ProjectLike = db.define("project", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
  },
});

export default ProjectLike;
