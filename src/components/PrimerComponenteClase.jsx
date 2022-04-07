import React from 'react';
import '../css/PrimerComponenteClase.css'

export default class PrimerComponenteClase extends React.Component{
   
    constructor(props){
        super(props);
        this.nombre=props.nombre;
        this.apellidos=props.apellidos;
        this.color=props.color;
    }
    render(){
        return(
            <div className={this.color}>
                <h2>Clase de un componente  {this.nombre}   {this.apellidos}</h2>
            </div>
        );
    }


}

