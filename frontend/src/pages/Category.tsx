import Ads from "../components/Ads";
import { useQuery } from "@apollo/client";
import { GET_CATEGORY } from "../api/categories";
import { AdsType } from "../types";
import { useParams } from "react-router-dom";

function Category({ onClick }: { onClick: () => void }) {
  const { category } = useParams();
  const { data } = useQuery(GET_CATEGORY, {
    variables: { categoryId: category },
  });

  const ads = data?.category.ads || [];

  return (
    <main className="main-content">
      <h1> Les offres en {data?.category.name} </h1>
      <section className="recent-ads">
        {ads.map((ad: AdsType) => (
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
              onClick={onClick}
            />
          </>
        ))}
      </section>
    </main>
  );
}

export default Category;
