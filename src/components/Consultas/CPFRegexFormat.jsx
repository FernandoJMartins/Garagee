import React, { useState } from 'react';
import { useServico } from '../../app/contexts/teste';

export default function CPFRegexFormat() {
  const {
    inputValue,
    setInputValue
  } = useServico()

  const handleChange = (event) => {
    const { value } = event.target;
    const onlyNumbers = value.replace(/\D/g, '');

    let formattedValue = '';

    if (onlyNumbers.length <= 3) {
      formattedValue = onlyNumbers;
    } else if (onlyNumbers.length <= 6) {
      formattedValue = `${onlyNumbers.slice(0, 3)}.${onlyNumbers.slice(3)}`;
    } else if (onlyNumbers.length <= 9) {
      formattedValue = `${onlyNumbers.slice(0, 3)}.${onlyNumbers.slice(3, 6)}.${onlyNumbers.slice(6)}`;
    } else {
      formattedValue = `${onlyNumbers.slice(0, 3)}.${onlyNumbers.slice(3, 6)}.${onlyNumbers.slice(6, 9)}-${onlyNumbers.slice(9, 11)}`;
    }

    setInputValue(formattedValue);
  };

  return (
    <div>
      <input 
        className="p-[15px] rounded-lg bg-white"
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Digite algo"
      />
    </div>
  );
}
