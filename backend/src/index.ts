import "reflect-metadata";
import express from "express";
import { datasource } from "./datasource";
import { router as categoriesRouter } from "./controllers/categories";
import { router as adsRouter } from "./controllers/ads";
import { router as tagsRouter } from "./controllers/tags";

const app = express();
app.use(express.json());
const port = 3000;

app.use("/categories", categoriesRouter);
app.use("/ads", adsRouter);
app.use("/tags", tagsRouter);

async function initialize() {
  await datasource.initialize();
  console.log("Database initialized");
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

initialize();
