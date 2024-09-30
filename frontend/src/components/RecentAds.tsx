import Ads from "./Ads";

function RecentAds() {
  const ads = [
    {
      id: 1,
      title: "Table",
      price: 120,
      image: "./public/images/table.webp",
      link: "/ads/table",
    },
    {
      id: 2,
      title: "Dame-jeanne",
      price: 5,
      image: "./public/images/Dame jeanne.webp",
      link: "/ads/dame-jeanne",
    },
    {
      id: 3,
      title: "Vide-poche",
      price: 4,
      image: "./public/images/Vide poche.webp",
      link: "/ads/vide-poche",
    },
    {
      id: 4,
      title: "Vaisselier",
      price: 0,
      image: "./public/images/vaisselier.webp",
      link: "/ads/vaisselier",
    },
    {
      id: 5,
      title: "Bougie",
      price: 8,
      image: "./public/images/Bougie.webp",
      link: "/ads/bougie",
    },
    {
      id: 6,
      title: "Porte-magazine",
      price: 45,
      image: "./public/images/Porte Magazine.webp",
      link: "/ads/porte-magazine",
    },
  ];

  return (
    <main className="main-content">
      <h2>Annonces récentes</h2>
      <section className="recent-ads">
        {ads.map((ad) => (
          <Ads
            id={ad.id}
            title={ad.title}
            price={ad.price}
            image={ad.image}
            link={ad.link}
            key={ad.id}
          />
        ))}
      </section>
    </main>
  );
}

export default RecentAds;
