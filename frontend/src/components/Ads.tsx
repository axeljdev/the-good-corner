import styles from './Ads.module.css';

type AdsProps = {
    title: string,
    price: number,
    image: string,
    link: string,
    id: number,
}

function Ads({title, price, image, link}: AdsProps) {
  return (
    <div className={styles['ad-card-container']}>
    <a className={styles['ad-card-link']} href={link}>
      <img className={styles["ad-card-image"]} src={image} />
      <div className={styles["ad-card-text"]}>
        <div className={styles["ad-card-title"]}>{title}</div>
        <div className={styles["ad-card-price"]}>{price} €</div>
      </div>
    </a>
    </div>
  )
}

export default Ads