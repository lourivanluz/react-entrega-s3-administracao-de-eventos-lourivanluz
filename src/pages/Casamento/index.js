import { useContext } from "react";
import { ListProducts } from "../../components/ListProducts";
import { CasamentoContext } from "../../Providers/Casamento";

export const Casamento = () => {
  const { casamentoList } = useContext(CasamentoContext);

  return (
    <div>
      <ListProducts list={casamentoList} page={"casamento"} />
    </div>
  );
};
