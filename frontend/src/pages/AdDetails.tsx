import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { AdsType } from "../types";
import Button from "../components/Button";
import { useQuery } from "@apollo/client";
import { GET_AD } from "../api/ads";

function AdDetails() {
  const { id } = useParams();

  const { data, loading, error } = useQuery(GET_AD, {
    variables: { adId: id },
  });
  const ad: AdsType = data?.ad;

  const navigate = useNavigate();

  const handledelete = async () => {
    try {
      await axios.delete<AdsType>(`http://localhost:3000/ads/${id}`);
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
          <Button name="Supprimer" onClick={handledelete} />
          <h1>{ad.title}</h1>
          <p>{ad.owner}</p>
          <img src={ad.picture} alt={ad.title} />
          <p>Description : {ad.description}</p>
          <p>Prix : {ad.price / 100} €</p>
          <p>Lieux : {ad.location}</p>
          <Button name="Modifier" onClick={() => navigate(`/ad/${id}/edit`)} />
        </>
      ) : (
        <p>Chargement...</p>
      )}
    </main>
  );
}

export default AdDetails;
