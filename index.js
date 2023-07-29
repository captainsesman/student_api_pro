import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { dataOptions } from "./config/data-source.js";
import { Users } from "./models/user.entity.js";
import { createConnection } from "typeorm";

const app = express();
app.use(express.json());

app.post("/users", async (req, res) => {
  // Access to the DATABASE and Table
  const con = await createConnection(dataOptions);

  try {
    const userRepo = await con.getRepository(Users);
    const newUser = await userRepo.save(req.body);

    res.send({
      message: "User Created Successfully",
      user: newUser,
    });
  } catch (e) {
    res.send({
      message: "An Error Just Happened",
      error: e.message,
    });
  }
});

// Endpoint for fetching All Users
app.get("/users", async (req, res) => {
  // Access to the DATABASE and Table
  const con = await createConnection(dataOptions);

  try {
    const userRepo = await con.getRepository(Users);
    const allUsers = await userRepo.find();

    res.send({
      message: "Query Succcessful",
      user: allUsers,
    });
  } catch (e) {
    res.send({
      message: "An Error Just Happened",
      error: e.message,
    });
  }
});

// Endpoint for fetching a single user by email
app.get("/user/:email", async (req, res) => {
  // Access to the DATABASE and Table
  const con = await createConnection(dataOptions);
  let email = req.params.email;

  if (!email.includes("@gmail.com")) {
    return res.send("Please Provide a Valid Email");
  }

  console.log("I was not executed ");

  try {
    const userRepo = await con.getRepository(Users);
    const allUsers = await userRepo.findOne({
      where: { email },
    });

    res.send({
      message: "Query Succcessful",
      user: allUsers,
    });
  } catch (e) {
    res.send({
      message: "An Error Just Happened",
      error: e.message,
    });
  }
});

// Endpoint Deleting a Users
app.get("/user/:emailorid", async (req, res) => {
  // Access to the DATABASE and Table
  const con = await createConnection(dataOptions);

 
});

app.listen(5000, () => {
  console.log("Server running on Port 5000");
});
