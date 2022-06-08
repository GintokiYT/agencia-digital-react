import { Fragment } from "react";
import "../css/galeria.css";

import galeria1 from "../assets/pexels-photo-1029615-768x512.jpeg";
import galeria2 from "../assets/pexels-photo-1152573-768x512.jpeg";
import galeria3 from "../assets/pexels-photo-403575-768x512.jpeg";
import galeria4 from "../assets/pexels-photo-761963-768x512.jpeg";

const Galeria = () => {
    return ( 
        <Fragment>
            <section id="galeria">
                <h1 className="text-center pt-5">Galeria de imágenes</h1>
                <div className="row mt-5">
                    <div className="col-sm-12 col-md-3">
                        <img 
                            className="img-fluid" 
                            src={galeria1} 
                            alt="Galeria uno"
                            data-toggle="modal" 
                            data-target="#galeria1" />
                    </div>
                    
                    <div className="col-sm-12 col-md-3">
                        <img 
                            className="img-fluid" 
                            src={galeria2} 
                            alt="Galeria dos"
                            data-toggle="modal" 
                            data-target="#galeria2" />
                    </div>

                    <div className="col-sm-12 col-md-3">
                        <img 
                            className="img-fluid" 
                            src={galeria3} 
                            alt="Galeria tres"
                            data-toggle="modal" 
                            data-target="#galeria3" />
                    </div>

                    <div className="col-sm-12 col-md-3">
                        <img 
                            className="img-fluid" 
                            src={galeria4} 
                            alt="Galeria cuatro"
                            data-toggle="modal" 
                            data-target="#galeria4" />
                    </div>
                </div>
            </section>

            <div className="modal fade" id="galeria1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header flex-column align-items-center">
                            <h5 className="display-4">Imagen 1</h5>
                        </div>
                        <div className="modal-body">
                            <img className="img-fluid rounded" src={galeria1} alt="Galeria uno" />
                        </div>
                        <div className="modal-footer">
                            <p className="lead">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ducimus cumque ex ut magnam ad recusandae dolores quia asperiores aspernatur.
                            </p>
                            <button className="btn btn-primary btn-block" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="galeria2">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header flex-column align-items-center">
                            <h5 className="display-4">Imagen 2</h5>
                        </div>
                        <div className="modal-body">
                            <img className="img-fluid rounded" src={galeria2} alt="Galeria uno" />
                        </div>
                        <div className="modal-footer">
                            <p className="lead">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ducimus cumque ex ut magnam ad recusandae dolores quia asperiores aspernatur.
                            </p>
                            <button className="btn btn-primary btn-block" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="galeria3">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header flex-column align-items-center">
                            <h5 className="display-4">Imagen 3</h5>
                        </div>
                        <div className="modal-body">
                            <img className="img-fluid rounded" src={galeria3} alt="Galeria uno" />
                        </div>
                        <div className="modal-footer">
                            <p className="lead">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ducimus cumque ex ut magnam ad recusandae dolores quia asperiores aspernatur.
                            </p>
                            <button className="btn btn-primary btn-block" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="galeria4">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header flex-column align-items-center">
                            <h5 className="display-4">Imagen 4</h5>
                        </div>
                        <div className="modal-body">
                            <img className="img-fluid rounded" src={galeria4} alt="Galeria uno" />
                        </div>
                        <div className="modal-footer">
                            <p className="lead">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ducimus cumque ex ut magnam ad recusandae dolores quia asperiores aspernatur.
                            </p>
                            <button className="btn btn-primary btn-block" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
 
export default Galeria;