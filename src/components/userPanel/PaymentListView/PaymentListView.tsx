import DetailsPay from "assets/images/detailsPay.svg";
import Button from "components/globals/Button/Button";
import SearchInput from "components/globals/SearchInput/SearchInput";
import React from "react";
import { useFetchAdministratorOperations } from "services/administrator/administrator.service.hooks";

import PaymentTable from "../PaymentTable/PaymentTable";
import Styles from "./PaymentListView.styles";
import { PaymentListViewProps as Props } from "./PaymentListView.types";

const PaymentListView: React.FC<Props> = props => {
  const { data } = useFetchAdministratorOperations(undefined, 50);
  const { data: operationsList } = data ?? {};

  console.log(operationsList);

  const renderActions = () => (
    <div className="PaymentListView__container--actions PaymentListView__container--separate">
      <div className="PaymentListView__container--button">
        <Button
          variant="contained"
          className="PaymentListView__component--button"
        >
          PDF
        </Button>
        <Button
          variant="contained"
          className="PaymentListView__component--button"
        >
          Excel
        </Button>
        <Button
          variant="contained"
          className="PaymentListView__component--button"
        >
          Imprimir
        </Button>
      </div>

      <SearchInput />
    </div>
  );

  const renderDetails = () => (
    <>
      <h2 className="PaymentListView__text--subtitle PaymentListView__container--separate">
        Detalles del pago
      </h2>

      <div className="PaymentListView__component--details">
        <div className="PaymentListView__component--details-content">
          <img
            src={DetailsPay}
            alt="logoKonecta"
            className="PaymentListView__container--image"
          />
          <p className="PaymentListView__text--paragraph">
            Seleccione un pago para ver los detalles
          </p>
        </div>
      </div>
    </>
  );

  if (!operationsList) return null;

  const renderTable = () => <PaymentTable data={operationsList} />;

  return (
    <Styles className={`PaymentListView`}>
      <div className="PaymentListView__container--separate">
        <h1 className="PaymentListView__text--title">Listado de pagos</h1>
      </div>

      <div className="PaymentListView__container--layout">
        <div className="PaymentListView__container--table">
          {renderActions()}
          {renderTable()}
        </div>

        <div className="PaymentListView__container--details">
          {renderDetails()}
        </div>
      </div>
    </Styles>
  );
};

PaymentListView.defaultProps = {};

export default PaymentListView;
