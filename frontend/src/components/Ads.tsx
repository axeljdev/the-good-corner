import { Link } from "react-router-dom";
import styles from "./Ads.module.css";
import Button from "./Button";
import { AdsType } from "../types";

function Ads({ id, title, price, picture, onClick }: AdsType & { onClick: () => void }) {
  
  return (
    <div className={styles["ad-card-container"]}>
      <Link to={`/ad/${id}`} className={styles["ad-card-link"]}>
        <img className={styles["ad-card-image"]} src={picture} />
        <div className={styles["ad-card-text"]}>
          <div className={styles["ad-card-title"]}>{title}</div>
          <div className={styles["ad-card-price"]}>{price/100}€</div>
        </div>
      </Link>
      <Button 
        name="Ajouter au panier"
        onClick={onClick}
      />
    </div>
  );
}

export default Ads;
