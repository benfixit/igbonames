import { useEffect, useState } from "react";
import { debounce } from "lodash";
import Layout from "./Layout";
import "../Home.css";
import useFetch from "../hooks/useFetch";


const Home = () => {
    const [searchWord, setSearchWord] = useState("");

    useEffect(() => {
        const { data, loading, error } = useFetch(`${process.env.BASE_URL}/search`, "POST");

    }, [searchWord]);

    const searchFxn = (event) => {
        setSearchWord(event.target.value);
    }

    return (
        <Layout>
            <section className="content">
                <h1>Everything Igbo</h1>
                <div className="input_wrapper">
                    <input type="text" name="entry_input" id="entry_input" placeholder="Type any Igbo word here and press 'Enter'..." value={searchWord} onChange={searchFxn} />
                    <button><i className="fa fa-search"></i></button>
                </div>
                <div className="groupings">
                    <h4>Search alphabetically:</h4>
                    <div className="letters">
                        {Array.from({ length: 26 }, (_, num) => {
                            console.log(num);
                            return <button key={num}>{String.fromCharCode(num + 97)}</button>
                        })}
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Home;
