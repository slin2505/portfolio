import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Auth
export const signUp = (req, res) => {
  // hash using bcrypt lib
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const newUser = {
        email: req.body.email,
        name: req.body.name,
        password: hash,
      };

      // create User
      User.create(newUser)
        .then(() => res.status(201).json({ msg: "User created." }))
        .catch((err) => res.status(400).json({ err }));
    })
    .catch((err) => res.status(500).json({ err }));
};

export const signIn = (req, res) => {
  // Get user from db and compare pass with bcrypt lib
  User.findOne({ where: { email: req.body.email } })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ err: "User not found!" });
      } else {
        bcrypt
          .compare(req.body.password, user.password)
          .then((valid) => {
            if (!valid) {
              return res.status(401).json({ err: "Wrong password!" });
            } else {
              return res.status(200).json({
                userId: user.id,
                token: jwt.sign(
                  { userId: user.id, isAdmin: user.is_admin },
                  process.env.passwordToken,
                  { expiresIn: "48h" }
                ),
              });
            }
          })
          .catch((err) => res.status(500).json({ err }));
      }
    })
    .catch((err) => res.status(500).json({ err }));
};

// User
export const getAllUsers = (req, res) => {
  User.findAll({ attributes: { exclude: ["password"] } })
    .then((users) => res.status(200).json(users))
    .catch((err) => res.status(400).json(err));
};

export const getUserById = (req, res) => {
  User.findOne({
    where: { id: req.params.id },
    attributes: { exclude: ["password"] },
  })
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(404).json({ err }));
};

export const updateUser = (req, res) => {
  const userProfile = {
    email: req.body.email,
    name: req.body.lastName,
    password: req.body.password,
  };

  // password case
  if (userProfile.password !== undefined) {
    bcrypt.hash(req.body.password, 10).then((hash) => {
      userProfile.password = hash;
      User.update(userProfile, { where: { id: req.params.id } })
        .then(() => res.status(200).json({ msg: "User Updated." }))
        .catch((err) => res.status(400).json({ err }));
    });
  }
  // no password case
  else {
    User.update(userProfile, { where: { id: req.params.id } })
      .then(() => res.status(200).json({ msg: "User Updated." }))
      .catch((err) => res.status(400).json({ err }));
  }
};

export const deleteUser = (req, res) => {
  User.destroy({ where: { id: req.params.id } })
    .then(() => res.status(200).json({ msg: "User deleted." }))
    .catch((err) => res.status(404).json({ err }));
};
