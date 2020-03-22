import React, { Component } from 'react'
import axios from 'axios'
import CreateForm from './createForm'
import CreateForm2 from './createForm2'
import CreateForm3 from './createForm3'
import CreateForm4 from './createForm4'
import CreateForm5 from './createForm5'
import CreateGeneralSettings from './createGeneralSettings'

export default class CreateRemoval extends Component {



    async componentDidMount() {


        const res = await axios.get('http://localhost:4000/api/products');
        this.setState({ products: res.data });



    }

    state = {

        process: 1,
        origin: '',
        destination: '',
        kilometers: '',
        origin_floor: '',
        destination_floor: '',
        date: '',
        estances: '',
        products: [],
        inventory: [],
        estances_detail:
            [{
                room: '',
                dinning: '',
                kitchen: '',
                bath: '',
                receiver: '',
                garden: ''

            }]
    }


    onInputChange = e => {

        this.setState({
            [e.target.name]: e.target.value
        })
    }


    onSubmit = async e => {

        e.preventDefault();
        this.setState({
            process: this.state.process + 1
        })
        await axios.post('http://localhost:4000/api/removals', {

            name: this.state.name,
            email: this.state.email,
            origin: this.state.origin,
            destination: this.state.destination,
            origin_floor: this.state.origin_floor,
            destination_floor: this.state.destination_floor,
            estances: this.state.estances,
            estances_detail: [
                {
                    room: this.state.room,
                    dinning: this.state.dinning,
                    kitchen: this.state.kitchen,
                    bath: this.state.bath,
                    receiver: this.state.receiver,
                    garden: this.state.garden
                }]
        })



    }

    onInputSearchProduct = async e => {

        e.preventDefault();
        if (e.target.value.length > 2) {
            const rest = await axios.get('http://localhost:4000/api/products/', { params: { name: e.target.value } });
            this.setState({ products: rest.data });
        }

    }




    getProduct = async id => {

        const product = await axios.get('http://localhost:4000/api/products/' + id);
        product.data.quantity = 1;
        return { product }
    }


    addProductINventroy = async e => {
        // Llamamos a la función getProduct con el id y almacenamos el objeto en la variable new Product 
        const newProduct = await this.getProduct(e.target.value);

        //Aquí deberíamos validar si el id está en el algun objeto del array, en caso negativo hacer un push y en caso positivo sumar uno a la cantidad
        const resultado = this.state.inventory.find(inventory => inventory.product.data._id === newProduct.product.data._id);

        (resultado) ?

            this.state.inventory.map((item, index) => (item.product.data._id === newProduct.product.data._id) ?

                //Aquí hauriem de sumar un a la quantitat d'aquest objecte
                this.setState({ quantity: item.product.data.quantity++ }) :

                console.log("no" + index))

            :

            // Añadimos el objeto al array de objetos
            this.setState({ inventory: this.state.inventory.concat([newProduct]) })






    }


    render() {
        return (
            <div className="container">

                <div className="row mb-3">
                    <button className="col-md-3 mx-auto"><b>1 Origen/Destino</b></button>
                    <button className="col-md-3 mx-auto"><b>2 Mi inventario</b></button>
                    <button className="col-md-3 mx-auto"><b>3 Compara</b></button>
                    <button className="col-md-3 mx-auto"><b>4 Contracta</b></button>

                </div>
                <div className="row">

                    <div className="col-md-12 mx-auto">

                        {
                            (this.state.process === 1) ? (<CreateForm onSubmit={this.onSubmit} onInputChange={this.onInputChange} />) :
                                (this.state.process === 2) ? (<CreateForm2 onSubmit={this.onSubmit} onInputChange={this.onInputChange} />) :
                                    (this.state.process === 3) ? (<CreateForm3 onSubmit={this.onSubmit} onInputChange={this.onInputChange} />) :
                                        (this.state.process === 4) ? (<CreateForm4 onSubmit={this.onSubmit} {...this.state} />) :
                                            (this.state.process === 5) ? (<CreateForm5 addProductINventroy={this.addProductINventroy} onInputSearchProduct={this.onInputSearchProduct} {...this.state} />) :
                                                ("otra")

                        }
                    </div>

                    {/* <div className="col-md-4 mx-auto">

                        <CreateGeneralSettings {...this.state} />
                        
                    </div> */}
                </div>
            </div>
        )
    }
}

