import { Users } from "../models/user.entity.js";

export const dataOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "root",
  database: "studentproject",
  synchronize: true,
  logging: true,
  entities: [Users],
  subscribers: [],
  migrations: [],
};
