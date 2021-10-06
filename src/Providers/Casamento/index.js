import { createContext, useState } from "react";

export const CasamentoContext = createContext();

export const CasamentoProvider = ({ children }) => {
  const [casamentoList, setCasamentoList] = useState([]);

  const addCasamentoList = (item) => {
    setCasamentoList([...casamentoList, item]);
  };

  const rmvCasamentoList = (id) => {
    setCasamentoList(casamentoList.filter((item) => item.id !== id));
  };

  return (
    <CasamentoContext.Provider
      value={{
        addCasamentoList,
        rmvCasamentoList,
        casamentoList,
      }}
    >
      {children}
    </CasamentoContext.Provider>
  );
};
