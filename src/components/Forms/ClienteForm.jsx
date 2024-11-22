import Link from 'next/link';
import { useContext } from 'react';
import { useServico } from '../../app/contexts/teste';
import CPFRegexFormat from '../Consultas/CPFRegexFormat';

export default function ClienteForm({toggleVisibilityCliente}) {


  return (
    <>
      <main className="flex overflow-x-none justify-center absolute z-20">
        <div className="w-1/6"></div>
        <section className="w-4/5 flex justify-center items-center flex-col">
          
            
              <form
                className="flex justify-center flex-col border-2 bg-[#104f55] px-8 py-8 rounded-lg border-white border" 
                >
                <div className="grid grid-cols-5 gap-4">
                  <div id="nome" className="m-1 flex flex-col col-span-3">
                    <label className="text-xl text-white">Nome:</label>
                    <input
                      type="text"
                      name="nome"
                      id="nome"
                      placeholder=""
                      autoComplete="off"
                      className="p-[10px] rounded-lg"
                    ></input>
                  </div>
                  <div id="datacadastro" className="m-1 flex flex-col">
                    <label className="text-xl text-white">Data:</label>
                  </div>
                  <div id="codigo" className="m-1 flex flex-col">
                    <label className="text-xl text-white">codigo:</label>
                  </div>
                  <div id="cpf" className="m-1 flex flex-col col-span-2">
                    <label className="text-xl text-white">CPF:</label>
                    <CPFRegexFormat />
                  </div>
                  <div id="rg" className="m-1 flex flex-col col-span-2">
                    <label className="text-xl text-white">RG:</label>
                    <input
                      type="text"
                      name="rg"
                      id="rg"
                      placeholder=""
                      autoComplete="off"
                      className="p-[10px] rounded-lg"
                    ></input>
                  </div>
                  <div id="cep" className="m-1 flex flex-col">
                    <label className="text-xl text-white">CEP:</label>
                    <input
                      type="text"
                      name="cep"
                      id="cep"
                      placeholder=""
                      autoComplete="off"
                      className="p-[10px] rounded-lg"
                    ></input>
                  </div>
                  <div id="rua" className="m-1 flex flex-col col-span-2">
                    <label className="text-xl text-white">Rua:</label>
                    <input
                      type="text"
                      name="rua"
                      id="rua"
                      placeholder=""
                      autoComplete="off"
                      className="p-[10px] rounded-lg"
                    ></input>
                  </div>
                  <div id="bairro" className="m-1 flex flex-col col-span-2">
                    <label className="text-xl text-white">Bairro:</label>
                    <input
                      type="text"
                      name="bairro"
                      id="bairro"
                      placeholder=""
                      autoComplete="off"
                      className="p-[10px] rounded-lg"
                    ></input>
                  </div>
                  <div id="cidade" className="m-1 flex flex-col">
                    <label className="text-xl text-white">Cidade:</label>
                    <input
                      type="text"
                      name="cidade"
                      id="cidade"
                      placeholder=""
                      autoComplete="off"
                      className="p-[10px] rounded-lg"
                    ></input>
                  </div>
                  <div id="numero" className="m-1 flex flex-col">
                    <label className="text-xl text-white">Número:</label>
                    <input
                      type="text"
                      name="numero"
                      id="numero"
                      placeholder=""
                      autoComplete="off"
                      className="p-[10px] rounded-lg"
                    ></input>
                  </div>
                  <div id="email" className="m-1 flex flex-col col-span-2">
                    <label className="text-xl text-white">E-mail:</label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder=""
                      autoComplete="off"
                      className="p-[10px] rounded-lg"
                    ></input>
                  </div>
                  <div id="telefone" className="m-1 flex flex-col col-span-2">
                    <label className="text-xl text-white">Telefone:</label>
                    <input
                      type="text"
                      name="telefone"
                      id="telefone"
                      placeholder=""
                      autoComplete="off"
                      className="p-[10px] rounded-lg"
                    ></input>
                  </div>
                </div>
                <div className="flex justify-center pt-[25px]">
            
                  <button id="save" type='submit' className="text-white rounded border mr-2 border-black bg-[#01301c] p-2 hover: border-white">Salvar</button>
                  <button onClick={() => toggleVisibilityCliente(false)} className="text-white rounded border border-black bg-[#01301c] p-2 hover: border-white">Fechar</button> 
                </div>
              </form>
            
        </section>
      </main>
    </>
  );
}
