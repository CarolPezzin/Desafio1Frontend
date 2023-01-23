import styled from "styled-components";

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;

  margin-top: 8%;
  margin-left: 20%;

  width: 17.361vw;

  color: rgb(101, 101, 101);

  h2 {
    padding: 0%;
    margin: 0%;

    width: 100%;

    text-align: start;
    font-size: 24px;
    font-weight: bold;
    font-family: 'Source Sans Pro';
    
    color: rgba(101, 101, 101, 1);
  }

  label {
    height: 2.377vh;
    width: 100%;
    
    margin-top: 2.5vh;
    margin-bottom: 1vh;
    
    text-align: left;
    font-size: 14px;
    font-family: 'Source Sans Pro';  
    
    color: rgba(101, 101, 101, 1);
  }

  input {
    width: 97.3%;
    padding: 10px 3px;

    margin-top: 0%;

    font-size: 14px;
    font-family: 'Source Sans Pro';
    
    border-color: rgb(219, 227, 233);
    border-style:solid;

    color: rgba(0, 0, 0, 1);
  }
  input:focus {
    outline-color: rgba(102, 175, 233, 1);
  }

  p {
    margin-top: 0;
    margin-bottom: 0;
    
    text-align: left;
    font-size: 11px;
    font-family: 'Source Sans Pro'; 
    color: rgba(206, 206, 206, 1);
  }

  button{
    display: none !important;
  }

  @media (max-width: 768px){
    height: 10vh;
    margin-left: 11%;
    h2 {
    margin-top: 0%;
    font-size: 20px;
  }

  label {
    font-size: 10px;
  }

  input {
    font-size: 10px;
  }

  p {
    font-size: 9px;
  }
  }
`


