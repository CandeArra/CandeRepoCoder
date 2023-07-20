import "./navbar.css";
import { Link } from "react-router-dom";
import CartWidget from './CartWidget/CartWidget';


export default function NavBar() {
  return (
    <nav >
      <ul className="nav-menu">
        <h2>
          <li>
            <Link to="/" className="title">Oversity Store</Link>
          </li>
        </h2>
        <li className="nav-item">
          <Link className="nav-link" to="/category/buzos">
            Buzos
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/category/pantalones">
            Pantalones
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/category/remeras">
            Remeras
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/facebook.com/mipage">
            Contacto
          </Link>
        </li>
        <div><CartWidget/></div>
      </ul>
    </nav>
  );
}