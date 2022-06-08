import "../scss/intro.scss";
import blurred from "../assets/blurred-background-coffee-cup-contemporary-908284.jpg";

const Intro = () => {
    return (    
        <section id="intro">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h2 className="mt-5">
                            Agencia Digital encargada de la presencia digital de su empresa
                        </h2>
                        <p className="mt-5">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium nisi, at eum assumenda ullam, cupiditate quis voluptate iste doloribus sed, nulla facere quia quidem ratione nam consequatur accusantium exercitationem voluptatum?
                        </p>
                        <button className="btn btn-outline-primary btn-lg text-center">
                            Más Información
                        </button>
                    </div>  
                    <div className="col-sm-12 col-md-6 contenedor-img">
                        <img className="img-thumbnail img-fluid" src={blurred} alt="Blur Red" />
                    </div>
                </div>
            </div>
        </section>
    )
}
 
export default Intro;