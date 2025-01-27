import { ReactNode } from 'react';
import '../Layout.css'

const year = (new Date()).getFullYear();
const websiteName = import.meta.env.WEBSITE_NAME;

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="wrapper">
        <nav>
            <ul className="left">
                <li><a href="/">Home</a></li>
                {/* <li><a href="#">About</a></li> */}
                <li><a href="/names/new">Submit an entry</a></li>
            </ul>
            <ul className="right">
                <li><a href="/names">Names</a></li>
                {/* <li><a href="#">Towns</a></li>
                <li><a href="#">Food</a></li> */}
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
