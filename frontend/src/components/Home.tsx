import { Link } from "react-router-dom";
import { useNames } from "../store/NamesContext";
import { useTheme } from "../store/ThemeContext";

import "../Home.css";


const Home = () => {
    const { names } = useNames();
    const { theme } = useTheme();

    return (
        <section className="content">
            <ul className="names">
                {names.map(name => <li key={name._id}><Link to={`/names/${name.slug}`}>{name.title}</Link></li>)}
            </ul>
        </section>
    )
}

export default Home;
