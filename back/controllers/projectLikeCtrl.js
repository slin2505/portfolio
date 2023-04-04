import ProjectLike from "../models/ProjectLike.js";

// count project like by id
export const getLikeforProject = (req, res) => {
  ProjectLike.count({ where: { project_id: req.body.projectId } })
    .then((likes) => res.status(200).json({ likes }))
    .catch((err) => res.status(400).json({ err }));
};

// create entry if like doesnt exist +1, delete entry if like already exist -1
export const likeDislikeProject = (req, res) => {
  ProjectLike.findOne({
    where: { project_id: req.body.projectId, user_id: req.body.userId },
  })
    .then((result) => {
      if (result == null) {
        ProjectLike.create({
          user_id: req.body.userId,
          project_id: req.body.projectId,
        })
          .then(() => res.status(201).json({ message: "+1 like" }))
          .catch((err) => res.status(400).json(err));
      } else {
        ProjectLike.destroy({
          where: { project_id: req.body.projectId, user_id: req.body.userId },
        })
          .then(() => res.status(200).json({ message: "-1 like" }))
          .catch((err) => res.status(400).json({ err }));
      }
    })
    .catch((err) => res.status(400).json({ err }));
};

// if not null = liked
export const likedByUser = (req, res) => {
  ProjectLike.findOne({
    where: { project_id: req.body.projectId, user_id: req.body.userId },
  })
    .then((result) => res.status(200).json({ result }))
    .catch((err) => res.status(400).json({ err }));
};
