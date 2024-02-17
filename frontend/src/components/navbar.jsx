import { Link } from 'react-router-dom'
import HomeIcon from '../image/home_button.webp'
import LibraryIcon from '../image/library.png'
import '../css/navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/home">
            <img src={HomeIcon} alt="home_button.webp" /> 
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/library">
            <img src={LibraryIcon} alt="library.png" /> 
          </Link>
        </li>
      </ul>
  </nav>
  )
}

export default Navbar