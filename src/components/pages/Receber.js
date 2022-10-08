import styles from './DoarReceber.module.css'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Component, useEffect, useState } from 'react';
import api from '../../context/api'
import {AiOutlineSearch} from 'react-icons/ai'
import clientMapa from '../mapas/clientMapa'
import {Link} from 'react-router-dom';

class Receber extends Component{

  state = {
    cadastros: [],
  }

  async componentDidMount(){
    const response = await api.get('/cadastros');
    console.log(response.data)
    this.setState({cadastros: response.data})
  }
  render(){

    const {cadastros} = this.state;

    return(
      <div>
        <h1>Lista de Contribuintes</h1>
        <label>busque por sua regiao</label>
      {cadastros.map(cadastro => (
        <Container>
          <Row>
         <Card>
          <Card.Header key={cadastro._id}>
            <li style={{listStyleType: "none"}}>Nome: {cadastro.name}</li>
            <li>Email: {cadastro.email}</li>
            <li>Cidade: {cadastro.cidade}</li>
            <li>Endereço: {cadastro.local}</li>
            </Card.Header>
            <Card.Footer>
            </Card.Footer>
            <br></br>
            </Card>
            <br></br>
            </Row>
            <br></br>
            </Container>
        ))}
        </div>
    )
  }
}
export default Receber