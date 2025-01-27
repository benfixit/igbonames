import { useParams } from "react-router-dom";
import Loading from "../Loading";
import Error from "../Error";
import useFetch from "../../hooks/useFetch";
import "./NameDetail.css";
import { Name } from "../../typings";

const NameDetail = () => {
  const { slug } = useParams();
  
  const { data, loading, error } = useFetch(`${import.meta.env.VITE_APP_BASE_URL}/names/${slug}`);

  if (loading) {
    return <Loading />
  }

  if (error || !data) {
    return <Error />
  }

  //@ts-ignore
  const name: Name = data.name;

  return (
    <section className="name_details_wrapper">
        <div className="name_details">
            <h1>{name.title}</h1>

            <div className="meaning">
                <h3>Meaning of {name.title}</h3>
                <p>{name.meaning}</p>
            </div>

            {name.morphology && (
              <div className="morphology">
                <p>{name.morphology}</p>
              </div>
            )}

            {name.variants && (
              <div className="variants">
                <p>{name.variants}</p>
              </div>
            )}
        </div>
    </section>
  )
}

export default NameDetail
