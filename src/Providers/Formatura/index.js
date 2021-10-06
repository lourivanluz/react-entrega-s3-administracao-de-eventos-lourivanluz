import { createContext, useState } from "react";

export const FormaturaContext = createContext();

export const FormaturaProvider = ({ children }) => {
  const [formaturaList, setFormaturaList] = useState([]);

  const addFormaturaList = (item) => {
    setFormaturaList([...formaturaList, item]);
  };

  const rmvFormaturaList = (id) => {
    setFormaturaList(formaturaList.filter((item) => item.id !== id));
  };

  return (
    <FormaturaContext.Provider
      value={{ addFormaturaList, rmvFormaturaList, formaturaList }}
    >
      {children}
    </FormaturaContext.Provider>
  );
};
