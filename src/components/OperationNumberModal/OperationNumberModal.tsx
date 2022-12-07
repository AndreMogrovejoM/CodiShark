import { Box, Modal } from "@mui/material";
import React from "react";

import Styles, { style } from "./OperationNumberModal.styles";
import { OperationNumberModalProps as Props } from "./OperationNumberModal.types";

const OperationNumberModal: React.FC<Props> = props => {
  const { open, setOpen } = props;

  const renderLeftSection = () => {
    return (
      <div className="OperationNumberModal__section">
        <h3>Su numero de oper acion es</h3>
        <h1>74324324234</h1>
        <p>Cuenta corriente soles</p>
        <h2>191 5435 5435 3455</h2>
        <p>Cuenta interbancaria soles</p>
        <h2>191 5435 5435 3455 5345</h2>
      </div>
    );
  };

  const renderRightSection = () => {
    return (
      <div className="OperationNumberModal__section">
        <h3>Monto a pagar</h3>
        <h1 className="OperationNumberModal__h1 OperationNumberModal__primary-color">{`s/. 4754.00`}</h1>
        <p className="OperationNumberModal__paragraph OperationNumberModal__red-color">
          Oferta disponible hasta el 09/08/2022
        </p>
      </div>
    );
  };

  return (
    <Modal
      open={open}
      onClose={() => setOpen(!open)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Styles className="OperationNumberModal">
          <div className="OperationNumberModal__container">
            <p className="OperationNumberModal__paragraph">
              Acerquese a la agencia mas cercana y realice el deposito indicando
              el numero de operacion, tambien puede realizar transferencias
              interbancarias desde la App de su preferencia.
            </p>
            <div className="OperationNumberModal__content">
              {renderLeftSection()}
              {renderRightSection()}
            </div>
          </div>
        </Styles>
      </Box>
    </Modal>
  );
};

OperationNumberModal.defaultProps = {};

export default OperationNumberModal;
