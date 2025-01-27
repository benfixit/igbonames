import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../Home.css";
import { Name } from "../typings";
import { useTheme } from "../store/ThemeContext";


const Home = () => {
    const [searchWord, setSearchWord] = useState("");
    const [searchResult, setSearchResult] = useState<Array<Name>>([]);
    const { theme, changeTheme } = useTheme();

    console.log("Theme value ::: ", theme, "home");

    useEffect(() => {
        const findWord = async () => {
            const response = await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/names/search`, { searchWord });
            setSearchResult(response.data.names ?? []);
        }

        findWord();
    changeTheme("dark")
    }, [searchWord]);

    const searchFxn = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchWord(event.target.value);
    }

    return (
        <section className="content">
        <h1>Everything Igbo</h1>
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
            <h4>Search alphabetically:</h4>
            <div className="letters">
                {Array.from({ length: 26 }, (_, num) => {
                    return <button key={num}>{String.fromCharCode(num + 97)}</button>
                })}
            </div>
        </div>
    </section>
    )
}

export default Home;
