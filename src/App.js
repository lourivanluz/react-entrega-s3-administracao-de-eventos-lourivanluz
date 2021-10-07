import { useContext } from "react";
import { Footer } from "./components/Layout/Footer";
import { Header } from "./components/Layout/Header";
import { Main } from "./components/Layout/Main";
import { Modal } from "./components/Modal";

import { ModalContext } from "./Providers/Modal";

import { Routes } from "./routes";

function App() {
  const { showInfo } = useContext(ModalContext);

  return (
    <div>
      <Header />
      {showInfo && <Modal />}
      <Main>
        <Routes />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
