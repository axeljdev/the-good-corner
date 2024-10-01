import { useEffect, useState } from "react";
import Ads from "./Ads";
import axios from "axios";
import { AdsProps } from "../types";

function RecentAds() {
  
  const [totalprice, setTotalPrice] = useState(0);
  const [ads, setAds] = useState<AdsProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get<AdsProps[]>("http://localhost:3000/ads");
        setAds(result.data);
      } catch (err) {
        console.log("error",err);
  }
}; fetchData();
  }, []);
  

  return (
    <main className="main-content">
      <h2>Annonces récentes</h2>
      <h3>Mon panier</h3>
      <p>Total : {totalprice/100} €</p>
      <section className="recent-ads">
        {ads.map((ad) => (
          <>
            <Ads
              id={ad.id}
              title={ad.title}
              price={ad.price}
              image={ad.image}
              key={ad.id}
              onClick={() => setTotalPrice(totalprice + ad.price)}
            />
          </>
        ))}
      </section>
    </main>
  );
}

export default RecentAds;
