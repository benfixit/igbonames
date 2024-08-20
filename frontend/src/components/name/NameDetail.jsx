import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./NameDetail.css";

const NameDetail = () => {
  const { slug } = useParams();
  const { data, loading, error } = useFetch(`http://127.0.0.1:8000/names/${slug}`);

  if (loading) {
    return <div>Loading...</div>
  }

  if (error || !data.name) {
    return <div>Error</div>
  }

  console.log('da ::: ', data)

  return (
    <section className="name_details_wrapper">
        <div className="name_details">
            <h1>{data.name.title}</h1>

            <div className="meaning">
                <h3>Meaning of {data.name.title}</h3>
                <p>{data.name.meaning}</p>
            </div>

            {data.name.morphology && (
              <div className="morphology">
                <p>{data.name.morphology}</p>
              </div>
            )}

            {data.name.variants && (
              <div className="variants">
                <p>{data.name.variants}</p>
              </div>
            )}
        </div>
    </section>
  )
}

export default NameDetail
