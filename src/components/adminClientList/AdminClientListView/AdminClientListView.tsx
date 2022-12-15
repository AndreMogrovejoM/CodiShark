import Button from "components/globals/Button/Button";
import SearchInput from "components/globals/SearchInput/SearchInput";
import SkeletonComponent from "components/globals/SkeletonComponent/SkeletonComponent";
import useI18n from "i18n/i18n.hooks";
import FileDownload from "js-file-download";
import React, { useState } from "react";
import { exportUsersExcel } from "services/administrator/administrator.service";
import { exportUsersPdf } from "services/administrator/administrator.service";
import { useFetchAdministratorUsers } from "services/administrator/administrator.service.hooks";
import { User } from "types/user.types";

import PaymentTable from "../ClientTable/PaymentTable";
import UserDetails from "../UserDetails/UserDetails";
import { columns } from "./AdminClientListView.helpers";
import Styles from "./AdminClientListView.styles";
import { AdminClientListViewProps as Props } from "./AdminClientListView.types";

const AdminClientListView: React.FC<Props> = props => {
  const [query, setQuery] = useState("");
  const { data, isLoading } = useFetchAdministratorUsers(1, 50, query);
  const { data: usersList } = data ?? {};
  const t = useI18n().pages.UserPayPanel;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    console.log(event.target.value);
  };

  const [row, setRow] = useState<User>();

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
    <div className="AdminClientListView__container--actions AdminClientListView__container--separate">
      <div className="AdminClientListView__container--button">
        <Button
          variant="contained"
          className="AdminClientListView__component--button"
          onClick={handlePDF}
        >
          {t.buttonPdf}
        </Button>
        <Button
          variant="contained"
          className="AdminClientListView__component--button"
          onClick={handleExcel}
        >
          {t.buttonExcel}
        </Button>
      </div>

      <SearchInput onChange={handleChange} />
    </div>
  );

  const renderTable = () =>
    isLoading ? (
      <SkeletonComponent variant="rectangular" height={720} width="100%" />
    ) : (
      <PaymentTable
        data={usersList ?? []}
        columns={columns}
        onRowClicked={(row: User) => setRow(row)}
        progressPending={isLoading}
      />
    );

  return (
    <Styles className={`AdminClientListView`}>
      <div className="AdminClientListView__container">
        <div className="AdminClientListView__container--separate">
          <h1 className="AdminClientListView__text--title">{t.title}</h1>
        </div>

        <div className="AdminClientListView__container--layout">
          <div className="AdminClientListView__container--table">
            {renderActions()}
            {renderTable()}
          </div>

          <div className="AdminClientListView__container--details">
            <UserDetails data={row} />
          </div>
        </div>
      </div>
    </Styles>
  );
};

AdminClientListView.defaultProps = {};

export default AdminClientListView;
