import Button from "components/globals/Button/Button";
import SearchInput from "components/globals/SearchInput/SearchInput";
import useGlobals from "contexts/globals/globals.hooks";
import useI18n from "i18n/i18n.hooks";
import FileDownload from "js-file-download";
import React, { useEffect, useState } from "react";
import { exportUsersExcel } from "services/administrator/administrator.service";
import { exportUsersPdf } from "services/administrator/administrator.service";
import { useFetchAdministratorUsers } from "services/administrator/administrator.service.hooks";

import PaymentTable from "../PaymentTable/PaymentTable";
import UserDetails from "../UserDetails/UserDetails";
import { columns } from "./PaymentListView.helpers";
import Styles from "./PaymentListView.styles";
import { PaymentListViewProps as Props } from "./PaymentListView.types";

const PaymentListView: React.FC<Props> = props => {
  const { data, isLoading } = useFetchAdministratorUsers(1, 50);
  const { data: usersList } = data ?? {};

  // TODO: Pending
  const [idRow, setIdRow] = useState(0);

  const t = useI18n().pages.UserPayPanel;

  const { setIsLoading } = useGlobals();

  useEffect(() => {
    setIsLoading(isLoading);
  }, [isLoading, setIsLoading]);

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
      </div>

      <SearchInput />
    </div>
  );

  if (!usersList) return null;

  const renderTable = () => (
    <PaymentTable
      data={usersList}
      columns={columns}
      onRowClicked={row => setIdRow(row?.id)}
    />
  );

  return (
    <Styles className={`PaymentListView`}>
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
            {/* TODO: Pass data or id ?  */}
            <UserDetails id={idRow} />
          </div>
        </div>
      </div>
    </Styles>
  );
};

PaymentListView.defaultProps = {};

export default PaymentListView;
