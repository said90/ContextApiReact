import React, { Component } from 'react'
import { LigaContext } from './Liga'

export class Equipo extends Component {
    render() {

        return (
            <LigaContext.Consumer>
                {(value) => {
                    return Object.keys(value.state).map(idEquipo => {
                        return (

                            <li className="list-group-item d-flex justify-content-between align-items-center" key={idEquipo}>
                                <p className="m-0">
                                    {value.state[idEquipo].nombre}


                                    <span className="ml-4 badge badge-danger">
                                        {value.state[idEquipo].titulos}
                                    </span>
                                </p>
                                <button className="btn btn-success" type="button"
                                    onClick={() => {
                                        console.log(idEquipo)
                                        value.campeon(idEquipo);
                                    }}>
                                    Campeon</button>
                            </li>
                        )
                    })
                }}
            </LigaContext.Consumer>
        )
    }
}

export default Equipo
