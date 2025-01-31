import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { useNames } from "../store/NamesContext";
import { Name } from "../typings";

import "../Home.css";


const Home = () => {
    const [searchWord, setSearchWord] = useState("");
    const [searchResult, setSearchResult] = useState<Array<Name>>([]);
    const { names } = useNames();

    console.log("name >>> ", names)

    useEffect(() => {
        const findWord = async () => {
            const response = await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/names/search`, { searchWord });
            setSearchResult(response.data.names ?? []);
        }

        findWord();
    }, [searchWord]);

    const searchFxn = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchWord(event.target.value);
    }

    return (
        <section className="content">
        <div className="search_wrapper">
            <input type="text" name="entry_input" id="entry_input" placeholder="Type any Igbo word here and press 'Enter'..." value={searchWord} onChange={searchFxn} />
            <button><i className="fa fa-search"></i></button>
            {searchResult.length > 0 && (
            <ul>
                {searchResult.map((name: Name) => (
                    <li key={name._id}>
                        <Link to={`/names/${name.slug}`}>{name.title}</Link>
                    </li>
                ))}
            </ul>
        )}
        </div>
        <div className="groupings">
            <h4>Number of names:</h4>
            <ul className="letters">
                {names.map(name => <li><Link to={`/names/${name.slug}`}>{name.title}</Link></li>)}
            </ul>
        </div>
    </section>
    )
}

export default Home;
