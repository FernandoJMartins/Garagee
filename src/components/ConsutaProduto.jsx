import { useServico } from "../app/contexts/teste"
import CardProdutoConsulta from "./CardProdutoConsulta"
import { useEffect, useState } from "react"
export default function ConsultaProduto(){
    const{
        loadProduto,
        Produto,
        showCard,
        visibilityCard
    } = useServico()

    useEffect(() => {
    loadProduto(),[]})  

    const [input, setInput] = useState({Nome: ""})

    const [result, setResult] = useState([])

    const handleChange = (event) => {
        let { name, value } = event.target;
        setInput({ ...input, [name]: value });

        let ProdutoFiltrado = Produto.filter((Produto) => Produto.Nome.toUpperCase().includes(input.Nome.toUpperCase()))
        setResult(ProdutoFiltrado)
        console.log(ProdutoFiltrado)
      };
    return (<>
            <section>
                <div className="items-center pt-[30px]">
            
                <form className="flex justify-center flex-col bg-[#104f55] px-8 py-8 rounded-lg border-white border" id="borda1">
                        <div
                            id="NomeProduto"
                            className="m-1 flex flex-col mr-[15px] mb-[15px]"
                        >
                            <label className="text-xl text-white" htmlFor="nomeProduto">
                                Nome Produto:
                            </label>
                            <input         
                            onChange={handleChange}
                            type="text"
                            name="Nome"
                            id="nomeProduto"
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
                {showCard && <CardProdutoConsulta result={result[0]}/>}
            </section>
    </>)}