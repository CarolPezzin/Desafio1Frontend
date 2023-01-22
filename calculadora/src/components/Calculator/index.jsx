import {ContainerCalculator, ResultCard} from "./styles.models";
import Form from "../FormCalculator";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";


const Calculator = () => {
  const { result } = useContext(AuthContext);

  return result ? (
    <ContainerCalculator className="CalculatorCard">
      <span>
        <Form />
      </span>
      <ResultCard>
        <h2>VOCÊ RECEBERÁ:</h2>
      
          <p>Amanhã R$ {result['1']}</p>
          <p>Em 15 dias R$ {result['15']}</p>
          <p>Em 30 dias R$ {result['30']}</p>
          <p>Em 90 dias R$ {result['90']}</p>
        
      </ResultCard>
    </ContainerCalculator>
  ): 
  ( 
    <ContainerCalculator className="CalculatorCard">
      <span>
        <Form />
      </span>
      <ResultCard>
        <h2>VOCÊ RECEBERÁ:</h2>
      
          <p>Amanhã R$0.00</p>
          <p>Em 15 dias R$ 0,00</p>
          <p>Em 30 dias R$ 0,00</p>
          <p>Em 90 dias R$ 0,00</p>
        
      </ResultCard>
    </ContainerCalculator>
  )
    
} 
  export default Calculator;