import { useParams } from "react-router-dom";

function AdDetails() {
    const id: string = useParams().id!;
  return (
    <main>
      <h1>Ad details</h1>
      <p>Ad id: {id}</p>
    </main>
  )
}

export default AdDetails