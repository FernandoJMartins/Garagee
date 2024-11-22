'use client';
import './style.css'
import Form from '../components/Forms/Form';

import { IoAdd} from "react-icons/io5";
import {useServico} from './contexts/teste';
import PedidoCard from '../components/Cards/PedidoCard';
import { useEffect, useState } from 'react';
import supabase from './services/supabase';
import InfoPedidoDiv from '../components/Opcoes/InfoPedidoDiv';

export default function Home(){
    const  {
      // isVisible,
      // toggleVisibility,
      loadPedidos,
      pedidos
    } = useServico();

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };

  useEffect(() => { 
  loadPedidos();
}, []);
   
    
  return(
    <>
    <div className="flex items-center justify-center">
      <button onClick={toggleVisibility} 
        className="mt-8 text-white rounded bg-[#01200f] p-2 hover: border-white">
        <IoAdd />
      </button>

    
      {isVisible && <Form toggleVisibility={toggleVisibility} />}
    </div>


    {pedidos.map((pedido) => (
        <PedidoCard {...pedido} key={pedido.id}/> //key é para o react identificar cada elemento
    ))}


    </>
  );
}