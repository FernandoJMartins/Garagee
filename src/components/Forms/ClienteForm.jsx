import CPFRegexFormat from '../Consultas/CPFRegexFormat';
import { useServico } from "../../app/contexts/teste";
import {useState, useEffect} from "react";
import { getLastCodFrom } from "../../app/services/supabase";
import { get } from 'http';


export default function ClienteForm({toggleVisibilityCliente}) {
    const {
        create2,
        setCliente,
        Cliente,
        inputValue,
        setInputValue,
        } = useServico()



        const setCurrentDate = () => {
          const currentDate = new Date();
          const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
          
          
          setCliente((prevData) => ({
            ...prevData,
            Data: formattedDate,
          }));
          return formattedDate
        };



        const [ID, setID] = useState(0);

        let cod = ID + 1;
      
        function getID() {
          getLastCodFrom("Cliente").then((data) => {
            setID(data);
        })};
      
      
        useEffect(() => { 
          getID();
          setCurrentDate();
        }, []);


    const handleChange = (event) => {
        let { name, value } = event.target;
        setCliente({ ...Cliente, [name]: value });
        console.log(Cliente)
      };


      const [input, setInput] = useState({CPF: ""});



      const readCPF = (event) => {
        let { name, value } = event.target;
    
        const key = event.nativeEvent.inputType; //detectar tecla pressionada
        const onlyNumbers = value.replace(/\D/g, '');
    
        if (key === 'deleteContentBackward') {
            setInput({...input, [name]: onlyNumbers }); //atualiza o estado do input
            setInputValue(value); //mantem o valor do input
            return;
        }
    
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
    
    
        //atualiza o estado do input
        setInput({ ...input, [name]: onlyNumbers });
        setInputValue(formattedValue);

        setCliente({ ...Cliente, ['CPF']: onlyNumbers });
              };
              

    
    const handleFormSubmit = async (event) => {
        event.preventDefault(); 
        
        let { name, value } = event.target;
        setCliente({ ...Cliente, [name]: value });

        console.log("Cliente enviado para o banco de dados:", Cliente);

        await create2(Cliente);   
        alert("Cliente cadastrado com sucesso!");
        getID();
        setCliente({
            Nome: "",
            RG: "",
            CPF: "",
            CEP: "",
            Rua: "",
            Bairro: "",
            Cidade: "",
            Número: "",
            Email: "",
            Telefone: "",
            Código: cod,
            Data: setCurrentDate(),

        });                       
      };


  return (
    <>
      <main className="flex overflow-x-none justify-center absolute z-20">
        <div className="w-1/6"></div>
        <section className="w-4/5 flex justify-center items-center flex-col">
          
            
              <form onSubmit={(event) => handleFormSubmit(event)}
                className="flex justify-center flex-col border-2 bg-[#104f55] px-8 py-8 rounded-lg border-white border" 
                >
                <div className="grid grid-cols-5 gap-4">
                  <div id="Nome" className="m-1 flex flex-col col-span-3">
                    <label className="text-xl text-white">Nome:</label>
                    <input
                      onChange={handleChange}
                      value={Cliente.Nome}
                      type="text"
                      name="Nome"
                      id="Nome"
                      placeholder=""
                      autoComplete="off"
                      className="p-[10px] rounded-lg"
                    ></input>
                  </div>
                  <div id="datacadastro" className="m-1 flex flex-col">
                    <label className="text-xl text-white">Data:</label>
                    <h1 className="text-white pt-4">{Cliente.Data}</h1>
                  </div>
                  <div id="codigo" className="m-1 flex flex-col">
                    <label className="text-xl text-white">codigo:</label>
                          {cod}
                  </div>
                  <div id="cpf" className="m-1 flex flex-col col-span-2">
                    <label className="text-xl text-white">CPF:</label>
                    <CPFRegexFormat handleChange={readCPF} name="CPF"/>
                  </div>
                  <div id="rg" className="m-1 flex flex-col col-span-2">
                    <label className="text-xl text-white">RG:</label>
                    <input
                      onChange={handleChange}
                      value={Cliente.RG}
                      type="text"
                      name="RG"
                      id="RG"
                      placeholder=""
                      autoComplete="off"
                      className="p-[10px] rounded-lg"
                    ></input>
                  </div>
                  <div id="cep" className="m-1 flex flex-col">
                    <label className="text-xl text-white">CEP:</label>
                    <input
                    onChange={handleChange}
                    value={Cliente.CEP}
                      type="text"
                      name="CEP"
                      id="CEP"
                      placeholder=""
                      autoComplete="off"
                      className="p-[10px] rounded-lg"
                    ></input>
                  </div>
                  <div id="Rua" className="m-1 flex flex-col col-span-2">
                    <label className="text-xl text-white">Rua:</label>
                    <input
                    onChange={handleChange}
                    value={Cliente.Rua}
                      type="text"
                      name="Rua"
                      id="Rua"
                      placeholder=""
                      autoComplete="off"
                      className="p-[10px] rounded-lg"
                    ></input>
                  </div>
                  <div id="Bairro" className="m-1 flex flex-col col-span-2">
                    <label className="text-xl text-white">Bairro:</label>
                    <input
                    onChange={handleChange}
                    value={Cliente.Bairro}
                      type="text"
                      name="Bairro"
                      id="Bairro"
                      placeholder=""
                      autoComplete="off"
                      className="p-[10px] rounded-lg"
                    ></input>
                  </div>
                  <div id="Cidade" className="m-1 flex flex-col">
                    <label className="text-xl text-white">Cidade:</label>
                    <input
                    onChange={handleChange}
                    value={Cliente.Cidade}
                      type="text"
                      name="Cidade"
                      id="Cidade"
                      placeholder=""
                      autoComplete="off"
                      className="p-[10px] rounded-lg"
                    ></input>
                  </div>
                  <div id="Número" className="m-1 flex flex-col">
                    <label className="text-xl text-white">Número:</label>
                    <input
                    onChange={handleChange}
                    value={Cliente.Número}
                      type="text"
                      name="Número"
                      id="Número"
                      placeholder=""
                      autoComplete="off"
                      className="p-[10px] rounded-lg"
                    ></input>
                  </div>
                  <div id="Email" className="m-1 flex flex-col col-span-2">
                    <label className="text-xl text-white">E-mail:</label>
                    <input
                    onChange={handleChange}
                    value={Cliente.Email}
                      type="text"
                      name="Email"
                      id="Email"
                      placeholder=""
                      autoComplete="off"
                      className="p-[10px] rounded-lg"
                    ></input>
                  </div>
                  <div id="Telefone" className="m-1 flex flex-col col-span-2">
                    <label className="text-xl text-white">Telefone:</label>
                    <input
                    onChange={handleChange}
                    value={Cliente.Telefone}
                      type="text"
                      name="Telefone"
                      id="Telefone"
                      placeholder=""
                      autoComplete="off"
                      className="p-[10px] rounded-lg"
                    ></input>
                  </div>
                </div>
                <div className="flex justify-center pt-[25px]">
            
                  <button id="save" type="submit" className="text-white rounded border mr-2 border-black bg-[#01301c] p-2 hover: border-white">Salvar</button>
                  <button onClick={() => toggleVisibilityCliente(false)} className="text-white rounded border border-black bg-[#01301c] p-2 hover: border-white">Fechar</button> 
                </div>
              </form>
            
        </section>
      </main>
    </>
  );
}
