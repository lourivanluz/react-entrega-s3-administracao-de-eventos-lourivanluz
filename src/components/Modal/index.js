import { useContext } from "react";
import { ModalContext } from "../../Providers/Modal";
import { ModalInfo } from "./style";

export const Modal = () => {
  const { setShowInfo, produto } = useContext(ModalContext);
  return (
    <ModalInfo onClick={() => setShowInfo(false)}>
      <div className="infoModal">
        <figure>
          <img src={produto.image_url} alt={`img ${produto.name}`} />
        </figure>
        <h2>{produto.name}</h2>
        <p>{produto.description}</p>
        <p>{`Inicio de fabricação: ${produto.first_brewed}`}</p>
        <p>{`${produto.volume.value} LTs`}</p>
      </div>
    </ModalInfo>
  );
};
