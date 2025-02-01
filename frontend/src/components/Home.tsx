import { Link } from "react-router-dom";
import { useNames } from "../store/NamesContext";

import "../Home.css";


const Home = () => {
    const { names } = useNames();

    return (
        <section className="content">
            <div className="groupings">
                <ul className="letters">
                    {names.map(name => <li key={name._id}><Link to={`/names/${name.slug}`}>{name.title}</Link></li>)}
                </ul>
            </div>
        </section>
    )
}

export default Home;
