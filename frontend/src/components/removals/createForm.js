import React from 'react';

class CreateForm extends React.Component {


    //Inherid Parent Methods
    onSubmit = async (e) => { this.props.onSubmit(e); }
    onInputChange = (e) => { this.props.onInputChange(e); }



    render() {
        return (


            
                <form className="row" onSubmit={this.onSubmit}>

                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                Origen de la mudanza
                        </div>
                            <div className="card-body">

                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="origin"
                                        placeholder="Dirección de origen"
                                        onChange={this.onInputChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <select name="origin_floor" className="form-control" onChange={this.onInputChange}>
                                        <option disabled value="0">Origin Floor</option>
                                        <option value="1">1rs Floor</option>
                                        <option value="2">2rs Floor</option>
                                        <option value="3">3rs Floor</option>
                                        <option value="4">4rs Floor</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                Destino de la mudanza
                        </div>
                            <div className="card-body">


                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="destination"
                                        placeholder="Dirección de destino"
                                        onChange={this.onInputChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <select name="destination_floor" className="form-control" onChange={this.onInputChange}>
                                        <option disabled value="0">Destination Floor</option>
                                        <option value="1">1rs Floor</option>
                                        <option value="2">2rs Floor</option>
                                        <option value="3">3rs Floor</option>
                                        <option value="4">4rs Floor</option>
                                    </select>
                                </div>

                            </div>
                        </div>
                    </div>
                    
                        <button type="submit" className="btn btn-primary btn-block mt-2">Next</button>
                    
                </form>


            



        )
    }

}

export default CreateForm;
