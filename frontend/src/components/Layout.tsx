import { ReactNode, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNames } from '../store/NamesContext';
import { useTheme } from '../store/ThemeContext';
import { Name, THEME } from '../typings';

import LightMode from "../assets/light_mode.svg?react";
import DarkMode from "../assets/dark_mode.svg?react";

import '../Layout.css'

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
                <li><button onClick={() => toggleTheme()}>{theme === THEME.dark ? <LightMode /> : <DarkMode />}</button></li>
            </ul>
        </nav>
        <main>
            {children}
        </main>
        <footer>
            <p className="copyright">
                Copyright &copy; {(new Date()).getFullYear()}. {import.meta.env.WEBSITE_NAME}
            </p>
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
