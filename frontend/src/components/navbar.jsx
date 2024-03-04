import { Link } from 'react-router-dom'
import HomeIcon from '../image/home_button.webp'
import LibraryIcon from '../image/library.png'
import HackIcon from '../image/hack.png'
import '../css/navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/blur">
            <img src={HackIcon} alt="Hack logo" />
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/home">
            <img src={HomeIcon} alt="Home Icon" />
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/library">
            <img src={LibraryIcon} alt="Library Icon" />
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar