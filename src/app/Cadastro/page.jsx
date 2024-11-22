'use client';
import '../../components/Form.jsx';
import '../../components/Opcoes.jsx';
import '../../components/CadProdutoForm.jsx';
import Opcoes from '../../components/Opcoes.jsx';
import CadProdutoForm from '../../components/CadProdutoForm.jsx';
import {useServico} from '../contexts/teste';
import CadServico from "../../components/CadServico.jsx"

export default function Cadastro(){
  const {
    isVisibleCadastro,
  } = useServico();
  const titulo1 = "Cadastrar Serviço"
  const titulo2 = "Cadastrar Produto"
  return(
    <>
      <div className='flex items-center justify-center flex-col'>
          <Opcoes titulo1={titulo1} titulo2={titulo2}/>
          <div className="flex items-center justify-center">


            {isVisibleCadastro && <CadServico/>}
            {!isVisibleCadastro && <CadProdutoForm />}
        </div>
      </div>
    </>
  );
}

