import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom"

import axios from "axios";

import Avatar from "../../assets/avatar.png"
import Arrow from "../../assets/arrow.png"
import Thrash from "../../assets/Lixeira.png"

import { Contanier, Image, ContanierItens, H1, Button, User } from './styles';

const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users");

      setUsers(newUsers);
    }
    fetchUsers()
  }, [])



  async function deleteUser(userid) {
    await axios.delete(`http://localhost:3001/users/${userid}`)
    const newUsers = users.filter(user => user.id !== userid)
    setUsers(newUsers)
  }

  function goBackPage(){
    navigate("/")
  }

  return (
    <Contanier>
      <Image alt="logo-imagem" src={Avatar}></Image>
      <ContanierItens>
        <H1>Usuários</H1>



        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}><img src={Thrash} alt="lata-de-lixo" /></button>
            </User>
          ))}
        </ul>

        <Button onClick={goBackPage} >
        <img alt="seta" src={Arrow}/> Voltar 
          </Button>

      </ContanierItens>
    </Contanier>);

}

export default Users;