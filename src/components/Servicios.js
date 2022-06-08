const Servicios = () => {
    return (  
        <section id="servicios">
            <div className="container pt-5">
                <h1 className="text-center">
                    Nuestros Servicios
                </h1>
                <div className="row mt-5">
                    <div className="col-sm-12 col-md-4 text-center">
                        <h2 className="mt-5">
                            <i className="fa-solid fa-paintbrush"></i><br />
                            Diseño
                        </h2>
                        <p className="lead mt-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque qui, sapiente corporis exercitationem vitae, libero temporibus nesciunt alias culpa, consequatur saepe repudiandae minus in quo vel incidunt adipisci ullam voluptates?
                        </p>
                        <button className="btn btn-info text-center mb-5">
                            Ver más <i className="fas fa-arrow-circle-right"></i>
                        </button>
                    </div>

                    <div className="col-sm-12 col-md-4 text-center">
                        <h2 className="mt-5">
                            <i className="fa-solid fa-magnifying-glass-dollar"></i><br />
                            SEO
                        </h2>
                        <p className="lead mt-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque qui, sapiente corporis exercitationem vitae, libero temporibus nesciunt alias culpa, consequatur saepe repudiandae minus in quo vel incidunt adipisci ullam voluptates?
                        </p>
                        <button className="btn btn-info text-center mb-5">
                            Ver más <i className="fas fa-arrow-circle-right"></i>
                        </button>
                    </div>

                    <div className="col-sm-12 col-md-4 text-center">
                        <h2 className="mt-5">
                            <i className="fa-solid fa-bullhorn"></i><br />
                            Marketing
                        </h2>
                        <p className="lead mt-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque qui, sapiente corporis exercitationem vitae, libero temporibus nesciunt alias culpa, consequatur saepe repudiandae minus in quo vel incidunt adipisci ullam voluptates?
                        </p>
                        <button className="btn btn-info text-center mb-5">
                            Ver más <i className="fas fa-arrow-circle-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
 
export default Servicios;