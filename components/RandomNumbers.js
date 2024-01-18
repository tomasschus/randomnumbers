import { useRouter } from 'next/router';
import React, { useState } from 'react';
import validateNumber from '../utils/validateNumber';

const NumberInput = () => {
    const router = useRouter()
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        const value = e.target.value.replace(/[^0-9]/g, '');
        if (value === '' || validateNumber(value)) setInputValue(value);
    };

    const handleGoClick = () => {
        const numericValue = parseInt(inputValue, 10);
        if (validateNumber(numericValue)) router.push(`/random/${numericValue}`)        
    };

    return (
        <div className="number-input-container">
            <input
                type="text"
                placeholder="Ingresa un número"
                value={inputValue}
                onChange={handleInputChange}
                className="number-input"
            />
            <button onClick={handleGoClick} className="go-button">
                GO
            </button>

            <style jsx>{`
        .number-input-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh; /* Ajusta la altura según tus necesidades */
        }

        .number-input {
          padding: 20px; /* Aumenta el tamaño del input */
          margin-bottom: 40px; /* Aumenta el espacio entre el input y el botón */
          border: 1px solid #ccc;
          border-radius: 50px; /* Redondea las esquinas del input */
          font-size: 20px; /* Aumenta el tamaño del texto del input */
          text-align: center; /* Centra el texto dentro del input */
        }

        .go-button {
          padding: 40px; /* Aumenta el tamaño del botón */
          background-color: #4caf50;
          color: #fff;
          border: none;
          border-radius: 50%; /* Hace el botón completamente redondo */
          cursor: pointer;
          font-size: 20px; /* Aumenta el tamaño del texto del botón */
        }
      `}</style>
        </div>
    );
};

export default NumberInput;
