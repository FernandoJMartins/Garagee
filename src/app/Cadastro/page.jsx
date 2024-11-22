'use client';

import '../../components/Forms/Form.jsx';
import CadProdutoForm from '../../components/Cadastro/CadProdutoForm.jsx';
import Opcoes from '../../components/Opcoes/Opcoes.jsx';
import CadServico from '../../components/Cadastro/CadServico.jsx';
import {useServico} from '../contexts/teste';

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

