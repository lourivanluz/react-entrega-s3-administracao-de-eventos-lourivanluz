import { CasamentoProvider } from "./Casamento";
import { FormaturaProvider } from "./Formatura";
import { ProductsProvider } from "./Products";
import { ConfraternizacaoProvider } from "./Confraternizacao";
import { ModalProvider } from "./Modal";

export const Providers = ({ children }) => {
  return (
    <ModalProvider>
      <ProductsProvider>
        <FormaturaProvider>
          <ConfraternizacaoProvider>
            <CasamentoProvider>{children}</CasamentoProvider>
          </ConfraternizacaoProvider>
        </FormaturaProvider>
      </ProductsProvider>
    </ModalProvider>
  );
};
