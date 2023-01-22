/* eslint-disable no-unused-vars */
import { ContainerForm } from "./styles.module";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from 'react'
import { AuthContext } from "../../contexts/AuthContext";

const Form = () => {
  const { SubmitApi } = useContext(AuthContext);

  const formSchema = yup.object().shape({
    amount: yup.string().required("Campo obrigatório"),
    installments: yup.string().min(0).max(12).required("Campo obrigatório"),
    mdr: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <ContainerForm onSubmit={handleSubmit(SubmitApi)}>
      <h2>Simule sua antecipação</h2>
      <label>Informe o valor da venda *</label>
      <input id="amount" type="text" {...register("amount")} />
      {errors.amount?.message}
      <label>Em quantas parcelas *</label>
      <input id="installments" type="text" {...register("installments")}/>
      {errors.installments?.message("Limite de 12 parcelas")}
      <p>Máximo de 12 parcelas</p>
      <label>Informe o percentual de MDR *</label>
      <input id="mdr" type="onClick" {...register("mdr")} />
      {errors.mdr?.message}
      <button type="submit"></button>
    </ContainerForm>
  );
};

export default Form;
