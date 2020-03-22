import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/" >Memudo</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ml-auto">
                            <Link className="nav-item nav-link active" href="#" to="/">Home <span className="sr-only">(current)</span></Link>
                            <Link className="nav-item nav-link" href="#" to="/removal">Create Removal</Link>
                            <Link className="nav-item nav-link" href="#" to="/user">Create User</Link>
                            
                        </div>
                    </div>
                </div>
            </nav >

        )
    }
}
