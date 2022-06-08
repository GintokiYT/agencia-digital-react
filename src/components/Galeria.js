import "../scss/galeria.scss";

import galeria1 from "../assets/pexels-photo-1029615-768x512.jpeg";
import galeria2 from "../assets/pexels-photo-1152573-768x512.jpeg";
import galeria3 from "../assets/pexels-photo-403575-768x512.jpeg";
import galeria4 from "../assets/pexels-photo-761963-768x512.jpeg";

const Galeria = () => {
    return (  
        <section id="galeria">
            <div className="row mt-5">
                <div className="col-sm-12 col-md-3">
                     <img 
                        className="img-fluid" 
                        src={galeria1} 
                        alt="Galeria uno" />
                </div>

                <div className="col-sm-12 col-md-3">
                     <img 
                        className="img-fluid" 
                        src={galeria2} 
                        alt="Galeria dos" />
                </div>

                <div className="col-sm-12 col-md-3">
                     <img 
                        className="img-fluid" 
                        src={galeria3} 
                        alt="Galeria tres" />
                </div>

                <div className="col-sm-12 col-md-3">
                     <img 
                        className="img-fluid" 
                        src={galeria4} 
                        alt="Galeria cuatro" />
                </div>
            </div>
        </section>
    )
}
 
export default Galeria;