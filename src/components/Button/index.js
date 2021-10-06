import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useContext } from "react";
import { useState } from "react";
import { CasamentoContext } from "../../Providers/Casamento";
import { ConfraternizacaoContext } from "../../Providers/Confraternizacao";
import { FormaturaContext } from "../../Providers/Formatura";

export default function ButtonMenu({ item }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { addFormaturaList } = useContext(FormaturaContext);
  const { addconfraternizacaoList } = useContext(ConfraternizacaoContext);
  const { addCasamentoList } = useContext(CasamentoContext);

  const handleAddItem = (target) => {
    if (target === "formatura") {
      addFormaturaList(item);
    }
    if (target === "casamento") {
      addCasamentoList(item);
    }
    if (target === "confraternizacao") {
      addconfraternizacaoList(item);
    }
  };

  return (
    <div>
      <Button
        id="basic-button"
        variant="contained"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Comprar
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            handleAddItem("formatura");
          }}
        >
          Formatura
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            handleAddItem("casamento");
          }}
        >
          Casamento
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            handleAddItem("confraternizacao");
          }}
        >
          Confraternizacao
        </MenuItem>
      </Menu>
    </div>
  );
}
