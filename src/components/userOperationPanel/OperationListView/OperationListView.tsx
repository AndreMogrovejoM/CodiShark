import DetailsPay from "assets/images/detailsPay.svg";
import Button from "components/globals/Button/Button";
import SearchInput from "components/globals/SearchInput/SearchInput";
import PaymentTable from "components/userPanel/PaymentTable/PaymentTable";
import useGlobals from "contexts/globals/globals.hooks";
import useI18n from "i18n/i18n.hooks";
import FileDownload from "js-file-download";
import React, { useEffect } from "react";
import { exportOperationsExcel } from "services/administrator/administrator.service";
import { exportOperationsPdf } from "services/administrator/administrator.service";
import { useFetchAdministratorOperations } from "services/administrator/administrator.service.hooks";

import { columns } from "./OperationListView.helpers";
import Styles from "./OperationListView.styles";
import { OperationListViewProps as Props } from "./OperationListView.types";

const OperationListView: React.FC<Props> = props => {
  const { data, isLoading } = useFetchAdministratorOperations(undefined, 50);
  const { data: operationsList } = data ?? {};

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
    <div className="OperationListView__container--actions OperationListView__container--separate">
      <div className="OperationListView__container--button">
        <Button
          variant="contained"
          className="OperationListView__component--button"
          onClick={handlePDF}
        >
          {t.buttonPdf}
        </Button>
        <Button
          variant="contained"
          className="OperationListView__component--button"
          onClick={handleExcel}
        >
          {t.buttonExcel}
        </Button>
        <Button
          variant="contained"
          className="OperationListView__component--button"
          onClick={() => window.print()}
        >
          {t.buttonPrint}
        </Button>
      </div>

      <SearchInput />
    </div>
  );

  const renderDetails = () => (
    <>
      <h2 className="OperationListView__text--subtitle OperationListView__container--separate">
        {t.titleDetails}
      </h2>

      <div className="OperationListView__component--details">
        <div className="OperationListView__component--details-content">
          <img
            src={DetailsPay}
            alt={t.alt}
            className="OperationListView__container--image"
          />
          <p className="OperationListView__text--paragraph">
            {t.paragraphDetails}
          </p>
        </div>
      </div>
    </>
  );

  if (!operationsList) return null;

  const renderTable = () => (
    <PaymentTable data={operationsList} columns={columns} />
  );

  return (
    <Styles className={`OperationListView `}>
      <div className="OperationListView__container">
        <div className="OperationListView__container--separate">
          <h1 className="OperationListView__text--title">{t.title}</h1>
        </div>

        <div className="OperationListView__container--layout">
          <div className="OperationListView__container--table">
            {renderActions()}
            {renderTable()}
          </div>

          <div className="OperationListView__container--details">
            {renderDetails()}
          </div>
        </div>
      </div>
    </Styles>
  );
};

OperationListView.defaultProps = {};

export default OperationListView;
