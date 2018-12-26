import React, { Component } from 'react';
import './App.css';
import Header from './componentes/Header';
import Noticias from './componentes/Noticias';
import Fromulario from './componentes/Formulario';

class App extends Component {

  state = {
    noticias: []
  }

  componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = (categoria = 'general') => {

    console.log(categoria);    

    let url = 
    `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=cb0f391be95245bdb115f61f973736d8`;

    fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(newspaper => {
        this.setState({
          noticias: newspaper.articles
        })
      })
  }

  render() {
    return (
      <div className="contenedor-app">
        <Header
          titulo='Noticias'
        />        
        <div className="container white contenedor-noticias">
        <Fromulario
          consultarNoticia = {this.consultarNoticias }
        />
          <Noticias
            noticias={this.state.noticias}
          />
        </div>
      </div>
    );
  }
}

export default App;
