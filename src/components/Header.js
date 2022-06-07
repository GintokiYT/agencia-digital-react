import digitalArt from "../assets/digitalArt.png";
import "../scss/header.scss";

const Header = () => {
    return (  
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top fondo-nav" id="menu-navegacion">
            <div className="container my-1">
              <a className="navbar-bran" href="/">
                <img className="img-logo" src={digitalArt} alt="Digital Art" />
              </a>
              <button 
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              ><span className="navbar-toggler-icon"></span>
              </button> 
              <div 
                className="collapse navbar-collapse" 
                id="navbarSupportedContent"
              ><ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#inicio">Inicio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#intro">Empresa</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#llamado-accion">Banner</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#servicios">Servicios</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#galeria">Galeria</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#testimonios">Testimonios</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contacto">Contacto</a>
                </li>
               </ul>
              </div>
            </div>
          </nav>  
        </header>
    );
}
 
export default Header;