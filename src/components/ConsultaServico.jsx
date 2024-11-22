import { useEffect, useState } from "react"
import { useServico } from "../app/contexts/teste"
import CardServicoConsulta from "./CardServicoConsulta"
export default function ConsultaServico(){
    const{
        loadServico,
        servico,
        showCard,
        visibilityCard,
        setInfoServico,
        infoServico,
        setServico,
        
    } = useServico()

    
    useEffect(() =>{
        loadServico()
    }, [])

    const [input, setInput] = useState({Nome: ""})

    const [result, setResult] = useState([])

    const handleChange = (event) => {
        let { name, value } = event.target;
        setInput({ ...input, [name]: value });

        let servicoFiltrado = servico.filter((servico) => servico.Nome.toUpperCase().includes(input.Nome.toUpperCase()))
        setResult(servicoFiltrado)
        console.log(servicoFiltrado)
      };
    
    return(
        <>
        <section className="">
            <div className=" pt-[30px]">
            
            <form className="flex justify-center flex-col bg-[#104f55] px-8 py-8 rounded-lg border-white border" id="borda1">
                 <div
                     id="NomeServico"
                     className="m-1 flex flex-col mr-[15px] mb-[15px] w-10/12" 
                 >
                     <label className="text-xl text-white" htmlFor="nomeServico">
                         Nome do Serviço:
                     </label>
                     <input
                     onChange={handleChange}
                     value={input.Nome}
                     type="text"
                     name="Nome"
                     id="nomeServico"
                     placeholder=""
                     autoComplete="off"
                             className="p-[15px] rounded-lg bg-white w-60"
                     
                     />
                 </div>
                 <div className="flex justify-center pt-[25px]">
                     <input
                        onClick={visibilityCard}
                         type="button"
                         defaultValue="Consultar"
                         name="btn"
                         id="button"
                         
                         className="text-white rounded-lg border border-black bg-[#01301c] p-2 hover:cursor-pointer"
                     />
                 </div>  
            </form>
        </div>
    </section>
    <section>
        {showCard && <CardServicoConsulta result={result[0]}/>}
    </section>
        </>
    )
}