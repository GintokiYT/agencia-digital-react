import "../scss/footer.scss";

const Footer = () => {
    return (  
        <footer>
            <section id="footer">
                <div className="container py-3">
                    <div className="row mt-5">
                        <div className="col-sm-12 col-md-4 text-center text-white">
                            <h3 className="mt-5">
                                Nosotros
                            </h3>
                            <p className="mt-5">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae eum aliquid porro ratione veritatis voluptate minima dignissimos. Numquam, animi maiores.
                            </p>
                            <p>@2022 Renato Navarro. Todos los derechos reservados</p>
                        </div>

                        <div className="col-sm-12 col-md-4 text-center text-white">
                            <h3 className="mt-5">
                                Contáctenos
                            </h3>
                            <p className="mt-5">
                                <i className="fas fa-map-marker-alt"></i> Calle 52 b# 325-963, Lima - Perú <br />
                                <i className="fas fa-phone"></i> 51974784958
                            </p>
                        </div>

                        <div className="col-sm-12 col-md-4 text-white">
                            <h3 className="mt-5 text-center">
                                Suscríbete
                            </h3>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="nombre">Nombre</label>
                                    <input className="form-control" type="text" placeholder="Ingresa tu nombre" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input className="form-control" type="email" placeholder="Ingresa tu email" />
                                </div>
                                <button className="btn btn-primary btn-block">
                                    Suscríbete
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}
 
export default Footer;