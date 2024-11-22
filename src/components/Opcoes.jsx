import { useServico } from "../app/contexts/teste"

export default function Opcoes({ titulo1, titulo2}){
    const {
      toggleToTrue,
      toggleToFalse
    } = useServico();
    
    return (<>
    <div className=" flex items-center justify-center mt-4 bg-[#104f55] rounded-lg w-[450px]    border-white border" id="borda1">
          <div className="m-4 flex cursor-pointer items-center">
            
            <p className="m-2 rounded-full text-white text-xl hover:text-[#01200f]" onClick={toggleToTrue}>{titulo1}</p>
        
          </div>

          <div className="m-4 flex text-white items-center cursor-pointer hover:text-[#01200f]"> 

            <p className="m-2 rounded-full text-xl" onClick={toggleToFalse}>{titulo2}</p>
            
          </div>
          
    </div>

    </>)
}