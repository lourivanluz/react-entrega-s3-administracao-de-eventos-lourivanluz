import { CasamentoProvider } from "./Casamento";
import { FormaturaProvider } from "./Formatura";
import { ProductsProvider } from "./Products";
import { ConfraternizacaoProvider } from "./Confraternizacao";

export const Providers = ({ children }) => {
  return (
    <ProductsProvider>
      <FormaturaProvider>
        <ConfraternizacaoProvider>
          <CasamentoProvider>{children}</CasamentoProvider>
        </ConfraternizacaoProvider>
      </FormaturaProvider>
    </ProductsProvider>
  );
};
