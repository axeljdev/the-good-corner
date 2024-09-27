import "reflect-metadata";
import express from "express";
import sqlite3 from "sqlite3";
import { Category } from "./entities/category";
import { datasource } from "./datasource";
import { Ad } from "./entities/ad";

const app = express();
app.use(express.json());
const port = 3000;

app.get("/ads", async (req, res) => {
  const ads = await Ad.find();
  res.json(ads);
});

app.get("/ads/:id", async (req, res) => {
  const id = Number(req.params.id);
  const ads = await Ad.find({ where: { id } });
  res.json(ads);
});

app.get("/categories", async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
});

app.get("/categories/:id", async (req, res) => {
  const id = Number(req.params.id);
  const categories = await Category.find({ where: { id } });
  res.json(categories);
});

app.post("/categories", async (req, res) => {
  const newCategory = new Category();
  newCategory.name = req.body.name;
  await newCategory.save();
  res.json(newCategory);
});

app.post("/ads", async (req, res) => {
  const newAd = new Ad();
  newAd.title = req.body.title;
  newAd.description = req.body.description;
  newAd.owner = req.body.owner;
  newAd.price = req.body.price;
  newAd.picture = req.body.picture;
  newAd.location = req.body.location;
  newAd.createdAt = req.body.createdAt;
  newAd.category_id = req.body.category_id;
  await newAd.save();
  res.json(newAd);
});

app.delete("/ads/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const ad = await Ad.findOneBy({ id });
    if (ad !== null) {
      await ad.remove();
      res.json(ad);
    } else {
      res.status(404).send();
    }
  } catch (err) {
    res.status(500).send();
  }
});

app.delete("/categories/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const category = await Category.findOneBy({ id });
    if (category !== null) {
      await category.remove();
      res.json(category);
    } else {
      res.status(404).send();
    }
  } catch (err) {
    res.status(500).send();
  }
});

app.put("/ads/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const ad = await Ad.findOneBy({ id });
    if (ad !== null) {
      Object.assign(ad, req.body);
      await ad.save();
      res.json(ad);
    } else {
      res.status(404).send();
    }
  } catch (err) {
    res.status(500).send();
  }
});

app.put("/categories/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const category = await Category.findOneBy({ id });
    if (category !== null) {
      Object.assign(category, req.body);
      await category.save();
      res.json(category);
    } else {
      res.status(404).send();
    }
  } catch (err) {
    res.status(500).send();
  }
});

app.patch("/ads/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const ad = await Ad.findOneBy({ id });
    if (ad !== null) {
      Object.assign(ad, req.body);
      await ad.save();
      res.json(ad);
    } else {
      res.status(404).send();
    }
  } catch (err) {
    res.status(500).send();
  }
});

async function initialize() {
  await datasource.initialize();
  console.log("Database initialized");
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

initialize();
