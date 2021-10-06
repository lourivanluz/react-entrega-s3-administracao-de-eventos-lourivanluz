import { Button } from "@mui/material";
import { useContext, useState } from "react";
import { CasamentoContext } from "../../Providers/Casamento";
import { ConfraternizacaoContext } from "../../Providers/Confraternizacao";
import { FormaturaContext } from "../../Providers/Formatura";
import ButtonMenu from "../Button";
import { CardContainer, InfoCard, ModalInfo } from "./style";

export const CardProduct = ({ item, page }) => {
  const { rmvFormaturaList } = useContext(FormaturaContext);
  const { rmvconfraternizacaoList } = useContext(ConfraternizacaoContext);
  const { rmvCasamentoList } = useContext(CasamentoContext);

  const [showInfo, setShowInfo] = useState(false);

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
        <span onClick={() => setShowInfo(true)}>{`Ver mais...`}</span>
      </InfoCard>
      {page !== "home" ? (
        <Button variant="contained" onClick={handleClick}>
          Remover
        </Button>
      ) : (
        <ButtonMenu item={item}>Comprar</ButtonMenu>
      )}
      {showInfo && (
        <ModalInfo onClick={() => setShowInfo(false)}>
          <div className="infoModal">
            <figure>
              <img src={item.image_url} alt={`img ${item.name}`} />
            </figure>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{`Inicio de fabricação: ${item.first_brewed}`}</p>
            <p>{`${item.volume.value} LTs`}</p>
          </div>
        </ModalInfo>
      )}
    </CardContainer>
  );
};
