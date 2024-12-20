'use client';
import './style.css'
import Form from '../components/Forms/Form';

import { IoAdd} from "react-icons/io5";
import {useServico} from './contexts/teste';
import PedidoCard from '../components/Cards/PedidoCard';
import { useEffect, useState } from 'react';
import { update } from './services/supabase';

export default function Home(){
    const  {
      loadPedidos,
      pedidos,
    } = useServico();

    const [isVisible, setIsVisible] = useState(false);
    const [updateCards, setUpdateCards] = useState(0);

    const updateCard = () => {
        setUpdateCards((prev) => prev + 1);
    }

    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };

  useEffect(() => { 
  loadPedidos();
}, [updateCards]);
   
    
  return(
    <>
    <div className="flex items-center justify-center">
      <button onClick={toggleVisibility} 
        className="mt-8 w-14 h-12 text-white rounded bg-[#104f55] p-2  justify-center items-center flex border border-black hover:border-[white] transition hover: duration-150 ml-auto mr-24">
        <IoAdd />
      </button>

    
      {isVisible && (
        <>
          {/* Overlay escuro */}
          <div className="overlay" onClick={toggleVisibility}></div>
          
          {/* Formulário destacado */}
          <div className="form-container">
            <Form toggleVisibility={toggleVisibility} updateCard={updateCard} loadPedidos={loadPedidos} pedidos={pedidos}/>
          </div>
        </>
      )}
    </div>


    {pedidos.map((pedido) => (
        <PedidoCard {...pedido} key={pedido.id} updateCard={updateCard} /> //key é para o react identificar cada elemento
    ))}


    </>
  );
}