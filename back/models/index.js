import Comment from "./Comment.js";
import Project from "./Project.js";
import ProjectLike from "./ProjectLike.js";
import Tag from "./Tag.js";
import User from "./User.js";

const association = () => {
  // Comment Association
  Comment.belongsTo(User, { foreignKey: "user_id" });
  Comment.belongsTo(Project, { foreignKey: "project_id" });

  // Project Association
  Project.hasMany(Comment, { foreignKey: "project_id" });
  Project.hasMany(ProjectLike, { foreignKey: "project_id" });
  Project.belongsToMany(Tag, {
    through: "project_and_tag",
    foreignKey: "project_id",
    otherKey: "tag_id",
  });

  // ProjectLike Association
  ProjectLike.belongsTo(Project, { foreignKey: "project_id" });
  ProjectLike.belongsTo(User, { foreignKey: "user_id" });

  // Tag Association
  Tag.belongsToMany(Project, {
    through: "project_and_tag",
    foreignKey: "tag_id",
    otherKey: "project_id",
  });

  // User Association
  User.hasMany(Comment, { foreignKey: "user_id" });
  User.hasMany(ProjectLike, { foreignKey: "user_id" });
};
export default association;
