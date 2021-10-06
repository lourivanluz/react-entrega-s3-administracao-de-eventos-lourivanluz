import { Footer } from "./components/Layout/Footer";
import { Header } from "./components/Layout/Header";
import { Main } from "./components/Layout/Main";
import { Providers } from "./Providers";
import { Routes } from "./routes";

function App() {
  return (
    <div>
      <Providers>
        <Header />
        <Main>
          <Routes />
        </Main>
        <Footer />
      </Providers>
    </div>
  );
}

export default App;
