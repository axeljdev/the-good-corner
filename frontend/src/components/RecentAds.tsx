import { useState } from "react";
import Ads from "./Ads";
import { useQuery } from "@apollo/client";
import { GET_ADS } from "../api/ads";

function RecentAds() {
  const [totalprice, setTotalPrice] = useState(0);
  const { data, loading } = useQuery(GET_ADS, {
    fetchPolicy: "cache-and-network",
  });
  const ads = data?.ads;

  return (
    <main className="main-content">
      <h2>Annonces récentes</h2>
      <h3>Mon panier</h3>
      <p>Total : {totalprice / 100} €</p>
      <section className="recent-ads">
        {loading && <p>Chargement...</p>}
        {ads?.map((ad) => (
          <>
            <Ads
              key={ad.id}
              id={ad.id.toString()}
              picture={ad.picture}
              title={ad.title}
              price={ad.price}
              description={ad.description}
              owner={ad.owner}
              location={ad.location}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              tags={ad.tags as any}
              onAddToCart={() => setTotalPrice(totalprice + ad.price)}
            />
          </>
        ))}
      </section>
    </main>
  );
}

export default RecentAds;
