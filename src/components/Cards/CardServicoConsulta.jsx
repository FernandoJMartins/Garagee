
export default function CardServicoConsulta({result}){
  
    return (<>
    
    <div className='flex justify-center items-center ml-[50px] pt-[30px]'>
    <div className="bg-white rounded-lg shadow-md p-6 max-w-xs mx-auto w-80">
      <h2 className="text-xl font-semibold mb-4">Serviço de id: {result && result.ID}</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="campo1">
          Nome:
        </label>
        <p className="text-gray-900 leading-relaxed">{result && result.Nome}</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="campo2">
          Valor de Custo:
        </label>
        <p className="text-gray-900 leading-relaxed">{result && result.ValorCusto}</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="campo3">
          Descição:
        </label>
        <p className="text-gray-900 leading-relaxed">{result && result.Descrição}</p>
      </div>
    </div>
</div>
    </>)
}
