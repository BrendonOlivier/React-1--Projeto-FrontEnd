import styled from "styled-components"
import Background from "../../assets/background.png"


// Exportamos primeiro, para depois importar.


export const Contanier = styled.div`
    background: url("${Background}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    

`
export const Image = styled.img`
    margin-top: 15px;
    
`
export const ContanierItens = styled.div`
    background: linear-gradient(
        157.44deg, 
        rgba(255, 255, 255, 0.6) 0.84%, 
        rgba(255, 255, 255, 0.3) 0.85%, 
        rgba(255, 255, 255, 0.6) 100% );
    border-radius: 61px 61px 0px 0px;
   

    padding: 20px 36px;
    display: flex;
    flex-direction: column;
    height: 100vh;
     
`

export const H1 = styled.h1`
   font-style: normal;
   font-weight: bold;
   font-size: 34px;
   line-height: 40px;
   text-align: center;
   color: #FFFFFF;
   margin-bottom: 40px;
`
export const InputLabel = styled.p`
   letter-spacing: -0.408px;
   font-style: normal;
   font-weight: bold;
   font-size: 18px;
   line-height: 22px;
   margin-left: 25px;
   color: #EEEEEE;


`

export const Input = styled.input`
   background: rgba(255, 255, 255, 0.25);
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   border-radius: 14px;
   width: 300px;
   height: 40px;
   border: none;
   outline: none;
   padding-left: 25px;
   margin-bottom: 30px;

   font-style: normal;
   font-weight: normal;
   font-size: 20px;
   line-height: 28px;
   color: #FFFFFF;

   
`

export const Button = styled.button`
   width: 342px;
   height: 74px;
   margin-top: 50px;
   
   background: rgba(0, 0, 0, 0.8);
   border-radius: 14px;
   border: none;

   color: #FFFFFF;
   font-style: normal;
   font-weight: bold;
   font-size: 17px;
   line-height: 28px;
   cursor: pointer;

   display: flex;
   align-items: center;
   justify-content: center;
   gap: 20px;

   &:hover{
        opacity: 0.8;
   }

   &:active{
    opacity: 0.5;
   }
`
;