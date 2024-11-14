import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AdsType } from "../types";
import Button from "../components/Button";

function AdDetails() {
  const [ads, setAds] = useState<AdsType[]>([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
        const result = await axios.get<AdsType[]>(
          `http://localhost:3000/ads/${id}`
        );
        setAds(result.data);
    };
    fetchData();
  }, [id]);

  const ad = ads[0];
  const navigate = useNavigate();

    const handledelete = async () => {
      try {
        await axios.delete<AdsType>(`http://localhost:3000/ads/${id}`);
        navigate("/", {replace: true});
      } catch (err) {
        console.log("error", err);
      }
    }

  return (
    <main className="main-content">
      {ad ? (
        <>
       <Button name="Supprimer" onClick={handledelete}/>
          <h1>{ad.title}</h1>
          <p>{ad.owner}</p>
          <img src={ad.picture} alt={ad.title} />
          <p>Description : {ad.description}</p>
          <p>Prix : {ad.price/100} €</p>
          <p>Lieux : {ad.location}</p>
          <Button name="Modifier" onClick={() => navigate(`/ad/${id}/edit`)}/>
        </>
      ) : (
        <p>Chargement...</p>
      )}
    </main>
  );
}

export default AdDetails;
