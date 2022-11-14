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

  if (!operationsList) return null;

  return (
    <Styles className={`PaymentListView`}>
      {/* TODO: Primer componente */}
      <h1 className="PaymentListView__text--title">Listado de pagos</h1>
      <>
        <div className="PaymentListView__container--actions">
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
        <PaymentTable data={operationsList} />
      </>
      {/* TODO: Segundo componente */}
      <></>
    </Styles>
  );
};

PaymentListView.defaultProps = {};

export default PaymentListView;
