import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { dataOptions } from "./config/data-source.js";
import { Users } from "./models/user.entity.js";
import { createConnection } from "typeorm";

const app = express();
app.use(express.json());

app.get("/users", async (req, res) => {});

app.post("/users", async (req, res) => {
  // Access to the DATABASE and Table
  const con = await createConnection(dataOptions);

  const userRepo = await con.getRepository(Users);

  const newUser = await userRepo.save(req.body);

  //   Schema of the Table User

  // Extracting Payload/Data from PostMan
  const { username, password, phone, email } = req.body;

  try {
    result = await userRepo.save(Users);

    if (result) {
      res.send(result);
    }
  } catch (error) {
    console.log(error);
  }

  if (result) {
    res.send(result);
  }
});
app.listen(5000, () => {
  console.log("Server running on Port 5000");
});
