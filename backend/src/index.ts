import express from "express";
import { Ad } from "./types";

const app = express();
app.use(express.json());
const port = 3000;

const ads = [
  {
    id: 1,
    title: "Bike to sell",
    description:
      "My bike is blue, working fine. I'm selling it because I've got a new one",
    owner: "bike.seller@gmail.com",
    price: 100,
    picture:
      "https://images.lecho.be/view?iid=dc:113129565&context=ONLINE&ratio=16/9&width=640&u=1508242455000",
    location: "Paris",
    createdAt: "2023-09-05T10:13:14.755Z",
  },
  {
    id: 2,
    title: "Car to sell",
    description:
      "My car is blue, working fine. I'm selling it because I've got a new one",
    owner: "car.seller@gmail.com",
    price: 10000,
    picture:
      "https://www.automobile-magazine.fr/asset/cms/34973/config/28294/apres-plusieurs-prototypes-la-bollore-bluecar-a-fini-par-devoiler-sa-version-definitive.jpg",
    location: "Paris",
    createdAt: "2023-10-05T10:14:15.922Z",
  },
];

app.get("/ads", (req, res) => {
  res.send(ads);
});

app.post("/ads", (req, res) => {
  const ad: Ad = req.body;
  ad.id = ads[ads.length - 1].id + 1;
  ads.push(req.body);
  console.log(req.body);

  res.send("Request received, check the backend terminal");
});

app.delete("/ads/:id", (req, res) => {
  const id = Number(req.params.id);
  //   const index =ads.findIndex((ad) => ad.id === id);
  //   ads.splice(index, 1);
  let index = -1;
  for (let i = 0; i < ads.length; i++) {
    if (ads[i].id === id) {
      index = i;
      break;
    }
  }

ads.splice(index, 1);

  res.json({
    id: req.body.id,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
