import Comment from "../models/Comment.js";

export const getAllComments = (req, res) => {
  Comment.findAll({ order: [["id", "DESC"]] })
    .then((comments) => res.status(200).json(comments))
    .catch((err) => res.status(400).json(err));
};

export const getOneComment = (req, res) => {
  Comment.findOne({ where: { id: req.params.id } })
    .then((comment) => res.status(200).json({ comment }))
    .catch((err) => res.status(404).json({ err }));
};

export const createComment = (req, res) => {
  const newComment = {
    content: req.body.content,
    user_id: req.body.userId,
    project_id: req.body.projectId,
  };

  Comment.create(newComment)
    .then(() => res.status(201).json({ msg: "Comment created." }))
    .catch((err) => res.status(400).json({ err }));
};

export const updateComment = (req, res) => {
  const newContent = {
    content: req.body.content,
  };

  Comment.update(newContent, { where: { id: req.params.id } })
    .then(() => res.status(200).json({ msg: "Comment updated." }))
    .catch((err) => res.status(400).json({ err }));
};

export const deleteComment = (req, res) => {
  Comment.destroy({ where: { id: req.params.id } })
    .then(() => res.status(200).json({ msg: "Comment deleted." }))
    .catch((err) => res.status(400).json({ err }));
};
