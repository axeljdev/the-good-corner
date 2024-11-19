import { Link } from "react-router-dom";
import styles from "./Ads.module.css";
import { Ad as AdType } from "../gql/graphql";

export function Ad(
  props: Partial<AdType> & {
    onAddToCart?: () => void;
    important?: boolean;
  }
) {
  return (
    <div className={styles["ad-card-container"]}>
      <Link to={`/ad/${props.id}`} className={styles["ad-card-link"]}>
        <img className={styles["ad-card-image"]} src={props.picture} />
        <div className={styles["ad-card-text"]}>
          <p className={styles["ad-card-title"]}>{props.title}</p>
          <p className={styles["ad-card-price"]}>
            {((props.price ?? 0) / 100).toFixed(2)} €
          </p>
          <div className={styles["ad-card-tags"]}>
            {props.tags?.map((tag) => (
              <span className={styles["ad-card-tag"]}>{tag.name}</span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Ad;
