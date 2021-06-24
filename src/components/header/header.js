import './header.scss'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>RESTy</h1>
            <nav>
                <ul className='header-ul'>
                    <li>
                        <Link className='r-link link text-underlined' to="/">Home</Link>
                    </li>
                    <li>
                        <Link className='r-link link text-underlined' to="/History">History</Link>
                    </li>
                    <li>
                        <Link className='r-link link text-underlined' to="/Help">Help</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;