import React, { useState, useRef} from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import People from "../../assets/People.png"
import Arrow from "../../assets/arrow.png"


import { Contanier, Image, ContanierItens, H1, InputLabel, Input, Button, } from './styles';

function App() {
  const [users, setUsers] = useState([])
  const navigate = useNavigate()
  const inputName = useRef();
  const inputAge = useRef();


  async function addNewUser() {

    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value
    });

    setUsers([...users, newUser,])

    navigate('/usuarios')
  };



  return (
    <Contanier>
      <Image alt="logo-imagem" src={People}></Image>
      <ContanierItens>
        <H1>Olá</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome"></Input>

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade"></Input>

        <Button onClick={addNewUser}>Cadastrar <img alt="seta" src={Arrow} /></Button>

      </ContanierItens>
    </Contanier>);

}

export default App