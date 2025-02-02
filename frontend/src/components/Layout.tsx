import { ReactNode, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Layout.css'
import { useNames } from '../store/NamesContext';
import { Name } from '../typings';
import { useTheme } from '../store/ThemeContext';

const Layout = ({ children }: { children: ReactNode }) => {
        const [searchWord, setSearchWord] = useState("");
        const [searchResult, setSearchResult] = useState<Array<Name>>([]);
        const { names } = useNames();
        const { theme, toggleTheme } = useTheme();
    
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
    <div className={`wrapper ${theme}`}>
        <nav>
            <ul className="left">
                <h1><Link to={"/"}>Igbo names</Link></h1>
            </ul>
            <div className="center">
                <div className="search">
                    <input type="text" name="entry_input" className="entry_input" placeholder="Type any Igbo word here and press 'Enter'..." value={searchWord} onChange={searchFxn} />
                    <button><i className="fa fa-search"></i></button>
                    {searchResult.length > 0 && (
                        <ul className="result">
                            {searchResult.map((name: Name) => (
                                <li key={name._id}>
                                    <Link to={`/names/${name.slug}`}>{name.title}</Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            <ul className="right">
                <li><Link to={"/names/new"}>Submit an entry</Link></li>
                <li><button onClick={() => toggleTheme()}>Change theme</button></li>
            </ul>
        </nav>
        <main>
            {children}
        </main>
        <footer>
            <div className="copyright">
                Copyright &copy; {(new Date()).getFullYear()}. {import.meta.env.WEBSITE_NAME}
            </div>
            <ul className="socials">
                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
            </ul>
            <ul className="links">
                <li><a href="#">Contact Us</a></li>
            </ul>
        </footer>
    </div>
  )
}

export default Layout;
