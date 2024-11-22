import { useServico } from "../app/contexts/teste";

export default function CadProdutoForm(){
    const {
      ProdutoData, 
      setProdutoData,
      handleCreateProduto,
      createProduto
    } = useServico()

    const handleChange = (event) => {
      let { name, value } = event.target;
      
      setProdutoData({ ...ProdutoData, [name]: value });
    };
  
    const handleFormSubmit = async (event) => {
      event.preventDefault(); 
      await createProduto(ProdutoData); 
      alert("Produto cadastrado com sucesso!")                                  
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
              onChange={handleChange}
              value={ProdutoData.Nome}
              type="text"
              name="Nome"
              id="nomeProduto"
              placeholder=""
              autoComplete="off"
              className="p-[10px] rounded-lg bg-white"
            />
          </div>
          <div
            id="fabricante"
            className="m-1 flex flex-col mr-[15px] mb-[15px]"
          >
            <label className="text-xl text-white" htmlFor="fabricante">
              Fabricante:
            </label>
            <input
              onChange={handleChange}
              value={ProdutoData.Fabricante}
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
              onChange={handleChange}
              value={ProdutoData.Fornecedor}
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
              onChange={handleChange}
              value={ProdutoData.ValorCusto}
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
              onChange={handleChange}
              value={ProdutoData.PorcentagemLucro}
              type="text"
              name="PorcentagemLucro"
              id="porcentagem_lucroProduto"
              placeholder=""
              autoComplete="off"
              className="p-[10px] rounded-lg bg-white"
            />
          </div>
          <div id="IdProduto" className="m-1 flex flex-col mr-[15px] mb-[15px]">
            <label className="text-xl text-white" htmlFor="IdProduto">
              Código do Produto:
            </label>
            <input
              type="text"
              readOnly="readonly"
              defaultValue="(AutoNumeração)"
              id="IdProduto"
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
            onChange={handleChange}
            value={ProdutoData.Descrição}
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