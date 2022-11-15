import DetailsPay from "assets/images/detailsPay.svg";
import Button from "components/globals/Button/Button";
import SearchInput from "components/globals/SearchInput/SearchInput";
import useGlobals from "contexts/globals/globals.hooks";
import useI18n from "i18n/i18n.hooks";
import FileDownload from "js-file-download";
import React from "react";
import { exportUsersExcel } from "services/administrator/administrator.service";
import { exportUsersPdf } from "services/administrator/administrator.service";
import { useFetchAdministratorUsers } from "services/administrator/administrator.service.hooks";

import PaymentTable from "../PaymentTable/PaymentTable";
import { columns } from "./PaymentListView.helpers";
import Styles from "./PaymentListView.styles";
import { PaymentListViewProps as Props } from "./PaymentListView.types";

const PaymentListView: React.FC<Props> = props => {
  const { data, isLoading } = useFetchAdministratorUsers(1, 50);
  const { data: usersList } = data ?? {};

  const t = useI18n().pages.UserPayPanel;

  const { setIsLoading } = useGlobals();
  setIsLoading(isLoading);

  const handlePDF = async () => {
    try {
      const response = await exportUsersPdf();
      FileDownload(response, "report.pdf");
    } catch (error) {
      console.log("Error at trying to print pdf");
    }
  };

  const handleExcel = async () => {
    try {
      const response = await exportUsersExcel();
      FileDownload(response, "report.csv");
    } catch (error) {
      console.log("Error at trying to print excel");
    }
  };

  const renderActions = () => (
    <div className="PaymentListView__container--actions PaymentListView__container--separate">
      <div className="PaymentListView__container--button">
        <Button
          variant="contained"
          className="PaymentListView__component--button"
          onClick={handlePDF}
        >
          {t.buttonPdf}
        </Button>
        <Button
          variant="contained"
          className="PaymentListView__component--button"
          onClick={handleExcel}
        >
          {t.buttonExcel}
        </Button>
        <Button
          variant="contained"
          className="PaymentListView__component--button"
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
      <h2 className="PaymentListView__text--subtitle PaymentListView__container--separate">
        {t.titleDetails}
      </h2>

      <div className="PaymentListView__component--details">
        <div className="PaymentListView__component--details-content">
          <img
            src={DetailsPay}
            alt="logoKonecta"
            className="PaymentListView__container--image"
          />
          <p className="PaymentListView__text--paragraph">
            {t.paragraphDetails}
          </p>
        </div>
      </div>
    </>
  );

  if (!usersList) return null;

  const renderTable = () => <PaymentTable data={usersList} columns={columns} />;

  return (
    <Styles className={`PaymentListView `}>
      <div className="PaymentListView__container">
        <div className="PaymentListView__container--separate">
          <h1 className="PaymentListView__text--title">{t.title}</h1>
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
      </div>
    </Styles>
  );
};

PaymentListView.defaultProps = {};

export default PaymentListView;
