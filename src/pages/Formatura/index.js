import { useContext } from "react";
import { ListProducts } from "../../components/ListProducts";
import { FormaturaContext } from "../../Providers/Formatura";

export const Formatura = () => {
  const { formaturaList } = useContext(FormaturaContext);

  return (
    <div>
      <ListProducts list={formaturaList} page={"formatura"} />
    </div>
  );
};
