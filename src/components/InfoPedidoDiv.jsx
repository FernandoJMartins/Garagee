import PedidoCard from './PedidoCard'

export default function InfoPedidoDiv({
    cliente,
    placa,
    modelo,
    km,
    vendedor,
    data,
    obs,
    mercadoria,
    qnt,
    preco,
    mecanico,
    desconto,
    metodoPagamento,
    bandeira,
    parcelas,
    pagamentoValor,
    id
  }){
    
    return( <>
        <div className='mt-5 grid grid-cols-4'>

             <div className="ml-2 mr-2 mt-3 mb-4 col-span-4">
                <div id="obs" className=''>
                        <h1 className="text-white text-xl mr-4">Descrição: {obs}</h1>
                </div>
            </div>
            
            <div className="ml-2 mr-2 mt-2 col-span-1">
                <div id="vendedor">
                    <h1 className="text-white text-xl mr-4">Mercadoria: {mercadoria}</h1>
                </div>
            </div>

            <div className="ml-2 mr-2 mt-2 col-span-1">
                <div id="vendedor">
                    <h1 className="text-white text-xl mr-4">Preço: R${preco}</h1>
                </div>
            </div>

            <div className="ml-2 mr-2 mt-2 col-span-1">
                <div id="vendedor">
                    <h1 className="text-white text-xl mr-4">Quantidade: {qnt}</h1>
                </div>
            </div>

            <div className="ml-2 mr-2 mt-2 col-span-1">
                <div id="vendedor">
                    <h1 className="text-white text-xl mr-4">Data: {data}</h1>
                </div>
            </div>
            
            <div className="ml-2 mr-2 mt-2 col-span-1">
                <div id="vendedor">
                <h1 className="text-white text-xl mr-4">Vendedor: {vendedor}</h1>
                </div>
            </div>

            

            <div className="ml-2 mr-2 mt-2 col-span-1">
                <div id="vendedor">
                    <h1 className="text-white text-xl mr-4">Mecanico: {mecanico}</h1>
                </div>
            </div>

            <div className="ml-2 mr-2 mt-2 col-span-1">
                <div id="vendedor">
                  <h1 className="text-white text-xl mr-4">Desconto: {desconto}</h1>
                </div>
            </div>

            <div className="ml-2 mr-2 mt-2 col-span-1">
                <div id="vendedor">
                    <h1 className="text-white text-xl mr-4">Bandeira: {bandeira}</h1>
                </div>
            </div>

            <div className="ml-2 mr-2 mt-2 col-span-1">
                <div id="vendedor">
                     <h1 className="text-white text-xl mr-4">Valor do Pagamento: R${pagamentoValor}</h1>
                </div>
            </div>

            <div className="ml-2 mr-2 mt-2 col-span-1">
                <div id="vendedor">
                     <h1 className="text-white text-xl mr-4">Parcelas: {parcelas}</h1>
                </div>
            </div>

            <div className="ml-2 mr-2 mt-2 col-span-1">
                <div id="vendedor">
                    <h1 className="text-white text-xl mr-4">Metodo de Pagamento: {metodoPagamento}</h1>
                </div>
            </div>
            <div className="ml-2 mr-2 mt-2 col-span-1">
                <div id="vendedor">
                    <h1 className="text-white text-xl mr-4">Código: {id}</h1>
                </div>
            </div>
        </div>
    
    </>)
}
