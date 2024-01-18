import React, { createContext, useState, useContext } from 'react';

const BlackModeContext = createContext();

const BlackModeProvider = ({ children }) => {
  const initialState = (typeof window !== 'undefined' && window.localStorage.getItem('blackMode')) || false;
  const [blackMode, setBlackMode] = useState(initialState);

  function turnBlackMode() {
    const newState = !blackMode;
    window.localStorage.setItem('blackMode', newState)
    setBlackMode(newState)
  }

  return (
    <BlackModeContext.Provider value={{ blackMode, turnBlackMode }}>
      <div style={{ backgroundColor: blackMode ? 'black' : 'white' }}>
        <div style={{ display: 'flex', justifyContent: 'end', padding: '20px 30px 0 0' }}>
          <div style={{ cursor: 'pointer' }} onClick={turnBlackMode}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke={blackMode ? "white" : "currentColor"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          </div>
        </div>
        {children}
      </div>
    </BlackModeContext.Provider>
  );
};

const useBlackMode = () => {
  return useContext(BlackModeContext);
};

export { BlackModeProvider, useBlackMode };
