import Link from 'next/link';
import { useContext } from 'react';
import { useServico } from '../app/contexts/teste';
import CPFRegexFormat from './CPFRegexFormat';

export default function ClienteForm() {
  const { toggleVisibilityCliente, handleChange } = useServico();

  return (
    <>
      <main className="flex overflow-x-none justify-center absolute z-20">
        <div className="w-1/6"></div>
        <section className="w-4/5 flex justify-center items-center flex-col">
          
            
              <form
                className="border-2 flex justify-center h-[30rem] w-[40rem] flex-col bg-gray-900 px-8 py-8 rounded-lg border-white shadow-[10px_5px_rgb(255,255,255)] transition-all duration-[0.5s] ease-[ease-in-out] hover:shadow-[10px_5px_rgb(255,255,255)] hover:transition-all hover:duration-[0.25s] hover:ease-[ease-in-out]"
                id="borda1"
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
                <div className="flex justify-center pt-6">
                  <button className="border-2 text-white p-2 rounded-lg bg-[#00ff0059] hover:bg-green-500">
                    Salvar
                  </button>
                  {/* <button className="border-2 text-white p-2 rounded-lg bg-[#00ff0059] hover:bg-green-500">
                    Deletar
                  </button> */}
                  <button
                    onClick={toggleVisibilityCliente}
                    className="border-2 text-white p-2 rounded-lg bg-[#00ff0059] hover:bg-green-500"
                  >
                    Fechar
                  </button>
                </div>
              </form>
            
        </section>
      </main>
    </>
  );
}
