import Button from "components/globals/Button/Button";
import SearchInput from "components/globals/SearchInput/SearchInput";
import SelectComponent from "components/globals/SelectComponent/SelectComponent";
import useI18n from "i18n/i18n.hooks";
import FileDownload from "js-file-download";
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
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
  const [searchParams] = useSearchParams();
  const status = searchParams.get("status") || undefined;
  const [statusQuery, setStatusQuery] = useState(status);
  const [query, setQuery] = useState("");
  const { data, isLoading } = useFetchAdministratorOperations(
    statusQuery,
    50,
    query
  );
  const [loading, setLoading] = useState(false);

  const { data: operationsList } = data ?? {};

  const [row, setRow] = useState<Operation>();

  const t = useI18n().pages.UserOperationPanel;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handlePDF = async () => {
    try {
      setLoading(true);
      const response = await exportOperationsPdf();
      FileDownload(response, "report.pdf");
      setLoading(false);
    } catch (error) {
      console.log("Error at trying to print pdf");
    }
  };

  const handleExcel = async () => {
    try {
      setLoading(true);
      const response = await exportOperationsExcel();
      FileDownload(response, "report.csv");
      setLoading(false);
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
          disabled={loading}
        >
          {t.buttonPdf}
        </Button>
        <Button
          variant="contained"
          className="AdminPaymentListView__component--button"
          onClick={handleExcel}
          disabled={loading}
        >
          {t.buttonExcel}
        </Button>
        <SelectComponent
          labels={["Pagado", "Pendiente", "Cancelado", "Incompleto"]}
          onChange={event => setStatusQuery(event.target.value)}
        />
      </div>

      <SearchInput onChange={handleChange} />
    </div>
  );

  const renderTable = () => (
    <PaymentTable
      data={operationsList ?? []}
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
