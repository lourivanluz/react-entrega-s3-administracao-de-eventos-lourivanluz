import { createContext, useState } from "react";

export const ConfraternizacaoContext = createContext();

export const ConfraternizacaoProvider = ({ children }) => {
  const [confraternizacaoList, setconfraternizacaoList] = useState([]);

  const addconfraternizacaoList = (item) => {
    setconfraternizacaoList([...confraternizacaoList, item]);
  };

  const rmvconfraternizacaoList = (id) => {
    setconfraternizacaoList(
      confraternizacaoList.filter((item) => item.id !== id)
    );
  };

  return (
    <ConfraternizacaoContext.Provider
      value={{
        addconfraternizacaoList,
        rmvconfraternizacaoList,
        confraternizacaoList,
      }}
    >
      {children}
    </ConfraternizacaoContext.Provider>
  );
};
