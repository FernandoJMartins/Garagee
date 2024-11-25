import { usecliente } from "../../app/contexts/teste";
import {useState, useEffect} from "react";
import { getLastIdFrom } from "../../app/services/supabase";

export default function CadCliente(){
    const {
        setCliente,
        Cliente,
        create
        } = usecliente()



        const [ID, setID] = useState(0);

        let cod = ID + 1;
      
        function getID() {
          getLastIdFrom("Cliente").then((data) => {
            setID(data);
        })};
      
      
        useEffect(() => { 
          getID();
        }, []);


    const handleChange = (event) => {
        let { name, value } = event.target;
        setCliente({ ...Cliente, [name]: value });
      };

    
    const handleFormSubmit = async (event) => {
        event.preventDefault(); 
        
        let { name, value } = event.target;
        setCliente({ ...Cliente, [name]: value });
        await create('Cliente', Cliente);   
        alert("Cliente cadastrado com sucesso!");
        setCliente({
            Nome: "",
        });                       
      };
    return (<>


    <section>
    <div className="items-center pt-[30px]">
        <form onSubmit={(event) => handleFormSubmit(event)} className="flex justify-center flex-col bg-[#104f55] px-8 py-8 rounded-lg border-white border" id="borda1">
            <div className="">
            <div className="grid grid-cols-2">
                    <div
                        id="Nomecliente"
                        className="m-1 flex flex-col mr-[15px] mb-[15px]"
                    >
                        <label className="text-xl text-white" htmlFor="nomecliente">
                            Nome do Serviço:
                        </label>
                        <input
                        onChange={handleChange}
                        value={Cliente.Nome}
                        type="text"
                        name="Nome"
                        id="nomecliente"
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
                        id="ValorCustocliente"
                        className="m-1 flex flex-col mr-[15px] mb-[15px]">
                        <label className="text-xl text-white" htmlFor="ValorCustocliente">
                            Valor de Custo:
                        </label>
                        <input
                        value={Cliente.ValorCusto}
                        onChange={handleChange}
                        type="text"
                        name="ValorCusto"
                        id="ValorCustocliente"
                        placeholder=""
                        autoComplete="off"
                        className="p-[10px] rounded-lg bg-white"/>
                    </div>
                    <div
                    id="Descricaocliente"
                    className="m-1 flex flex-col mr-[15px] mb-[15px]"
                    >
                        <label className="text-xl text-white" htmlFor="Descricaocliente">
                            Descriçao do Serviço:
                        </label>
                        <input
                            value={Cliente.Descrição}
                            onChange={handleChange}
                            type="text"
                            name="Descrição"
                            id="Descricaocliente"
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