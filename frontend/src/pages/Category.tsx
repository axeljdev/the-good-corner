import Ads from "../components/Ads";
import { useQuery } from "@apollo/client";
import { GET_CATEGORY } from "../api/category";
import { useParams } from "react-router-dom";
import { AdsType } from "../types";

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
              id={ad.id.toString()}
              title={ad.title}
              description={ad.description}
              owner={ad.owner}
              location={ad.location}
              category={{
                id: ad.category.id.toString(),
                name: ad.category.name,
                ads: [],
                likes: [],
              }}
              price={ad.price}
              picture={ad.picture}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              tags={ad.tags as any}
              key={ad.id}
              onAddToCart={onClick}
            />
          </>
        ))}
      </section>
    </main>
  );
}

export default Category;
