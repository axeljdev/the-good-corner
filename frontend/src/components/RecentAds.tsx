import { useState } from "react";
import Ads from "./Ads";
import { useQuery } from "@apollo/client";
import { GET_ADS } from "../api/ads";
import { AdsType } from "../types";

function RecentAds() {
  const [totalprice, setTotalPrice] = useState(0);
  const { data, loading, error } = useQuery(GET_ADS);

  return (
    <main className="main-content">
      <h2>Annonces récentes</h2>
      <h3>Mon panier</h3>
      <p>Total : {totalprice / 100} €</p>
      <section className="recent-ads">
        {loading && <p>Chargement...</p>}
        {error && <p>Erreur dans le chargement : {error.message}</p>}
        {data?.ads.map((ad: AdsType) => (
          <>
            <Ads
              id={ad.id}
              title={ad.title}
              description={ad.description}
              owner={ad.owner}
              location={ad.location}
              categoryId={ad.categoryId}
              price={ad.price}
              picture={ad.picture}
              tags={ad.tags}
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
