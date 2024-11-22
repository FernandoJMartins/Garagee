import { useEffect } from "react"
import { useServico } from "../app/contexts/teste";

export default function CardProdutoConsulta({result}){

    return (<>
    <div className="flex justify-center items-center ml-[50px] pt-[30px]">
        <div className="bg-white rounded-lg shadow-md p-6 max-w-xs mx-auto w-80">
      <h2 className="text-xl font-semibold mb-4">Produto ID:{result && result.Código}</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Nome">
          Nome:
        </label>
        <p className="text-gray-900 leading-relaxed">{result && result.Nome}</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="campo2">
          Fabricante:
        </label>
        <p className="text-gray-900 leading-relaxed">{result && result.Fabricante}</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="campo3">
          Fornecedor
        </label>
        <p className="text-gray-900 leading-relaxed">{result && result.Fornecedor}</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="campo4">
          Valor de custo:
        </label>
        <p className="text-gray-900 leading-relaxed">{result && result.ValorCusto}</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="campo5">
          Porcentagem de lucro:
        </label>
        <p className="text-gray-900 leading-relaxed">{result && result.PorcentagemLucro}</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="campo6">
          Valor de Custo:
        </label>
        <p className="text-gray-900 leading-relaxed">{result && result.ValorCusto}</p>
      </div>
    </div>
  </div> 
  
    </>)
}