import { useServico } from '../app/contexts/teste';

export default function Addproduto({handleChange}) {

    const {
        
        Pedido

      } = useServico()

  return (
    <>
       <div id="OBJETO_VENDA" className="m-1 flex flex-row col-span-10"> 
            <div id="mercadoria" className="m-1 flex flex-col col-span-1">
                <label className="text-xl text-white">Mercadoria:</label>
                <input type="text" name="mercadoria" id="mercadoria" className="p-[10px] my-2 rounded-lg"
                      defaultValue={Pedido.mercadoria}
                      onChange={handleChange} />

            </div>

            <div id="quantidade" className="m-1 flex flex-col col-span-1">
                <label className="text-xl text-white">Quantidade:</label>
                <input type="text" name="qnt" id="quantidade" className="p-[10px] my-2 rounded-lg"
                      defaultValue={Pedido.qnt}
                      onChange={handleChange}/>


            </div>

            <div id="preco" className="m-1 flex flex-col col-span-1">
                <label className="text-xl text-white">Preco:</label>
                <input type="text" name="preco" id="preco" placeholder="" autoComplete="off" className="p-[10px] my-2 rounded-lg"
                      onChange={handleChange}
                      defaultValue={Pedido.preco}/>
               
            </div>

            <div id="mecanico" className="m-1 flex flex-col col-span-1">
                <label className="text-xl text-white">Mecânico:</label>
                <input type="text" name="mecanico" id="mecanico" placeholder="" autoComplete="off" className="p-[10px] my-2 rounded-lg"
                      onChange={handleChange}
                      defaultValue={Pedido.mecanico}/>
            </div>
            
        </div>
    </>
  );
}
