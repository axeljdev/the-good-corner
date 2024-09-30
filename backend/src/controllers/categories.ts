import express from "express";
import { Category } from "../entities/category";

export const router = express.Router();

router.get("", async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
});

router.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const categories = await Category.find({ where: { id } });
  res.json(categories);
});

router.post("", async (req, res) => {
  try {
    const newCategory = new Category();
    newCategory.name = req.body.name;
    await newCategory.save();
    res.json(newCategory);
  } catch (err) {
    res.status(500).send();
  }
});

router.delete("/:id", async (req, res) => {
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

router.put("/:id", async (req, res) => {
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
