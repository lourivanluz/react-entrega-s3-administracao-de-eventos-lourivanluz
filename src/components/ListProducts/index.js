import { CardProduct } from "../CardProduct";
import { Ulstyled } from "./style";

export const ListProducts = ({ list, page }) => {
  return (
    <Ulstyled>
      {list.map((item, index) => (
        <li key={index}>
          <CardProduct item={item} page={page} />
        </li>
      ))}
    </Ulstyled>
  );
};
