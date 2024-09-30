import express from "express";
import { Tag } from "../entities/tag";

export const router = express.Router();

router.get("", async (req, res) => {
  const tags = await Tag.find();
  res.json(tags);
});

router.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const categories = await Tag.find({ where: { id } });
  res.json(categories);
});

router.post("", async (req, res) => {
  try {
    const newTag = new Tag();
    newTag.name = req.body.name;
    await newTag.save();
    res.json(newTag);
  } catch (err) {
    res.status(500).send();
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const tag = await Tag.findOneBy({ id }); 
    if (tag !== null) { 
      await tag.remove(); 
      res.json(tag); 
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
    const tag = await Tag.findOneBy({ id }); 
    if (tag !== null) { 
      Object.assign(tag, req.body); 
      await tag.save(); 
      res.json(tag); 
    } else {
      res.status(404).send();
    }
  } catch (err) {
    res.status(500).send();
  }
});
