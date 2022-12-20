import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Box, Modal } from "@mui/material";
import { IconButton } from "@mui/material";
import CONSTANTS from "config/constants";
import dayjs from "dayjs";
import useI18n from "i18n/i18n.hooks";
import React from "react";
import { numberWithCommas } from "utils/common.utils";

import Styles, { style } from "./OperationNumberModal.styles";
import { OperationNumberModalProps as Props } from "./OperationNumberModal.types";

const { CCI_ACCOUNT_NUMBER, ACCOUNT_NUMBER } = CONSTANTS;

const OperationNumberModal: React.FC<Props> = props => {
  const t = useI18n().signIn.OperationNumberModal;
  const { open, setOpen, operationNumber, userDebt } = props;
  const { amount_cancellation, limit_date } = userDebt ?? {};

  const renderLeftSection = () => {
    return (
      <div className="OperationNumberModal__section">
        <h3 className="OperationNumberModal__h3">{t.operation}</h3>
        <h1 className="OperationNumberModal__h1">{operationNumber ?? ""}</h1>
        <div
          className="OperationNumberModal__copy"
          onClick={() => {
            navigator.clipboard.writeText(
              `${t.operation}: \n` +
                (operationNumber ?? "") +
                `\n${t.current}:` +
                `\n${ACCOUNT_NUMBER}` +
                `\n${t.interbank}:` +
                `\n${CCI_ACCOUNT_NUMBER}`
            );
          }}
        >
          <ContentCopyIcon />
          {t.copy}
        </div>
        <p className="OperationNumberModal__p">{t.current}</p>
        <h2 className="OperationNumberModal__h2">{ACCOUNT_NUMBER}</h2>
        <p className="OperationNumberModal__p">{t.interbank}</p>
        <h2 className="OperationNumberModal__h2">{CCI_ACCOUNT_NUMBER}</h2>
      </div>
    );
  };

  const renderRightSection = () => {
    return (
      <div className="OperationNumberModal__section">
        <h3>{t.amount}</h3>
        <h1 className="OperationNumberModal__h1 OperationNumberModal__primary-color">
          {`S/. ${numberWithCommas(amount_cancellation ?? 0)}`}
        </h1>
        <p className="OperationNumberModal__paragraph OperationNumberModal__red-color">
          {`${t.offer}: ${dayjs(limit_date).format("DD/MM/YYYY")}`}
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
          <IconButton
            className="OperationNumberModal__closeIcon"
            onClick={() => setOpen(!open)}
          >
            <HighlightOffIcon
              className="OperationNumberModal__closeIcon--icon"
              fontSize="large"
              color="error"
            />
          </IconButton>

          <p className="OperationNumberModal__paragraph">{t.paragraph}</p>
          <div className="OperationNumberModal__content">
            {renderLeftSection()}
            {renderRightSection()}
          </div>
        </Styles>
      </Box>
    </Modal>
  );
};

OperationNumberModal.defaultProps = {};

export default OperationNumberModal;
