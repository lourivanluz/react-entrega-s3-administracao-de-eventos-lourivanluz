import { useContext } from "react";
import { ListProducts } from "../../components/ListProducts";
import { ProductsContext } from "../../Providers/Products";

export const Home = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div>
      <ListProducts list={products} page={"home"} />
    </div>
  );
};
