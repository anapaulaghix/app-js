import { useNavigate } from 'react-router';
import useAuth from '../../context/useAuth'
import solidariti from '../../img/solidariti.png'
import CarrinhoDoar from './CarrinhoDoar';
import CarrinhoReceber from './CarrinhoReceber';
import React, { useState } from 'react';

function Formulario(){
    const {signout} = useAuth();
    const navigate = useNavigate();

    return(
      <div>
        <h1>Olá, Contribuinte Solidariti!</h1>
        <p>Solicitações ou doações: Faça o controle de doações regularmente</p>
        <p>Esteja sempre atento na localização que você inserir, os doadores podem doar a qualquer horário do dia</p>
        <img src={solidariti} alt='solidariti'></img>
        <button onClick={() => [signout(), navigate("/")]}>Sair</button>
        <button>Excluir conta e parar de ser contribuinte :(</button>
        <br></br>
        <h1>Passo 1: (Cuidado com esse passo!)</h1>
        <CarrinhoReceber/>
        <br></br>
        <h1>Passo 2:</h1>
       <CarrinhoDoar/>
        </div>
    )
}

export default Formulario