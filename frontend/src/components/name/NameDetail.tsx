import { useParams } from "react-router-dom";
import { Name } from "../../typings";
import { useNames } from "../../store/NamesContext";

import "./NameDetail.css";

const NameDetail = () => {
  const { slug } = useParams();
  const { names } = useNames();

  const name = names.find(name => name.slug === slug) as Name;

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
