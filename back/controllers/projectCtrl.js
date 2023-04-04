import Project from "../models/Project.js";
import fs from "fs";

export const getAllProject = (req, res) => {
  Project.findAll({ order: [["id", "DESC"]] })
    .then((projects) => {
      projects.forEach((project) => {
        if (project.image !== null) {
          const projectUrl = project.image;
          // we need to recreate image url for front
          const newProjectUrl = `${req.protocol}://${req.get(
            "host"
          )}/${projectUrl}`;
          project.image = newProjectUrl;
        }
      });
      res.status(200).json(projects);
    })
    .catch((err) => res.status(400).json(err));
};

export const getOneProject = (req, res) => {
  User.findOne({ where: { id: req.params.id } })
    .then((project) => {
      if (project.image !== null) {
        const projectUrl = project.image;
        // we need to recreate image url for front
        const newProjectUrl = `${req.protocol}://${req.get(
          "host"
        )}/${projectUrl}`;
        project.image = newProjectUrl;
      }
      res.status(200).json({ project });
    })
    .catch((err) => res.status(404).json({ err }));
};

export const createProject = (req, res) => {
  let projectImage = null;

  // for file
  if (req.file) {
    projectImage = `images/${req.file.filename}`;
  }
  const newProject = {
    name: req.body.name,
    desc: req.body.desc,
    link: req.body.link,
    image: projectImage,
  };

  Project.create(newProject)
    .then(() => res.status(201).json({ message: "Project created." }))
    .catch((err) => res.status(400).json({ err }));
};

export const updateProject = (req, res) => {
  let projectImage = null;
  let projectInfo = null;

  // if file exist
  if (req.file) {
    projectImage = `images/${req.file.filename}`;
    projectInfo = {
      name: req.body.name,
      desc: req.body.desc,
      link: req.body.link,
      image: projectImage,
    };

    // Delete from back old image
    Project.findOne({ where: { id: req.params.id } })
      .then((project) => {
        if (fs.existsSync(project.image)) {
          fs.unlink(project.image, () => {});
        }
      })
      .catch((err) => res.status(400).json({ err }));
  } else {
    projectInfo = {
      name: req.body.name,
      desc: req.body.desc,
      link: req.body.link,
    };
  }

  Project.update(projectInfo, { where: { id: req.params.id } })
    .then(() => res.status(200).json({ message: "Project updated." }))
    .catch((err) => res.status(400).json({ err }));
};

export const deleteProject = (req, res) => {
  Project.findOne({ where: { id: req.params.id } })
    .then((project) => {
      if (!project) {
        return res.status(404).json({ msg: "Project not found." });
      }
      // delete img
      if (fs.existsSync(project.image)) {
        fs.unlink(project.image, () => {});
      }
      Project.destroy({ where: { id: req.params.id } })
        .then(() => res.status(200).json({ message: "Project deleted." }))
        .catch((err) => res.status(400).json({ err }));
    })
    .catch((err) => res.status(400).json({ err }));
};
