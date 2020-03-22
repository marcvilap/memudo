import React from 'react';

class CreateForm2 extends React.Component {


    //Inherid Parent Methods
    onSubmit = async (e) => { this.props.onSubmit(e); }
    onInputChange = (e) => { this.props.onInputChange(e); }



    render() {
        return (

            <div className="card">
                <div className="card-header">
                    Create Removal
                    </div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group row">
                            <div className="col-md-6 p-0 text-center">
                                Por habitaciones
                                <input type="radio"
                                    className="form-control"
                                    name="estances"
                                    value="Por habitaciones"

                                    onChange={this.onInputChange}
                                />

                            </div>
                            <div className="col-md-6 p-0 text-center">
                                Todo junto
                                <input type="radio"
                                    className="form-control"
                                    name="estances"
                                    value="Todo junto"
                                    onChange={this.onInputChange}
                                />

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

export default CreateForm2;
