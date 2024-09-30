import Ads from "./Ads";
import styles from './RecentAd.module.css';

function RecentAd() {
  const ads = [
    {
      id: 1,
      title: "Table",
      price: 120,
      image: "../src/images/Table.webp",
      link: "/ads/table",
    },
    {
      id: 2,
      title: "Dame-jeanne",
      price: 75,
      image: "../src/images/Dame jeanne.webp",
      link: "/ads/dame-jeanne",
    },
    {
      id: 3,
      title: "Vide-poche",
      price: 4,
      image: "../src/images/Vide poche.webp",
      link: "/ads/vide-poche",
    },
    {
      id: 4,
      title: "Vaisselier",
      price: 900,
      image: "../src/images/Vaisselier.webp",
      link: "/ads/vaisselier",
    },
    {
      id: 5,
      title: "Bougie",
      price: 8,
      image: "../src/images/Bougie.webp",
      link: "/ads/bougie",
    },
    {
      id: 6,
      title: "Porte-magazine",
      price: 45,
      image: "../src/images/Porte Magazine.webp",
      link: "/ads/Porte-magazine",
    },
  ];

  return (
    <>
      <main className="main-content">
        <h2>Annonces récentes</h2>
        <section className={styles['recent-ads']}> 
          {ads.map((ad) => (
            <Ads
              key={ad.id}
              id={ad.id}
              title={ad.title}
              price={ad.price}
              image={ad.image}
              link={ad.link}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default RecentAd;
