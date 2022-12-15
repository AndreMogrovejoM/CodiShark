import Button from "components/globals/Button/Button";
import SearchInput from "components/globals/SearchInput/SearchInput";
import useGlobals from "contexts/globals/globals.hooks";
import useI18n from "i18n/i18n.hooks";
import FileDownload from "js-file-download";
import React, { useEffect, useState } from "react";
import { exportOperationsExcel } from "services/administrator/administrator.service";
import { exportOperationsPdf } from "services/administrator/administrator.service";
import { useFetchAdministratorOperations } from "services/administrator/administrator.service.hooks";
import { Operation } from "services/administrator/administrator.service.types";

import PaymentDetails from "../PaymentDetails/PaymentDetails";
import PaymentTable from "../PaymentTable/PaymentTable";
import { columns } from "./AdminPaymentListView.helpers";
import Styles from "./AdminPaymentListView.styles";
import { AdminPaymentListViewProps as Props } from "./AdminPaymentListView.types";

const AdminPaymentListView: React.FC<Props> = props => {
  const { data, isLoading } = useFetchAdministratorOperations(undefined, 50);
  const { data: operationsList } = data ?? {};

  const [row, setRow] = useState<Operation>();

  const t = useI18n().pages.UserOperationPanel;

  const { setIsLoading } = useGlobals();

  useEffect(() => {
    setIsLoading(isLoading);
  }, [isLoading, setIsLoading]);

  const handlePDF = async () => {
    try {
      const response = await exportOperationsPdf();
      FileDownload(response, "report.pdf");
    } catch (error) {
      console.log("Error at trying to print pdf");
    }
  };

  const handleExcel = async () => {
    try {
      const response = await exportOperationsExcel();
      FileDownload(response, "report.csv");
    } catch (error) {
      console.log("Error at trying to print excel");
    }
  };

  const renderActions = () => (
    <div className="AdminPaymentListView__container--actions AdminPaymentListView__container--separate">
      <div className="AdminPaymentListView__container--button">
        <Button
          variant="contained"
          className="AdminPaymentListView__component--button"
          onClick={handlePDF}
        >
          {t.buttonPdf}
        </Button>
        <Button
          variant="contained"
          className="AdminPaymentListView__component--button"
          onClick={handleExcel}
        >
          {t.buttonExcel}
        </Button>
      </div>

      <SearchInput />
    </div>
  );

  if (!operationsList) return null;

  const renderTable = () => (
    <PaymentTable
      data={operationsList}
      columns={columns}
      onRowClicked={(row: Operation) => setRow(row)}
      progressPending={isLoading}
    />
  );

  return (
    <Styles className={`AdminPaymentListView `}>
      <div className="AdminPaymentListView__container">
        <div className="AdminPaymentListView__container--separate">
          <h1 className="AdminPaymentListView__text--title">{t.title}</h1>
        </div>

        <div className="AdminPaymentListView__container--layout">
          <div className="AdminPaymentListView__container--table">
            {renderActions()}
            {renderTable()}
          </div>

          <div className="AdminPaymentListView__container--details">
            <PaymentDetails data={row} />
          </div>
        </div>
      </div>
    </Styles>
  );
};

AdminPaymentListView.defaultProps = {};

export default AdminPaymentListView;
