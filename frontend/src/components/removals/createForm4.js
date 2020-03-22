import React from 'react';

class CreateForm4 extends React.Component {


    //Inherid Parent Methods
    onSubmit = async (e) => { this.props.onSubmit(e); }
    onInputChange = (e) => { this.props.onInputChange(e); }



    render() {


        let Listado = () => {

            return <div className="row col-12">

                <div className="col-md-9 mx-auto">

                    <div className="row">
                        <h3 className="col-md-12 py-4">Rooms  </h3>
                        {Array.from({ length: this.props.room }, (e, i) => {
                            return <div className="col-md-4 mb-4">
                                <div className="card">
                                    <div className="card-header">
                                        Room {i + 1}
                                    </div>
                                    <div className="card-body">
                                        <button onClick={this.onSubmit} className="btn btn-primary btn-block">Gestionar</button>
                                    </div>
                                </div>
                            </div>
                        })
                        }

                        <h3 className="col-md-12 py-4">Dinning Rooms  </h3>
                        {Array.from({ length: this.props.dinning }, (e, i) => {
                            return <div className="col-md-4 mb-4">
                                <div className="card">
                                    <div className="card-header">
                                        Dinning {i + 1}
                                    </div>
                                    <div className="card-body">
                                        <button className="btn btn-primary btn-block">Gestionar</button>
                                    </div>
                                </div>
                            </div>
                        })
                        }

                        <h3 className="col-md-12 py-4">Kitchen </h3>
                        {Array.from({ length: this.props.kitchen }, (e, i) => {
                            return <div className="col-md-4 mb-4">
                                <div className="card">
                                    <div className="card-header">
                                        Kitchen {i + 1}
                                    </div>
                                    <div className="card-body">
                                        <button className="btn btn-primary btn-block">Gestionar</button>
                                    </div>
                                </div>
                            </div>
                        })
                        }


                        <h3 className="col-md-12 py-4">Bath  </h3>
                        {Array.from({ length: this.props.bath }, (e, i) => {
                            return <div className="col-md-4 mb-4">
                                <div className="card">
                                    <div className="card-header">
                                        Bath {i + 1}
                                    </div>
                                    <div className="card-body">
                                        <button className="btn btn-primary btn-block">Gestionar</button>
                                    </div>
                                </div>
                            </div>
                        })
                        }

                        <h3 className="col-md-12 py-4"> Receiver  </h3>
                        {Array.from({ length: this.props.receiver }, (e, i) => {
                            return <div className="col-md-4 mb-4">
                                <div className="card">
                                    <div className="card-header">
                                        Receiver {i + 1}
                                    </div>
                                    <div className="card-body">
                                        <button className="btn btn-primary btn-block">Gestionar</button>
                                    </div>
                                </div>
                            </div>
                        })
                        }

                        <h3 className="col-md-12 py-4">Garden  </h3>
                        {Array.from({ length: this.props.garden }, (e, i) => {
                            return <div className="col-md-4 mb-4">
                                <div className="card">
                                    <div className="card-header">
                                        Garden {i + 1}
                                    </div>
                                    <div className="card-body">
                                        <button className="btn btn-primary btn-block">Gestionar</button>
                                    </div>
                                </div>
                            </div>
                        })
                        }



                    </div>


                </div>
            </div>

        }



        return (

            <div className="card">
                <div className="card-header">
                    ¿Cuantas habitaciones tiene tu casa?
                </div>

                <div className="row">

                    <Listado />
                </div>



            </div>



        )
    }

}

export default CreateForm4;
