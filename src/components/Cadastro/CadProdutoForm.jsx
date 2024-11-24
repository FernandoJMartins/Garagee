import { useServico } from "../../app/contexts/teste";
import { useEffect, useState } from "react";
import { getLastCodFrom } from "../../app/services/supabase";

export default function CadProdutoForm(){
    const {
      ProdutoData, 
      setProdutoData,
      createProduto,
      getNewId
    } = useServico()



    const [ID, setID] = useState(0);

    let cod = ID + 1;
  
    function getID() {
      getLastCodFrom("Produto").then((data) => {
        setID(data);
  
    })};
  
  
    useEffect(() => { 
      getID();
    }, []);
  

    const handleChange = (event) => {
      let { name, value } = event.target;
      setProdutoData({ ...ProdutoData, [name]: value });
    };
  
    const handleFormSubmit = async (event) => {
      event.preventDefault(); 
     
      let { name, value } = event.target;
      setProdutoData({ ...ProdutoData, [name]: value });  
      await createProduto(ProdutoData); 

      getID();
      alert("Produto cadastrado com sucesso!");
      setProdutoData({
        Nome: "",
        Fabricante: "",
        Fornecedor: "",
        ValorCusto: "",
        PorcentagemLucro: "",
        Descrição: "",
      });
                                    
    };
  return (<>
    <section>
  <div className="items-center pt-[30px]">
    <form onSubmit={(event) => handleFormSubmit(event)}
      className="flex justify-center flex-col bg-[#104f55] px-8 py-8 rounded-lg border-white border" id="borda1">
      {/* Conteúdo do retângulo */}
      <div className="">
        <div className="grid grid-cols-2">
          <div
            id="NomeProduto"
            className="m-1 flex flex-col mr-[15px] mb-[15px]"
          >
            <label className="text-xl text-white" htmlFor="nomeProduto">
              Nome do Produto:
            </label>
            <input
              value= {ProdutoData.Nome}
              onChange={handleChange}

              type="text"
              name="Nome"
              id="nomeProduto"
              placeholder=""
              autoComplete="off"
              className="p-[10px] rounded-lg bg-white"
            />
          </div>
          <div id="IdProduto" className="m-1 flex flex-col mr-[15px] mb-[15px]">
            <label className="text-xl text-white" htmlFor="IdProduto">
              Código do Produto:
            </label>
            <div className="flex justify-center center align-center mt-4 ml-auto">
            {cod}
              </div>
          </div>
          <div
            id="fabricante"
            className="m-1 flex flex-col mr-[15px] mb-[15px]"
          >
            <label className="text-xl text-white" htmlFor="fabricante">
              Fabricante:
            </label>
            <input
              value= {ProdutoData.Fabricante}
              onChange={handleChange}
              type="text"
              name="Fabricante"
              id="fabricante"
              placeholder=""
              autoComplete="off"
              className="p-[10px] rounded-lg bg-white"
            />
          </div>
          <div
            id="Fornecedor"
            className="m-1 flex flex-col mr-[15px] mb-[15px]"
          >
            <label htmlFor="Fornecedor" className="text-xl text-white">
              Fornecedor:
            </label>
            <input
              value= {ProdutoData.Fornecedor}
              onChange={handleChange}
              autoComplete="off"
              name="Fornecedor"
              id="Fornecedor"
              className="p-[10px] rounded-lg bg-white"
            >
            </input>
          </div>
          <div
            id="valorProduto"
            className="m-1 flex flex-col mr-[15px] mb-[15px]"
          >
            <label className="text-xl text-white" htmlFor="valorProduto">
              Valor de custo:
            </label>
            <input
              value= {ProdutoData.ValorCusto}
              onChange={handleChange}
              type="text"
              name="ValorCusto"
              id="valorProduto"
              placeholder=""
              autoComplete="off"
              className="p-[10px] rounded-lg bg-white"
            />
          </div>
          <div
            id="porcentagem_lucroProduto"
            className="m-1 flex flex-col mr-[15px] mb-[15px]"
          >
            <label
              className="text-xl text-white"
              htmlFor="porcentagem_lucroProduto"
            >
              Porcentagem de lucro:
            </label>
            <input
              value= {ProdutoData.PorcentagemLucro}
              onChange={handleChange}
              type="text"
              name="PorcentagemLucro"
              id="porcentagem_lucroProduto"
              placeholder=""
              autoComplete="off"
              className="p-[10px] rounded-lg bg-white"
            />
          </div>

        </div>
        <div
          id="DescricaoProduto"
          className="m-1 flex flex-col mr-[15px] mb-[15px]"
        >
          <label className="text-xl text-white" htmlFor="DescricaoProduto">
            Descrição do Produto:
          </label>
          <textarea
            value= {ProdutoData.Descrição}
            onChange={handleChange}
            type="text"
            name="Descrição"
            id="Descrição"
            placeholder=""
            autoComplete="off"
            className="p-[10px] rounded-lg bg-white "
            rows={3}

          />
        </div>
        <div className="flex justify-center pt-[25px]">
          <input
            type="submit"
            defaultValue="Salvar"
            name="btn"
            id="button"
            className="bg-white p-2 rounded-lg active:bg-[#00ff0059]"
          />
        </div>
      </div>
    </form>
  </div>
</section>
</>)}