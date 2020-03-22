import React from 'react';

class CreateForm5 extends React.Component {




    //Inherid Parent Methods
    onSubmit = async (e) => { this.props.onSubmit(e); }
    onInputChange = (e) => { this.props.onInputChange(e); }
    onInputSearchProduct = (e) => { this.props.onInputSearchProduct(e); }
    addProductINventroy = (e) => { this.props.addProductINventroy(e); }



    render() {
        return (

            <div className="card">
                <div className="card-header">
                    Inventario
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <div>
                                <input
                                    className="form-control w-100"
                                    type="text"
                                    name="room"
                                    placeholder="Buscar mueble"
                                    onChange={this.onInputSearchProduct}
                                />
                                <br />
                            </div>

                        </div>
                    </form>


                    <div class="row">


                        {this.props.products.map(product => (
                            <div className="col-md-4 mb-4">
                                <div className="card">
                                    <div className="card-header">
                                        {product.name}
                                    </div>
                                    <div className="card-body">
                                    {product._id}
                                    {product.length}cm x {product.height}cm x {product.width}cm
                                    peso:{product.weight}Kg
                                        <button value={product._id} onClick={this.addProductINventroy} class="btn btn-primary btn-block">Anadir</button>
                                    </div>
                                </div>
                            </div>
                        ))

                        }


                    </div>


                </div>
            </div>



        )
    }

}

export default CreateForm5;
