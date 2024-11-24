"use client"
import { createContext, useState, useContext } from 'react';
import {read, create, remove, getLastCodFrom} from "../services/supabase";



export function VisibilityCliente() {
  const [isVisibleCliente, setIsVisibleCliente] = useState(false)


  const toggleVisibilityCliente = () => {
    setIsVisibleCliente(!isVisibleCliente); // inverte o valor de isVisible
  }

  return {
      toggleVisibilityCliente,
      isVisibleCliente
  }
}


export const ServicoContext = createContext({});


export default function ServicoProvider({ children }) {

  const initialPedidoData = {
    cliente: '',
    cod: '',
    placa: '',
    modelo: '',
    km: '',
    vendedor: '',
    nf: '',
    data: '',
    obs: '',
    mercadoria: '',
    mercadoria2: '',
    qnt: 0,
    qnt2: 0,
    preco: 0.00,
    mecanico: '',
    mecanico2: '',
    desconto: 0.00,
    preco2: 0.00,
    metodoPagamento: '',
    bandeira: '',
    parcelas: 0,
    pagamentoValor: '',
    valorTotal1: '',
    valorTotal2: '',
  };
  
  const initialProdutoData = {
    Nome: '',
    Fabricante: '',
    Fornecedor: '',
    Descrição: '',
    ValorCusto: '',
    PorcentagemLucro: '',
  };  


  const InitialservicoData = {
    Nome: '',
    Descrição: '',
    ValorCusto: '',
  };

  const [isVisibleCliente, setVisibilityCliente] = useState(false)

  const toggleVisibilityCliente = () => {
    setVisibilityCliente(!isVisibleCliente); // inverte o valor de isVisible
  }
  const [Cliente, setCliente] = useState([])

  const [pedidos, setpedidos] = useState([])

  const [Produto, setProduto] = useState([])
  
  const [addProdutos, setAddProdutos] = useState(1); // Estado do formulário atual


  const [inputText, setInputText] = useState(''); // Estado do texto de entrada atual

  const [matchingProdutos, setMatchingProdutos] = useState([]); // Estado dos produtos correspondentes

  const [servico, setServico] = useState(InitialservicoData);

  const [isVisible, setIsVisible] = useState(false)

  const [isVisibleCadastro, setIsVisibleCadastro] = useState(true)

  const [selectConsulta, setSelecConsulta] = useState(0)

  const [showCard, setShowCard] = useState(false)

  const [infoServico, setInfoServico] = useState([])

  const [infoProduto, setInfoProduto] = useState([])

  const [inputValue, setInputValue] = useState('');

  const [infoCliente, setInfoCliente] = useState([])

  const [ProdutoData, setProdutoData] = useState(
    initialProdutoData
  );
  
  const [Pedido, setPedido] = useState(initialPedidoData)

  const handleCreateProduto = async () => {
    setProdutoData(initialProdutoData);
  };

  const adicionarProduto = () => {
    setAddProdutos(addProdutos + 1);
  }

  const changeToServico = () => {
    setSelecConsulta(0)
  }

  const changeToProduto = () => {
    setSelecConsulta(1)
  }

  const changeToCliente = () => {
    setSelecConsulta(2)
  }
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  
  const toggleToFalse = () => {
    
    setIsVisibleCadastro(false); //
  }
  
  const toggleToTrue = () => {
    setIsVisibleCadastro(true)
  }

  const handleClick = () => {
    // loadServico(),
    toggleVisibility()
    }

  // const handleChange = (e) => { // Manipulador de alteração de formulário

  //     const { name, value } = e.target; // Extraia o nome e o valor do alvo
  //         setFormData((prevData) => ({ // Atualize o estado com o novo valor
  //           ...prevData, // Mantenha os valores anteriores
  //           [name]: value, // Atualize o valor do campo de entrada
  //         }))
  //        if (name === 'mercadoria') {
  //          setInputText(value);
  //        }
  //   };

  const visibilityCard = () =>{
      setShowCard(true)
      
  }
  const loadServico = async () => {

    const servico = await read('servico');
    setServico(servico)
  };

  const loadPedidos = async () => {

    const pedidos = await read('Pedidos');
    setpedidos(pedidos)
  };

  const loadProduto = async () => {

    const Produto = await read('Produto');
    setProduto(Produto)
    
  };
  const loadCliente = async () => {

    const Cliente = await read('Cliente');
    setCliente(Cliente)
    
  };
  const createServico = async (servico) => {
    const id = await getLastCodFrom('servico');

    const newServico = await create('servico', { ...servico, Código: id + 1});

    setServico(newServico);
    console.log(newServico)
  };

  
  const createPedido = async (Pedido) => {
    const newPedido = await create('Pedidos', Pedido);
    setPedido(newPedido);
    
  };


  const createProduto = async (Produto) => {
    const id = await getLastCodFrom('Produto');
    
    const newProduto = await create('Produto', { ...Produto, Código: id + 1 });
    setProduto(newProduto);
  };

  const getNewId = async (resource) => {
    const table = String(resource);
    const lastCod = await getLastCodFrom(table);
    return lastCod + 1;
  }

  
  const removeServico = (id) => {
    const newServico = servico.filter(
      (servico) => servico.id !== id
    );

    setServico(newServico); 

    remove('servico', id);
  };

    const createPedido2 = async (pedido) => {
       try {
         const newPedido = await create('Pedidos', pedido);
         setPedidos((prevPedidos) => [...prevPedidos, newPedido]);
       } catch (error) {
         console.error('Erro ao criar pedido:', error);
       }
     };

     const removePedido = async (id) => {
      try {
        const NUM = Number(id);
        console.log(id);
        console.log(NUM);
        if (!Number.isInteger(NUM)) {
          throw new Error('ID do pedido não é um número inteiro válido.');
        }
    
        // Remove o pedido do Supabase usando o ID
        await remove('Pedidos', NUM);
    
        // Atualiza o estado para refletir a remoção localmente
        setPedido((prevPedidos) => {
          // Ensure prevPedidos is an array before using filter
          const pedidosArray = Array.isArray(prevPedidos) ? prevPedidos : [];
          return pedidosArray.filter((pedido) => pedido.id !== NUM);
        });
      } catch (error) {
        console.error('Erro ao excluir pedido:', error);
      };
    };


  return (
    <ServicoContext.Provider
      value={{
        
        servico,
        setServico,
        isVisible,
        setIsVisible,
        isVisibleCadastro,
        setIsVisibleCadastro,
        toggleVisibility,
        toggleToFalse,
        toggleToTrue,
        loadServico,
        createServico,
        removeServico,
        handleClick,
        isVisibleCliente,
        toggleVisibilityCliente,
        // formData,
        // setFormData,
        inputText,
        setInputText,
        matchingProdutos,
        setMatchingProdutos,
        selectConsulta,
        changeToServico,
        changeToProduto,
        changeToCliente,
        addProdutos,
        adicionarProduto,
        setAddProdutos,
        removePedido,
        createPedido,
        // handleChange,
        loadPedidos,
        pedidos,
        showCard,
        infoServico,
        visibilityCard,
        setInfoServico,
        infoProduto, 
        setInfoProduto,
        loadProduto,
        Produto,
        Cliente, 
        setCliente,
        loadCliente,
        inputValue,
        setInputValue,
        infoCliente,
        setInfoCliente,
        ProdutoData, 
        setProdutoData,
        handleCreateProduto,
        createProduto,
        Pedido, 
        setPedido,
        initialPedidoData,
        createPedido2,
      }}
    >
      {children}
    </ServicoContext.Provider>
  );
}

export function useServico() {
  return useContext(ServicoContext);
};