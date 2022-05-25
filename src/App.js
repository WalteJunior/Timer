import React from "react";
import styled from 'styled-components'
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
body{
  background-color: orange;
}
`
const Tit = styled.h1`
color:blue;
text-align:center;
`
const Cont = styled.h2`
text-align:center;
color:blue;
`
const Box = styled.div`
display:flex;
justify-content:center;
`
const Iniciar = styled.button`
background-color:green;
border:solid green;
margin:5px;
`
const Zerar = styled.button`
background-color:yellow;
border:solid yellow;
margin:5px;
`
const Parar = styled.button`
background-color:red;
border:solid red;
margin:5px;
`
export default class App extends React.Component {
  state = {
    seg: 0
  };

  Restart = () => {
    this.setState({
      seg: (this.state.seg = 0)
    });
  };

  Start = () => {
    const parado = setInterval(() => {
      if (this.state.seg <= 99) {
        this.setState({
          seg: this.state.seg + 1
        });
      }
    }, 100);
    this.Stop = ()=>{
      clearInterval(parado)
    }
  };
  render() {
    return (
      <>
      <GlobalStyle/>
      <Tit>Welcome to my timer</Tit>
        <Cont>{this.state.seg} </Cont>
        <Box>
        <Iniciar onClick={this.Start}> Start </Iniciar>
        <Zerar onClick={this.Restart}> Restart </Zerar>
        <Parar onClick={this.Stop}> Stop </Parar>
        </Box>
      </>
    );
  }
}
