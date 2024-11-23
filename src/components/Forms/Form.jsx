import { useState, useEffect } from 'react';
import { pedidos as ped } from '../../data/seed';
import ClienteForm from './ClienteForm';
import { VisibilityCliente } from '../../app/contexts/teste';
import { getLastCod } from '../../app/services/supabase';


import supabase from '../../app/services/supabase';

export default function Form({ toggleVisibility, updateCard, loadPedidos, p }) {
  const initialState = { // Estado inicial do formulário
    cliente: '',
    cod: ID + 1,
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

    const {isVisibleCliente, toggleVisibilityCliente} = VisibilityCliente()
    

    const regexNumeros = /^[0-9]+$/
    const regexNome = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/
    const regexPlaca = /^[a-zA-Z0-9-]*$/
    const regexModelo = /^[a-zA-ZÀ-ÖØ-öø-ÿ0-9\s]*$/
  
    

    const [Pedido, setPedido] = useState(initialState); // Estado do formulário atual 
    const [inputText, setInputText] = useState(''); // Estado do texto de entrada atual
    const [matchingProdutos, setMatchingProdutos] = useState([]); // Estado dos produtos correspondentes
  
    useEffect(() => { // Atualize os produtos correspondentes sempre que o texto de entrada mudar
      const fetchMatchingProdutos = async () => {
        try {
        const { data, error } = await supabase
          .from('Produto')
          .select('Nome')
          .ilike('Nome', `${inputText}%`); // Busque por produtos que comecem com o texto de entrada
          console.log(data)
        if (error) {
          console.error('Erro ao buscar Produtos:', error.message);
          return;
        }

        setMatchingProdutos(data || []);
      } catch (error) {
        console.error('Erro na busca de produtos:', error.message);
      }
    };
          
    if (inputText.length > 0) {
      fetchMatchingProdutos();
    } else {
      setMatchingProdutos([]);
    }
  }, [inputText]);



  const [ID, setID] = useState(0);

  let cod = ID + 1;

  function getID() {
    getLastCod().then((data) => {
      console.log(data)
      setID(data);

  })};


  useEffect(() => { 
    getID();
  }, []);


  const [pedidos] = useState(ped); // Estado inicial dos pedidos




  useEffect(() => { // Atualize o pagamentoValor sempre que os valores mudarem
    updateValores();
    setCurrentDate(); // devia estar em outro useEFfect
  }, [Pedido.preco, Pedido.preco2, Pedido.qnt, Pedido.qnt2, Pedido.valorTotal1, Pedido.valorTotal2]);  // Dependências do efeito É POSSIVEL ADICIONAR + DE DUAS DEPENDECIAS????

  const updateValores = () => {
    // Cálculo do pagamentoValor

    const valorTotal1 = 
    parseFloat(Pedido.preco * Pedido.qnt || 0)

    const valorTotal2 =
    parseFloat(Pedido.preco2 * Pedido.qnt2 || 0)

    const pagamentoValor =
      parseFloat(Pedido.valorTotal1 || 0) + parseFloat(Pedido.valorTotal2 || 0);


    // Atualize o estado com os novos valores
    setPedido((prevData) => ({
      ...prevData,
      valorTotal1: valorTotal1.toFixed(2),
      valorTotal2: valorTotal2.toFixed(2),
      pagamentoValor: pagamentoValor.toFixed(2),
  }));
  };

  const setCurrentDate = () => {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
    
    
    setPedido((prevData) => ({
      ...prevData,
      data: formattedDate,
    }));
    return formattedDate
  };


  const handleSubmit = async (e) => { // Manipulador de envio do formulário
    e.preventDefault(); // Evite que o formulário seja enviado

    if ( await e.nativeEvent.submitter.id === 'save') {
    getID();
    const newPedido = {
      
      ...Pedido,
      data: setCurrentDate(),
      cod: ID + 1,
      nf: 1,
      preco: parseFloat(Pedido.preco || 0).toFixed(2), // Garanta que seja formatado como número de ponto flutuante com 2 casas decimais
      preco2: parseFloat(Pedido.preco2 || 0).toFixed(2), // Garanta que seja formatado como número de ponto flutuante com 2 casas decimais
      valorTotal1: parseFloat(Pedido.preco * Pedido.qnt || 0).toFixed(2), // Garanta que seja formatado como número de ponto flutuante com 2 casas decimais
      valorTotal2: parseFloat(Pedido.preco2 * Pedido.qnt2 || 0).toFixed(2), // Garanta que seja formatado como número de ponto flutuante com 2 casas decimais
      pagamentoValor: (parseFloat(Pedido.valorTotal1 || 0) + parseFloat(Pedido.valorTotal2 || 0)).toFixed(2), // Garanta que seja formatado como número de ponto flutuante com 2 casas decimais
    };    



    const { data, error } = await supabase.from('Pedidos').upsert([newPedido])


    if (error) {
      console.error('Erro ao enviar dados para o Supabase:', error.message);
    } else {
      console.log('Dados enviados com sucesso para o Supabase:', data);
    }


    
    pedidos.push(newPedido);
    console.log(newPedido) // Adicione o novo pedido ao array de pedidos

    setPedido({
      ...initialState,
      cod: ID + 1,
      nf: 1,
      data: setCurrentDate(),
      

    });
  };
    updateCard();
  };

    
    const handleChange = (e) => { // Manipulador de alteração de formulário
      const { name, value } = e.target; // Extraia o nome e o valor do alvo
      setPedido((prevData) => ({ // Atualize o estado com o novo valor
        ...prevData, // Mantenha os valores anteriores
        [name]: value, // Atualize o valor do campo de entrada
      }));


      if (name === 'mercadoria' || name === 'mercadoria2') {
        setInputText(value);
      }
      updateValores();
    };


    return (
      <>
      
      {isVisibleCliente && (
        <>
          {/* Overlay escuro */}
          <div className="overlay" onClick={toggleVisibilityCliente}></div>
          
          {/* Formulário destacado */}
          <div className="ml-28 my-8">
            <ClienteForm toggleVisibilityCliente={toggleVisibilityCliente}/>
          </div>
        </>
      )}
      
      <main className="flex h-screen z-10">
        
      <div className="x w-1/6"></div>
      <section className="w-4/5 flex justify-center items-center flex-col">
        

        <section className="justify-center align-center" id="formulario">
          <div className="justify-center items-center pt-[30px]">
            <form onSubmit={handleSubmit} className="flex justify-center flex-col bg-[#104f55] px-8 py-8 rounded-lg border-white border" id="borda1">


              <div className="grid grid-cols-10 gap-2">
                <div id="placa" className="m-1 flex flex-col ">
                  <label className="text-xl text-white" htmlFor='placa'>Placa:</label>
                  <input type="text" name="placa" id="placa" placeholder="" autoComplete="off" className="p-[10px] rounded-lg"
                    value={Pedido.placa}
                    onChange={handleChange}>  
                  </input>
                  {Pedido.placa !== '' && !regexPlaca.test(Pedido.placa) && (<p className='text-red-500'>Apenas letras números</p>)}
                </div>

                <div id="carro" className="m-1 flex flex-col">
                  <label className="text-xl text-white" htmlFor='modelo'>Modelo:</label>
                  <input type="text" name="modelo" id="carro" placeholder="" autoComplete="off" className="p-[10px] rounded-lg"
                    value={Pedido.modelo}
                    onChange={handleChange}>
                    </input>
                  {Pedido.modelo !== '' && !regexModelo.test(Pedido.modelo) && (<p className='text-red-500'>Apenas letras números</p>)}
                </div>


                <div id="KM" className="m-1 flex flex-col">
                  <label className="text-xl text-white" htmlFor='km'>KM:</label>
                  <input type="text" name="km" id="km" placeholder="" autoComplete="off" className="p-[10px] rounded-lg"
                    value={Pedido.km}
                    onChange={handleChange}>
                    </input>
                    {Pedido.km !== '' && !regexNumeros.test(Pedido.km) && (<p className='text-red-500'>Apenas numero em KM</p>)}
                </div>

                <div id="cliente" className="m-1 col-span-2 flex flex-col">
                <label className="text-xl text-white" htmlFor='cliente'>Cliente:</label>
                  <div className='flex items-center'>

                    <input style={{ width: '160px' }} type="text" name="cliente" id="cliente" placeholder="" autoComplete="off" className="p-[10px] rounded-lg"
                      value={Pedido.cliente}
                      onChange={handleChange}> 
                    </input>
                    <button onClick={toggleVisibilityCliente} className="w-10 h-12 text-white rounded-lg border border-black bg-[#01301c] p-2 hover: border border-white">+</button>
                </div>
                {Pedido.cliente !== '' && !regexNome.test(Pedido.cliente) && (<p className='text-red-500'>Apenas letras</p>)}
                </div>


                <div id="vendedor" className="m-1 flex flex-col col-span-2">
                  <label className="text-xl text-white" htmlFor='vendendor'>Vendedor:</label>
                  <input type="text" name="vendedor" id="vendedor" placeholder="" autoComplete="off" className="p-[10px] rounded-lg"
                      value={Pedido.vendedor}
                      onChange={handleChange}>
                    </input>
                    {Pedido.vendedor !== '' && !regexNome.test(Pedido.vendedor) && (<p className='text-red-500'>Apenas letras</p>)}
                </div>

                <div id="nf" className="m-1 flex flex-col">
                  <label className="text-xl text-white">NF:</label>
                </div>

                <div id="data" className="m-1 flex flex-col">
                  <label className="text-xl text-white">Data: </label>
                  <h1 className="text-white pt-4">{Pedido.data}</h1>  
                </div>
                <div id="cod" className="m-1 flex flex-col">
                  <label className="text-xl text-white">codigo: </label>
                  <h1 className="text-white pt-4">{cod}</h1>  
            
                </div>
                <div id="obs" className="m-1 flex flex-col col-span-10">
                  <label className="text-xl text-white">Obs:</label>
                  <input type="text" name="obs" id="obs" placeholder="" autoComplete="off" className="p-[10px] rounded-lg"
                    value={Pedido.obs}
                    onChange={handleChange}>
                    </input>
                </div>

                <div id="mercadoria" className="m-1 flex flex-col col-span-6">
                  <label className="text-xl text-white">Mercadoria:</label>
                  <input type="text" name="mercadoria" id="mercadoria" placeholder="" autoComplete="off" className="p-[10px] my-2 rounded-lg"
                    value={Pedido.mercadoria}
                    onChange={handleChange} />
                </div>

                <div id="qnt" className="m-1 flex flex-col col-span-1">
                  <label className="text-xl text-white">qnt:</label>
                  <input type="text" name="qnt" id="qnt" placeholder="" autoComplete="off" className="p-[10px] my-2 rounded-lg"
                    value={Pedido.qnt}
                    onChange={handleChange}>
                  </input>

                </div>

                <div id="preco" className="m-1 flex flex-col col-span-1">
                  <label className="text-xl text-white">preco:</label>
                  <input type="text" name="preco" id="preco" placeholder="" autoComplete="off" className="p-[10px] my-2 rounded-lg"
                    value={Pedido.preco}
                    onChange={handleChange}>
                    </input>
                </div>

                <div id="valorTotal1" className="m-1 flex flex-col col-span-1">
                  <label className="text-xl text-white">Total:</label>
                  <input type="text" name="valorTotal1" id="valorTotal1" placeholder="" autoComplete="off" className="p-[10px] my-2 rounded-lg"
                    value={Pedido.valorTotal1}
                    onChange={handleChange}>
                    </input>
                </div>



                <div id="mecanico" className="m-1 flex flex-col col-span-1">
                  <label className="text-xl text-white">mecanico:</label>
                  <input type="text" name="mecanico" id="mecanico" placeholder="" autoComplete="off" className="p-[10px] my-2 rounded-lg"
                    value={Pedido.mecanico}
                    onChange={handleChange}>
                    </input>
                </div>



                <div id="mercadoria2" className="mx-1 flex flex-col col-span-6">
                  <input type="text" name="mercadoria2" id="mercadoria2" placeholder="" autoComplete="off" className="p-[10px] my-2 rounded-lg"
                    value={Pedido.mercadoria2}
                    onChange={handleChange} />
                </div>



                <div id="qnt2" className="mx-1 flex flex-col col-span-1">
                <input type="text" name="qnt2" id="qnt2" placeholder="" autoComplete="off" className="p-[10px] my-2 rounded-lg"
                    value={Pedido.qnt2}
                    onChange={handleChange}>
                  </input>
                </div>


                <div id="preco2" className="mx-1 flex flex-col col-span-1">
                <input type="text" name="preco2" id="preco2" placeholder="" autoComplete="off" className="p-[10px] my-2 rounded-lg"
                    value={Pedido.preco2}
                    onChange={handleChange}>
                </input>
                </div>

                <div id="valorTotal2" className="mx-1 flex flex-col col-span-1">
                  <input type="text" name="valorTotal2" id="valorTotal2" placeholder="" autoComplete="off" className="p-[10px] my-2 rounded-lg"
                    value={Pedido.valorTotal2}
                    onChange={handleChange}>
                    </input>
                </div>


                <div id="mecanico2" className="mx-1 flex flex-col col-span-1">
                  <input type="text" name="mecanico2" id="mecanico2" placeholder="" autoComplete="off" className="p-[10px] my-2 rounded-lg"
                    value={Pedido.mecanico2}
                    onChange={handleChange}>
                    </input>
                </div>




                <div className="col-span-7"></div>

                <div id="desconto" className="mx-1 flex flex-col col-span-1">
                  <label className="text-xl text-white">desconto:</label>
                  <input type="text" name="desconto" id="desconto" placeholder="" autoComplete="off" className="p-[10px] my-2 rounded-lg"
                    value={Pedido.desconto}
                    onChange={handleChange}>
                    </input>
                </div>

                <div id="pagamentoValor" className="mx-1 flex flex-col col-span-2">
                  <label className="text-xl text-white">Preco:</label>
                    <h1 className="text-white p-[10px] my-2 rounded-lg">{Pedido.pagamentoValor}</h1>  
                </div>


                <div id="metodoPagamento" className="m-1 flex flex-col col-span-1">
                  <label className="text-xl text-white">Metodo:</label>
                  <input type="text" name="metodoPagamento" id="metodoPagamento" placeholder="" autoComplete="off" className="p-[10px] my-2 rounded-lg"
                    value={Pedido.metodoPagamento}
                    onChange={handleChange}>
                    </input>
                </div>

                <div id="bandeira" className="m-1 flex flex-col col-span-1">
                  <label className="text-xl text-white">bandeira:</label>
                  <input type="text" name="bandeira" id="bandeira" placeholder="" autoComplete="off" className="p-[10px] my-2 rounded-lg"
                    value={Pedido.bandeira}
                    onChange={handleChange}>
                    </input>
                </div>

                <div id="parcelas" className="m-1 flex flex-col col-span-1">
                  <label className="text-xl text-white">Parcelas:</label>
                  <input type="text" name="parcelas" id="parcelas" placeholder="" autoComplete="off" className="p-[10px] my-2 rounded-lg"
                    value={Pedido.parcelas}
                    onChange={handleChange}>
                    </input>
                </div>

                <div id="pagamentoValor" className="m-1 flex flex-col col-span-1">
                  <label className="text-xl text-white">Preco:</label>
                  <h1 className="text-white p-[10px] my-2 rounded-lg">{Pedido.pagamentoValor}</h1>  
                </div>
              </div>

              <div className="flex justify-center pt-[25px]">
            
                <button id="save" type='submit' className="text-white rounded border mr-2 border-black bg-[#01301c] p-2 hover: border-white">Salvar</button>
                <button onClick={() => toggleVisibility(false)} className="text-white rounded border border-black bg-[#01301c] p-2 hover: border-white">Fechar</button> 
              </div>
            </form>
        </div>
      </section>
      </section>
      </main>
      </>
  );
}