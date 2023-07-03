import { EntitySchema } from "typeorm";

export const Users = new EntitySchema({
  name: "Users",
  columns: {
    id: {
      type: "int",
      primary: true,
      generated: "increment",
    },
    username: {
      type: "varchar",
    },
    email: {
      type: "varchar",
    },
    password: {
      type: "varchar",
    },
  },
});
