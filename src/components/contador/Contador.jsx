import React, { Component } from "react";
import "./Contador.css";

import Display from './Display.jsx';
import PassoForm from './PassoForm.jsx';
import Botoes from './Botoes';

class Contador extends Component {

  state = {
    passo: this.props.passo || 1, //  valor recebido ou 1
    valor: this.props.valor || 0,
  };

  /* outra forma de inicializar o estado do componente

    constructor(props){
        super(props)

        this.state = {   
            passo: props.passo,
            valor: 0
        }
    }
*/
  // Função incrementar - setState muda o valor atual - soma o passo
  inc = () => {
    this.setState({
      valor: this.state.valor + this.state.passo,
    });
  };

  dec = () => {
    this.setState({
      valor: this.state.valor - this.state.passo,
    });
  };

  mudarPasso = (novoPasso) => {
      this.setState({
          passo: novoPasso
      })
  }

  render() {
    return (
      <div className="Contador">

        <h2>Contador</h2>

        <PassoForm passo={this.state.passo}
            onPassoChange={this.mudarPasso}></PassoForm>

        <Display valor={this.state.valor}></Display>

        <Botoes onInc={this.inc} onDec={this.dec}></Botoes>
       
      </div>
    )
  }
}

export default Contador;

/* neste ex. foi trabalhado: chamada de um evento, ligar o método ao clique de um botão,
   alterar estado, ter formulário, componente controlado.
   desafio - quebrar em mais de uma classe e ter comunicação indireta
*/
