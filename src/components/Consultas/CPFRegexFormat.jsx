import { useServico } from '../../app/contexts/teste';

export default function CPFRegexFormat({ handleChange }) {
  const {
    inputValue,
  } = useServico()


  return (
    <div>
      <input 
        name='CPF'
        className="p-[15px] rounded-lg bg-white"
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder=""
      />
    </div>
  );
}
