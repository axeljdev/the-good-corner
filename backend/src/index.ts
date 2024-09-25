import express from "express";
import sqlite3 from "sqlite3";
import { Ad } from "./types";

const app = express();
app.use(express.json());
const port = 3000;
const db = new sqlite3.Database("good_corner.sqlite");

// const ads: Ad[] = [
//   {
//     id: 1,
//     title: "Bike to sell",
//     description:
//       "My bike is blue, working fine. I'm selling it because I've got a new one",
//     owner: "bike.seller@gmail.com",
//     price: 100,
//     picture:
//       "https://images.lecho.be/view?iid=dc:113129565&context=ONLINE&ratio=16/9&width=640&u=1508242455000",
//     location: "Paris",
//     createdAt: "2023-09-05T10:13:14.755Z",
//   },
//   {
//     id: 2,
//     title: "Car to sell",
//     description:
//       "My car is blue, working fine. I'm selling it because I've got a new one",
//     owner: "car.seller@gmail.com",
//     price: 10000,
//     picture:
//       "https://www.automobile-magazine.fr/asset/cms/34973/config/28294/apres-plusieurs-prototypes-la-bollore-bluecar-a-fini-par-devoiler-sa-version-definitive.jpg",
//     location: "Paris",
//     createdAt: "2023-10-05T10:14:15.922Z",
//   },
// ];

app.get("/ads", (req, res) => {
  db.all("SELECT * FROM ad", (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send("An error occurred");
      return;
    }
    res.send(rows);
  })
});


app.post("/ads", (req, res) => {
  const stmt = db.prepare("INSERT INTO ad (title, description, owner, price, picture, location, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?)");
  stmt.run(req.body.title, req.body.description, req.body.owner, req.body.price, req.body.picture, req.body.location, req.body.createdAt);  
  res.send("Request received, check the backend terminal");
});

app.delete("/ads/:id", (req, res) => {
  const stmt = db.prepare("DELETE FROM ad WHERE id = ?");
stmt.run(req.params.id);
res.send("Request received, check the backend terminal")
});

app.put("/ads/:id", (req, res) => {
  const stmt = db.prepare("UPDATE ad SET title = ?, description = ?, owner = ?, price = ?, picture = ?, location = ?, createdAt = ? WHERE id = ?");
  stmt.run(req.body.title, req.body.description, req.body.owner, req.body.price, req.body.picture, req.body.location, req.body.createdAt, req.params.id);
  res.send("Request received, check the backend terminal")
});

app.patch("/ads/:id", (req, res) => {
const stmt = db.prepare("UPDATE ad SET price = ? WHERE id = ?");
stmt.run(req.body.price, req.params.id);
res.send("Request received, check the backend terminal")
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
