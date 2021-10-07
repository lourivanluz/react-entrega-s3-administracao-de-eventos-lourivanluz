import { createContext, useState } from "react";

export const ModalContext = createContext([]);

export const ModalProvider = ({ children }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [produto, setProduto] = useState("");
  console.log(showInfo);
  return (
    <ModalContext.Provider
      value={{ showInfo, setShowInfo, produto, setProduto }}
    >
      {children}
    </ModalContext.Provider>
  );
};
