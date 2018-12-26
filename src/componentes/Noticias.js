import React, { Component } from 'react'
import Noticia from './Noticia';
import {TransitionGroup} from 'react-transition-group';

class Noticias extends Component {
    render() {
        return (
            <div className="row">
                <TransitionGroup>
                {this.props.noticias.map(noticia  => (
                      
                 <Noticia 
                    key={noticia.url}
                    noticia={noticia}
                 />    
                ))}
                </TransitionGroup>
            </div>
        )
    }
}

export default Noticias; 