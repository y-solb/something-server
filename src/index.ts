require("dotenv").config();
import express from "express";
import { Request, Response } from "express";
import { myDataSource } from "./data-source";

const app = express();
app.use(express.json());

myDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

app.get("/", (req: Request, res: Response) => {
  res.send("it's running~~!");
});

const port = process.env.PORT;
app.listen(port, async () => {
  console.log(`Server running at http://localhost:${port}`);
});
