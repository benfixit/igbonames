import { ReactNode, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Layout.css'
import { useNames } from '../store/NamesContext';
import { Name } from '../typings';

const year = (new Date()).getFullYear();
const websiteName = import.meta.env.WEBSITE_NAME;

const Layout = ({ children }: { children: ReactNode }) => {
        const [searchWord, setSearchWord] = useState("");
        const [searchResult, setSearchResult] = useState<Array<Name>>([]);
        const { names } = useNames();
    
        useEffect(() => {
            const findWord = async () => {
                const result = searchWord === "" ? [] : names.filter(name => name.title.toLowerCase().startsWith(searchWord))
                    setSearchResult(result);
            }
    
            findWord();
        }, [searchWord]);
    
        const searchFxn = (event: React.ChangeEvent<HTMLInputElement>) => {
            setSearchWord(event.target.value);
        }

  return (
    <div className="wrapper">
        <nav>
            <ul className="left">
                <h1><Link to={"/"}>Everything Igbo</Link></h1>
            </ul>
            <ul className="right">
                <li><Link to={"/names/new"}>Submit an entry</Link></li>
            </ul>
        </nav>
        <main>
            <section className="content">
                <div className="search_wrapper">
                    <input type="text" name="entry_input" className="entry_input" placeholder="Type any Igbo word here and press 'Enter'..." value={searchWord} onChange={searchFxn} />
                    <button><i className="fa fa-search"></i></button>
                    {searchResult.length > 0 && (
                        <ul className="search_result">
                            {searchResult.map((name: Name) => (
                                <li key={name._id}>
                                    <Link to={`/names/${name.slug}`}>{name.title}</Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </section>
            {children}
        </main>
        <footer>
            <div className="copyright">
                Copyright &copy; {year}. {websiteName}
            </div>
            <ul className="socials">
                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
            </ul>
            <ul className="links">
                {/* <li><a href="#">Volunteer</a></li> */}
                <li><a href="#">Contact Us</a></li>
            </ul>
        </footer>
    </div>
  )
}

export default Layout;
