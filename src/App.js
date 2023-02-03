import React from "react";
import {Container} from "./Container"
import {HelloWorld} from "./HelloWorld"
export class App extends React.Component{
  render(){
    return(
      <Container title="Hello World" >
        <HelloWorld/>
      </Container>
    )
  }
}