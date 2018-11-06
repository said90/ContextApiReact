import React, { Component } from 'react'

//Crear context

const LigaContext = React.createContext();
export { LigaContext};

export class Liga extends Component {
    state = {
        equipos: [
            {
                nombre: 'Real Madrid',
                titulos: 35
            },

            {
                nombre: 'Barcelona',
                titulos: 45
            },
            {
                nombre: 'Atletico de Madrid',
                titulos: 10
            }
        ]

    }

    render() {
        return (
            <LigaContext.Provider value={{
                state: this.state.equipos,
                campeon: (id) =>{
                    const equipos = [...this.state.equipos];

                    equipos[id].titulos +=1;

                    this.setState({
                        state:equipos
                    })
                }
            }}>
                {this.props.children}

            </LigaContext.Provider>
 )
    }
}

export default Liga
