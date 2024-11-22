import React, { useState } from 'react';
import { useServico } from '../app/contexts/teste';

export default function CPFRegexCliente({handleChange}) {
  const {
    inputValue,
  } = useServico()

  return (
    <div>
      <input 
        className="p-[15px] rounded-lg bg-white w-60"
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder=""
        name='CPF'
      />
    </div>
  );
}