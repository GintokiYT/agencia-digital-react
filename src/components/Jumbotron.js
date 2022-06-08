import "../css/jumbotron.css";

const Jumbotron = () => {
    return (  
        <section className="text-center" id="inicio">
            <div className="jumbotron">
                <h1 className="display-4">
                    <strong>Creatividad sin Límites</strong>
                </h1>
                <p className="lead">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel animi architecto nobis sint velit earum?
                </p>
                <button className="btn btn-primary">
                    Más información
                </button>
            </div>
        </section>
    ) 
}
 
export default Jumbotron;