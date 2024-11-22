import CPFRegexCliente from "./CPFRegexCliente"
import CardClienteConsulta from "../Cards/CardClienteConsulta"
import { useServico } from "../../app/contexts/teste.js"
import { useEffect, useState } from "react"

export default function ConsultaCliente(){
    const{
        loadCliente,
        Cliente,
        setInfoCliente,
        showCard,
        visibilityCard,
        setInputValue
    } = useServico()

    useEffect(() => {

        loadCliente(),[]})    

        const [input, setInput] = useState({CPF: ""})

        const [result, setResult] = useState([])
    
        const handleChange = (event) => {
            let { name, value } = event.target;
            setInput({ ...input, [name]: value });
    
            let ClienteFiltrado = Cliente.filter((Cliente) => Cliente.CPF.toUpperCase().includes(input.CPF.toUpperCase()))
            setResult(ClienteFiltrado)
            console.log(ClienteFiltrado)
            const onlyNumbers = value.replace(/\D/g, '');

            let formattedValue = '';

             if (onlyNumbers.length <= 3) {
              formattedValue = onlyNumbers;
            } else if (onlyNumbers.length <= 6) {
              formattedValue = `${onlyNumbers.slice(0, 3)}.${onlyNumbers.slice(3)}`;
            } else if (onlyNumbers.length <= 9) {
              formattedValue = `${onlyNumbers.slice(0, 3)}.${onlyNumbers.slice(3, 6)}.${onlyNumbers.slice(6)}`;
            } else {
              formattedValue = `${onlyNumbers.slice(0, 3)}.${onlyNumbers.slice(3, 6)}.${onlyNumbers.slice(6, 9)}-${onlyNumbers.slice(9, 11)}`;
            }

            setInputValue(formattedValue);
          };

    return (<>
    <section>
        <div className="items-center pt-[30px]">
            
        <form className="flex justify-center flex-col bg-[#104f55] px-8 py-8 rounded-lg border-white border" id="borda1">
                        <div
                            id="cpfCliente"
                            className="m-1 flex flex-col mr-[15px] mb-[15px]"
                        >
                            <label className="text-xl text-white" htmlFor="cpfCliente">
                                CPF do cliente:
                            </label>
                            <CPFRegexCliente handleChange={handleChange}/>
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
        {showCard && <CardClienteConsulta result={result[0]}/>}
    </section>
    
    
    </>)
}