import { useContext } from "react";
import { CasamentoContext } from "../../Providers/Casamento";
import { ConfraternizacaoContext } from "../../Providers/Confraternizacao";
import { FormaturaContext } from "../../Providers/Formatura";
import { ModalContext } from "../../Providers/Modal";
import ButtonMenu from "../Button";
import { ButtonStyled } from "../Button/style";
import { CardContainer, InfoCard } from "./style";

export const CardProduct = ({ item, page }) => {
  const { rmvFormaturaList } = useContext(FormaturaContext);
  const { rmvconfraternizacaoList } = useContext(ConfraternizacaoContext);
  const { rmvCasamentoList } = useContext(CasamentoContext);

  const { setShowInfo, setProduto } = useContext(ModalContext);

  const handleClick = () => {
    if (page === "formatura") {
      rmvFormaturaList(item.id);
    }
    if (page === "confraternizacao") {
      rmvconfraternizacaoList(item.id);
    }
    if (page === "casamento") {
      rmvCasamentoList(item.id);
    }
  };

  let descriptionFormated = item.description;
  if (descriptionFormated.length >= 110) {
    descriptionFormated = descriptionFormated.substring(0, 107) + "...";
  }
  return (
    <CardContainer>
      <InfoCard>
        <figure>
          <img src={item.image_url} alt={`img ${item.name}`} />
        </figure>
        <h2>{item.name}</h2>
        {descriptionFormated.length === 110 ? (
          <p>{descriptionFormated}</p>
        ) : (
          <p>{item.description}</p>
        )}
        <span
          onClick={() => {
            setShowInfo(true);
            setProduto(item);
          }}
        >{`Ver mais...`}</span>
      </InfoCard>
      {page !== "home" ? (
        <ButtonStyled variant="contained" onClick={handleClick}>
          Remover
        </ButtonStyled>
      ) : (
        <ButtonMenu item={item}>Comprar</ButtonMenu>
      )}
    </CardContainer>
  );
};
