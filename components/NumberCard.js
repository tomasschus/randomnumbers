import React, { useEffect, useState } from 'react';
import { useBlackMode } from '../context/BlackModeContext';

const NumberCards = ({ number }) => {
    const { blackMode } = useBlackMode()
    const [cards, setCards] = useState([]);

    useEffect(() => {
        loadCards();
    }, []);

    function getRandomColor() {
        var coloresBrillantes = [
            "rgb(255, 0, 0)",       // Rojo
            "rgb(0, 255, 0)",       // Verde
            "rgb(0, 0, 255)",       // Azul
            "rgb(255, 255, 0)",     // Amarillo
            "rgb(255, 0, 255)",     // Magenta
            "rgb(0, 255, 255)",     // Cian
            "rgb(255, 165, 0)",     // Naranja
            "rgb(128, 0, 128)",     // Púrpura
            "rgb(255, 192, 203)",   // Rosa claro
            "rgb(0, 128, 128)",     // Verde azulado
            "rgb(255, 140, 0)",     // Melocotón
            "rgb(70, 130, 180)",    // Azul acero
            "rgb(255, 69, 0)",      // Rojo tomate
            "rgb(255, 215, 0)",     // Amarillo brillante
            "rgb(0, 255, 0)",       // Verde brillante
            "rgb(0, 255, 255)",     // Cian brillante
            "rgb(255, 20, 147)",     // Rosa brillante
            "rgb(255, 165, 0)",     // Naranja brillante
            "rgb(70, 130, 180)",     // Azul acero brillante
            "rgb(255, 69, 0)"       // Rojo tomate brillante
        ];

        var indice = Math.floor(Math.random() * coloresBrillantes.length);

        return coloresBrillantes[indice];
    }

    function loadCards() {
        const newCards = Array.from({ length: number }, (_, i) => {
            const randomNumber = i === 0 ? Math.floor(Math.random() * 9) + 1 : Math.floor(Math.random() * 10);
            const color = getRandomColor();
            return { number: randomNumber.toString(), color };
        });
        setCards([]);
        setTimeout(() => {
            setCards(newCards);
        }, 200);
    }

    return (
        <div className="content-container">
            <div className="cards-container">
                {cards?.map((card, i) => (
                    <div
                        key={i}
                        className="card"
                        style={{
                            animationDelay: `${0.2 * i}s`,
                            color: blackMode ? card.color : 'black',
                            borderColor: blackMode ? card.color : 'black',
                        }}
                    >
                        {card.number}
                    </div>
                ))}
            </div>
            <div className="reload-container">
                <button onClick={() => { setCards([]); loadCards(); }} className="reload-button">
                    Recargar
                </button>
            </div>
            <style jsx>{`
        .content-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .reload-button {
          padding: 40px; /* Aumenta el tamaño del botón */
          background-color: #4caf50;
          color: white;
          border: none;
          border-radius: 50%; /* Hace el botón completamente redondo */
          cursor: pointer;
          font-size: 20px; /* Aumenta el tamaño del texto del botón */
        }

        .cards-container {
          display: flex;
          margin-top: 50px;
          margin-bottom: 30px;
          width: 100%;
          justify-content: center;
        }

        .card {
          flex: 1;
          border: 2px solid white;
          border-radius: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 5px 5px;
          font-size: calc(5vw + 5vh); /* Ajusta el tamaño del texto según el tamaño de la tarjeta */
          font-weight: bold;
          opacity: 0;
          animation: fadeIn 0.5s ease-out forwards, slideIn 0.5s ease-out forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideIn {
          from {
            transform: translateY(-50px);
          }
          to {
            transform: translateY(0);
          }
        }

        @media only screen and (max-width: 600px) {
            .cards-container {
              flex-wrap: wrap;
            }
        }
      `}</style>
        </div>
    );
};

export default NumberCards;
