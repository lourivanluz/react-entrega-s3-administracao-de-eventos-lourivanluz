import { useContext } from "react";
import { ListProducts } from "../../components/ListProducts";
import { ConfraternizacaoContext } from "../../Providers/Confraternizacao";

export const Confraternizacao = () => {
  const { confraternizacaoList } = useContext(ConfraternizacaoContext);

  return (
    <div>
      <ListProducts list={confraternizacaoList} page={"confraternizacao"} />
    </div>
  );
};
