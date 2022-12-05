import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/vector">Vector</Link></li>
                <li><Link to="/fotos">Fotos</Link></li>
                <li><Link to="/psd">PSD</Link></li>
                <li><Link to="/portifolio">Portifolio</Link></li>
            </ul>
        </header>
    )
}

export default Header