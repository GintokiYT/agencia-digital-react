import Jumbotron from "./Jumbotron";
import Intro from "./Intro";
import LlamadoAccion from "./LlamadoAccion";
import Servicios from "./Servicios";
import Galeria from "./Galeria";
import Testimonios from "./Testimonios";
import Footer from "./Footer";

const Main = () => {
    return (  
        <main>
            <Jumbotron />
            <Intro />
            <LlamadoAccion />
            <Servicios />
            <Galeria />
            <Testimonios />
            <Footer />
        </main>
    )
}
 
export default Main;