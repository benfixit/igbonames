import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import '../Layout.css'

const year = (new Date()).getFullYear();
const websiteName = import.meta.env.WEBSITE_NAME;

const Layout = ({ children }: { children: ReactNode }) => {
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
