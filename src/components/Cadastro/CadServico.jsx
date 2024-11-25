import { useServico } from "../../app/contexts/teste";
import {useState, useEffect} from "react";
import { getLastCodFrom } from "@/src/app/services/supabase";

export default function CadServico(){
    const {
        setServico,
        servico,
        createServico
        } = useServico()



        const [ID, setID] = useState(0);

        let cod = ID + 1;
      
        function getID() {
          getLastCodFrom("servico").then((data) => {
            setID(data);
      
        })};
      
      
        useEffect(() => { 
          getID();
        }, []);


    const handleChange = (event) => {
        let { name, value } = event.target;
        setServico({ ...servico, [name]: value });
      };

    
    const handleFormSubmit = async (event) => {
        event.preventDefault(); 
        
        let { name, value } = event.target;
        setServico({ ...servico, [name]: value });
        await createServico(servico);   
        alert("Serviço cadastrado com sucesso!");
        setServico({
            Nome: "",
            ValorCusto: "",
            Descrição: "",
        });                       
      };
    return (<>


    <section>
    <div className="items-center pt-[30px]">
        <form onSubmit={(event) => handleFormSubmit(event)} className="flex justify-center flex-col bg-[#104f55] px-8 py-8 rounded-lg border-white border" id="borda1">
            <div className="">
            <div className="grid grid-cols-2">
                    <div
                        id="NomeServico"
                        className="m-1 flex flex-col mr-[15px] mb-[15px]"
                    >
                        <label className="text-xl text-white" htmlFor="nomeServico">
                            Nome do Serviço:
                        </label>
                        <input
                        onChange={handleChange}
                        value={servico.Nome}
                        type="text"
                        name="Nome"
                        id="nomeServico"
                        placeholder=""
                        autoComplete="off"
                        className="p-[10px] rounded-lg bg-white"
                        />
                    </div>
                    <div id="IdProduto" className="m-1 flex flex-col mr-[15px] mb-[15px]">
            <label className="text-xl text-white" htmlFor="IdProduto">
              Código do Serviço:
            </label>
            <div className="flex justify-center center align-center mt-4 ml-auto">
            {cod}
              </div>
          </div>
                    <div
                        id="ValorCustoServico"
                        className="m-1 flex flex-col mr-[15px] mb-[15px]">
                        <label className="text-xl text-white" htmlFor="ValorCustoServico">
                            Valor de Custo:
                        </label>
                        <input
                        value={servico.ValorCusto}
                        onChange={handleChange}
                        type="text"
                        name="ValorCusto"
                        id="ValorCustoServico"
                        placeholder=""
                        autoComplete="off"
                        className="p-[10px] rounded-lg bg-white"/>
                    </div>
                    <div
                    id="DescricaoServico"
                    className="m-1 flex flex-col mr-[15px] mb-[15px]"
                    >
                        <label className="text-xl text-white" htmlFor="DescricaoServico">
                            Descriçao do Serviço:
                        </label>
                        <input
                            value={servico.Descrição}
                            onChange={handleChange}
                            type="text"
                            name="Descrição"
                            id="DescricaoServico"
                            placeholder=""
                            autoComplete="off"
                            className="p-[10px] rounded-lg bg-white "

                        />
                    </div>

                </div>
                <div className="flex justify-center pt-[25px]">
                        <input
                            type="submit"
                            defaultValue="Salvar"
                            name="btn"
                            id="button"
                            className="bg-white p-2 rounded-lg active:bg-[#00ff0059]"
                        />
                    </div>
            </div>
        </form>
    </div>
    </section>
    </>)}