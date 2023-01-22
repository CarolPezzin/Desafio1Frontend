import styled from "styled-components"

export const ContainerCalculator = styled.div`
  display: flex;
  flex-direction: row;
  height: 51.519vh;
  width: 42.222vw;
  border-color: rgb(219, 227, 233);
  border-style:solid;
  background-color: rgb(255, 255, 255);

  span{
    width: 76vw;
    height: 100%;
    margin-top: 4%;
}
`
export const ResultCard = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  
  
  background-color: rgba(209, 220, 227, 0.18);
  
  h2{    
    width: 70%;
    padding: 1%;
    
    margin-top: 38%;
    margin-left: 15%;
    border-bottom: 2px solid 
rgba(93, 156, 236, 1);
    
    text-align: left;
    font-style: italic;
    font-weight: 700;
    font-size: 16px;
    font-family: 'Source Sans Pro';
    text-transform: uppercase;
    
    color: rgba(61, 117, 187, 1);   
  }
  p{    
    width: 70%;
    
    margin-left: 15%;

    text-align: left;
    font-size: 16px;
    font-family: 'Source Sans Pro';
    font-style: italic;
    
    color: rgba(93, 156, 236, 1);
  }
`

