import { useParams } from 'react-router-dom';

function Category() {
    const { category } = useParams();
  return (
    <main>
      <h1>{category}</h1>
    </main>
  )
}

export default Category