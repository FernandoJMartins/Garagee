"use client"
import { useState } from "react"
import OpcoesConsulta from "@/src/components/OpcoesConsulta"
import ConsultaServico from "@/src/components/ConsultaServico"
import ConsultaProduto from "@/src/components/ConsutaProduto"
import ConsultaCliente from "@/src/components/ConsultaCliente"
export default function Consulta(){
    const titulo1 = "Serviço"
    const titulo2 = "Produto"
    const titulo3 = "Cliente"

    const [selectConsulta, setSelecConsulta] = useState(0)  // error estranho que OpcoesConsultan importa do context
  
    const changeToServico = () => {
      setSelecConsulta(0)
    }
  
    const changeToProduto = () => {
      setSelecConsulta(1)
    }
  
    const changeToCliente = () => {
      setSelecConsulta(2)
    }
    
    return (
    <>
        <div className='flex items-center justify-center flex-col'>
        <OpcoesConsulta titulo1={titulo1} titulo2={titulo2} titulo3={titulo3} selectConsulta={selectConsulta} changeToServico={changeToServico} changeToProduto={changeToProduto} changeToCliente={changeToCliente}/>
          <div className="flex items-center justify-center">

            {selectConsulta == 0 && <ConsultaServico/>}
            {selectConsulta == 1 && <ConsultaProduto/>}
            {selectConsulta == 2 && <ConsultaCliente/>}
            
        </div>
      </div>
    </>)
}