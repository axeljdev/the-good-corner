import { useNavigate, useParams } from "react-router-dom";
import { AdsType } from "../types";
import Button from "../components/Button";
import { useMutation, useQuery } from "@apollo/client";
import { GET_AD } from "../api/ad";
import { DELETE_AD } from "../api/deleteAd";
import styles from "./AdDetails.module.css";

function AdDetails() {
  const { id } = useParams();

  const { data, loading, error } = useQuery<{ ad: AdsType }>(GET_AD, {
    variables: { adId: id },
  });
  const ad = data?.ad;

  const navigate = useNavigate();

  const [deleteAd] = useMutation(DELETE_AD);

  const handledelete = async () => {
    if (!id) return;
    try {
      await deleteAd({ variables: { id } });
      navigate("/", { replace: true });
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <main className="main-content">
      {loading && <p>Chargement...</p>}
      {error && <p>Erreur dans le chargement : {error.message}</p>}
      {ad ? (
        <>
          <div className={styles["ad-details-header"]}>
            <Button
              name="Modifier"
              onClick={() => navigate(`/ad/${id}/edit`)}
            />
            <Button name="Supprimer" onClick={handledelete} />
          </div>
          <div className={styles["ad-details-content"]}>
            <h1>{ad.title}</h1>
            <p>{ad.owner}</p>
            <img
              src={ad.picture}
              className={styles["ad-details-image"]}
              alt={ad.title}
            />
            <p>Description : {ad.description}</p>
            <p>Prix : {ad.price / 100} €</p>
            <p>Lieux : {ad.location}</p>
          </div>
        </>
      ) : (
        <p>Chargement...</p>
      )}
    </main>
  );
}

export default AdDetails;
