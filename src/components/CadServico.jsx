import { useServico } from "../app/contexts/teste";

export default function CadServico(){
    const {
        setServico,
        servico,
        createServico
        } = useServico()
    const handleChange = (event) => {
        let { name, value } = event.target;
        
        setServico({ ...servico, [name]: value });
      };
    
    const handleFormSubmit = async (event) => {
        event.preventDefault(); 
        await createServico(servico);   
        alert("Serviço cadastrado com sucesso!")                              
      };
    return (<>


    <section>
    <div className="items-center pt-[30px]">
        <form onSubmit={(event) => handleFormSubmit(event)} className="flex justify-center flex-col bg-[#104f55] px-8 py-8 rounded-lg border-white border" id="borda1">
            <div className="">
                <div className="">
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
                    <div
                        id="ValorCustoServico"
                        className="m-1 flex flex-col mr-[15px] mb-[15px]">
                        <label className="text-xl text-white" htmlFor="ValorCustoServico">
                            Valor de Custo:
                        </label>
                        <input
                        onChange={handleChange}
                        value={servico.ValorCusto}
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
                        <textarea
                            onChange={handleChange}
                            value={servico.Descrição}
                            type="text"
                            name="Descrição"
                            id="DescricaoServico"
                            placeholder=""
                            autoComplete="off"
                            className="p-[10px] rounded-lg bg-white "
                            rows={3}

                        />
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
            </div>
        </form>
    </div>
    </section>
    </>)}