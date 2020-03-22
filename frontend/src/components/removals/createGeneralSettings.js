import React from 'react';

class CreateGeneralSettings extends React.Component {



    render() {
        return (


            <div>
                <div className="card">
                    <div className="card-header">
                        Removal general Settings
                            </div>
                    <div className="card-body">
                        <ul className="list-group">
                            {(this.props.name) ? "Name: " + this.props.name : ""}<br />
                            {(this.props.email) ? "Email: " + this.props.email : ""}<br />
                            {(this.props.origin) ? "Origin: " + this.props.origin : ""}<br />
                            {(this.props.destination) ? "destination: " + this.props.destination : ""}<br />
                            {(this.props.origin_floor) ? "Origin Floor: " + this.props.origin_floor : ""}<br />
                            {(this.props.destination_floor) ? "Destination Floor: " + this.props.destination_floor : ""}<br />

                        </ul>
                    </div>
                </div>
                {
                    (this.props.process > 1 && this.props.estances) ?

                        <div className="card mt-3">
                            <div className="card-header">
                                Removal Organitzate
                        </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    Organización: {this.props.estances}<br />
                                </ul>
                            </div>
                        </div>

                        : ""
                }

                {
                    (this.props.process > 2) ?

                        <div className="card mt-3">
                            <div className="card-header">
                                Room Numbers
                        </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    {(this.props.room) ? "Rooms: " + this.props.room : ""}<br />
                                    {(this.props.dinning) ? "Dinning: " + this.props.dinning : ""}<br />
                                    {(this.props.kitchen) ? "Kitchen: " + this.props.kitchen : ""}<br />
                                    {(this.props.bath) ? "Baths: " + this.props.bath : ""}<br />
                                    {(this.props.receiver) ? "Receiver: " + this.props.receiver : ""}<br />
                                    {(this.props.garden) ? "Garden : " + this.props.garden : ""}<br />

                                </ul>
                            </div>
                        </div>

                        : ""
                }

                {
                    (this.props.process > 4) ?

                        <div className="card mt-3">
                            <div className="card-header">
                                Inventory
                        </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    {this.props.inventory.map((item, index) =>   <li key={index}>{item.product.data.quantity} - {item.product.data.name} </li> )   }


                                </ul>
                            </div>
                        </div>

                        : ""
                }


            </div>

        )
    }

}

export default CreateGeneralSettings;
