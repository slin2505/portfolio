import Project from "../models/Project.js";
import Tag from "../models/Tag.js";

export const getAllTag = (req, res) => {
  Tag.findAll()
    .then((tags) => res.status(200).json(tags))
    .catch((err) => res.status(400).json(err));
};

export const getTagsForOneProject = (req, res) => {
  Project.findByPk(req.body.projectId, { include: Tag })
    .then((items) => res.status(200).json(items))
    .catch((err) => res.status(400).json(err));
};
export const getProjectsForOneTag = (req, res) => {
  Tag.findByPk(req.body.tagId, { include: Project })
    .then((items) => res.status(200).json(items))
    .catch((err) => res.status(400).json(err));
};

export const createTag = (req, res) => {
  const newTag = {
    name: req.body.name,
    color: req.body.color,
  };
  Tag.create(newTag)
    .then(() => res.status(201).json({ msg: "Tag created." }))
    .catch((err) => res.status(400).json({ err }));
};

export const updateTag = (req, res) => {
  const tag = {
    name: req.body.name,
    color: req.body.color,
  };

  Tag.update(tag, { where: { id: req.params.id } })
    .then(() => res.status(200).json({ msg: "Tag Updated." }))
    .catch((err) => res.status(400).json({ err }));
};

export const deleteTag = (req, res) => {
  Tag.destroy({ where: { id: req.params.id } })
    .then(() => res.status(200).json({ msg: "Tag deleted." }))
    .catch((err) => res.status(404).json({ err }));
};
