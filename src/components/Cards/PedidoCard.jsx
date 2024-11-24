import Link from 'next/link';
import { useServico } from '../../app/contexts/teste';
import InfoPedidoDiv from '../Opcoes/InfoPedidoDiv';
import { useState } from 'react';

export default function PedidoCard({
    updateCard,
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
  }) {


    const [isVisibleInfoCard, setIsVisibleInfoCard] = useState(false)

    const toggleVisibleInfoCard = () => {
      setIsVisibleInfoCard(!isVisibleInfoCard)
    }	

    const {removePedido} = useServico();

    const handleRemovePedidoCard = async() => {
      await removePedido(id);
      updateCard();
    }

    const [isExpanded, setIsExpanded] = useState(false);

    const changeBtn = () => {
      setIsExpanded((prev) => !prev);
    }


  return (
      <div className="flex w-full" > 
        <div className="w-1/6" ></div>
            <div className='flex w-9/12 bg-[#104f55] rounded-lg border border-black my-4 justify-center hover:border-[white] transition hover: duration-150'>
            <Link href='/' onClick={(e) => {e.preventDefault(); toggleVisibleInfoCard(); changeBtn()}} className="w-full p-[40px]">
              <div className='flex'>
                  <div id="placa" className="m-auto">
                    <h1 className="text-white text-xl mr-4">Placa: {placa}</h1>
                  </div>

                  <div id="carro" className="m-auto">
                    <h1 className="text-white text-xl mr-4">Veículo: {modelo}</h1>
                  </div>

                  <div id="KM" className="m-auto">
                    <h1 className="text-white text-xl mr-4">KM: {km}</h1>
                  </div>

                  <div id="cliente" className="m-auto">
                    <h1 className="text-white text-xl mr-4">Cliente: {cliente}</h1>
                  </div>
                  
              </div> 
              {isVisibleInfoCard && <InfoPedidoDiv modelo={modelo} cliente={cliente} obs={obs} vendedor={vendedor} data={data} mercadoria={mercadoria} qnt={qnt} preco={preco} mecanico={mecanico} desconto={desconto} metodoPagamento={metodoPagamento} bandeira={bandeira} parcelas={parcelas} pagamentoValor={pagamentoValor} id={id}
 />}
              </Link>
              <button id='removeCard' onClick={handleRemovePedidoCard} className = {`${isExpanded ? 'py-[190px] px-[15px] transitio' : 'py-[41px] px-[15px]'}
              bg-black text-white border rounded border-black hover:border-white my-auto ml-auto`}>X</button>
              </div>
            
        </div>
  );
}