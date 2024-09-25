import express from "express";
import sqlite3 from "sqlite3";
import { Ad } from "./types";

const app = express();
app.use(express.json());
const port = 3000;
const db = new sqlite3.Database("good_corner.sqlite");

app.get("/ads", (req, res) => {
  db.all("SELECT * FROM ad", (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send("An error occurred");
    } else {
      res.json(rows);
    }
  });
});

app.post("/ads", (req, res) => {
  const stmt = db.prepare(
    "INSERT INTO ad (title, description, owner, price, picture, location, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?)"
  );
  stmt.run(
    req.body.title,
    req.body.description,
    req.body.owner,
    req.body.price,
    req.body.picture,
    req.body.location,
    req.body.createdAt
  ),
    () => {
      res.status(204).send();
    };
});

app.delete("/ads/:id", (req, res) => {
  const stmt = db.prepare("DELETE FROM ad WHERE id = ?");
  stmt.run(req.params.id),
    () => {
      res.status(204).send();
    };
});

app.put("/ads/:id", (req, res) => {
  const stmt = db.prepare(
    "UPDATE ad SET title = ?, description = ?, owner = ?, price = ?, picture = ?, location = ?, createdAt = ? WHERE id = ?"
  );
  stmt.run(
    req.body.title,
    req.body.description,
    req.body.owner,
    req.body.price,
    req.body.picture,
    req.body.location,
    req.body.createdAt,
    req.params.id
  );
  res.send("Request received, check the backend terminal");
});

app.patch("/ads/:id", (req, res) => {
  let sqlQuery = `UPDATE ad SET `;
  const params: (string | number)[] = [];

  const bodyKeys = Object.keys(req.body);
  
  for (const key of bodyKeys) {
    sqlQuery += `${key} = ?, `;
    params.push(req.body[key]); // Ajout de la valeur correspondante
  }
  
  sqlQuery = sqlQuery.slice(0, -2); // Supprime la dernière virgule
  sqlQuery += ` WHERE id = ?`; // Ajoute la condition WHERE
  params.push(req.params.id); // Ajoute l'ID à params

  const stmt = db.prepare(sqlQuery); // Prépare la requête avec la chaîne complète
  stmt.run(...params); // Utilise le tableau params
  res.send("Request received, check the backend terminal");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
