import React from "react";
import "./App.css";

//Componente para layout
import Card from "./components/layout/Card";

//Componentes funcionais (Parte 1)
import ComParametro from "./components/basicos/ComParametro";
import ComFilhos from "./components/basicos/ComFilhos";
import Primeiro from "./components/basicos/Primeiro";
import Repeticao from "./components/basicos/Repeticao";
import Condicional from "./components/basicos/Condicional";
import CondicionalComIf from "./components/basicos/CondicionalComIf";

//Componentes mais elaborados (Parte 2)
import Pai from "./components/comunicacao/direta/Pai";
import Super from "./components/comunicacao/indireta/Super";
import Input from "./components/form/Input";
import Contador from "./components/contador/Contador";
import Mega from "./components/mega/Mega";

export default (props) => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">

      <Card título="#11 - Mega" color="#6ed36e">
        <Mega qtdNumero={6}></Mega> {/*parametro - quero gerar 6 numeros*/}
      </Card>

      <Card título="#10 - Contador" color="#5264ae">
        <Contador passo={10}></Contador>
      </Card>

      <Card título="#09 - Comunicação Indireta" color="violet">
        <Input></Input>
      </Card>

      <Card título="#08 - Comunicação Indireta" color="#000">
        <Super></Super>
      </Card>

      <Card título="#07 - Comunicação Direta" color="#7bc043">
        <Pai sobrenome="Freitas"></Pai>
      </Card>

      <Card título="#06 - Condicional versão 2" color="#ffcc5c">
        <CondicionalComIf numero={11}></CondicionalComIf>
      </Card>

      <Card título="#05 - Condicional versão 1" color="#fe4a49">
        <Condicional numero={11}></Condicional>
      </Card>

      <Card título="#04 - Repetição" color="#2ab7ca">
        <Repeticao></Repeticao>
      </Card>

      <Card título="#03 - Componente Com Filhos" color="#ff77aa">
        <ComFilhos>
          <ul>
            <li>Ana</li>
            <li>Bia</li>
            <li>Carlos</li>
            <li>Daniel</li>
          </ul>
        </ComFilhos>
      </Card>

      <Card título="#02 - Componente Com Parâmetro" color="#88d8b0">
        <ComParametro título="Esse é o título" subtítulo="Esse é o subtítulo" />
      </Card>

      <Card título="#01 - Primeiro Componente" color="#fe8a71">
        <Primeiro />
      </Card>
    </div>
  </div>
);
