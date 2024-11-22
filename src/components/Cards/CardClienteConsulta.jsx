import { useServico } from "../../app/contexts/teste"
export default function CardClienteConsulta({result}){
    return (<>
<div className="flex justify-center items-center ml-[50px] pt-[30px]">
        <div className="bg-white rounded-lg shadow-md p-6 max-w-xs mx-auto w-80">
      <h2 className="text-xl font-semibold mb-4">Cliente ID:{result && result.id}</h2>
      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="campo11">
            Data:
          </label>
          <p className="text-gray-900 leading-relaxed">{result && result.Data}</p>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="campo1">
            Nome:
          </label>
          <p className="text-gray-900 leading-relaxed">{result && result.Nome}</p>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="campo2">
            CPF:
          </label>
          <p className="text-gray-900 leading-relaxed">{result && result.CPF}</p>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="campo3">
            RG:
          </label>
          <p className="text-gray-900 leading-relaxed">{result && result.RG}</p>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="campo4">
            CEP:
          </label>
          <p className="text-gray-900 leading-relaxed">{result && result.CEP}</p>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="campo5">
            Rua
          </label>
          <p className="text-gray-900 leading-relaxed">{result && result.Rua}</p>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="campo6">
            Bairro
          </label>
          <p className="text-gray-900 leading-relaxed">{result && result.Bairro}</p>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="campo7">
            Cidade:
          </label>
          <p className="text-gray-900 leading-relaxed">{result && result.Cidade}</p>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="campo8">
            Número:
          </label>
          <p className="text-gray-900 leading-relaxed">{result && result.Número}</p>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="campo9">
            Email:
          </label>
          <p className="text-gray-900 leading-relaxed">{result && result.Email}</p>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="campo10">
            Telefone:
          </label>
          <p className="text-gray-900 leading-relaxed">{result && result.Telefone}</p>
        </div>
      </div>
    </div>
    </div> 
    
    </>)
}