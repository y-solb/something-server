import { DataSource } from "typeorm";

export const myDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ["src/entity/*.ts"],
  logging: true,
  synchronize: true,
});
