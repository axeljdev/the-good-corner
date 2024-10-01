import Button from "../components/Button";
import RecentAds from "../components/RecentAds";
import { useState } from "react";

function Home() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button name={ show ? "Fermer les annonces" : "Ouvrir les annonces"} onClick={() => setShow(!show)} />
      {show === true && <RecentAds />}
    </>
  );
}

export default Home;
