import React from 'react';

class CreateForm3 extends React.Component {


    //Inherid Parent Methods
    onSubmit = async (e) => { this.props.onSubmit(e); }
    onInputChange = (e) => { this.props.onInputChange(e); }



    render() {
        return (

            <div className="card">
                <div className="card-header">
                    ¿Cuantas habitaciones tiene tu casa?
                </div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <div>
                                <input
                                    className="form-control w-100"
                                    type="number"
                                    name="room"
                                    placeholder="Nº habitaciones"
                                    onChange={this.onInputChange} /> <br />
                            </div>
                            <div>
                                <input
                                    className="form-control"
                                    type="number"
                                    name="dinning"
                                    placeholder="Nº comedores"
                                    onChange={this.onInputChange}
                                /> <br />
                            </div>
                            <div>
                                <input
                                    className="form-control"
                                    type="number"
                                    name="kitchen"
                                    placeholder="Nº cocinas"
                                    onChange={this.onInputChange}
                                /> <br />
                            </div>
                            <div>
                                <input
                                    className="form-control"
                                    type="number"
                                    name="bath"
                                    placeholder="Nº baños"
                                    onChange={this.onInputChange}
                                /> <br />
                            </div>
                            <div>
                                <input
                                    className="form-control"
                                    type="number"
                                    name="receiver"
                                    placeholder="Nº recibidores"
                                    onChange={this.onInputChange}
                                /> <br />
                            </div>
                            <div>
                                <input
                                    className="form-control"
                                    type="number"
                                    name="garden"
                                    placeholder="Nº Jardin"
                                    onChange={this.onInputChange}
                                /> <br />
                            </div>

                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block">
                                Next
                         </button>
                        </div>
                    </form>
                </div>
            </div>



        )
    }

}

export default CreateForm3;
