import PostAddIcon from "@mui/icons-material/PostAdd";
import Button from "components/globals/Button/Button";
import useI18n from "i18n/i18n.hooks";
import React, { useRef } from "react";
import { useImportUsersByExcel } from "services/administrator/administrator.service.hooks";
import Swal from "sweetalert2";

import Styles from "./ImportCsv.styles";
import { ImportCsvProps as Props } from "./ImportCsv.types";

const ImportCsv: React.FC<Props> = props => {
  const t = useI18n().signIn.Indicator;

  const file = useRef<any>();
  const { mutateAsync, reset, isLoading } = useImportUsersByExcel();

  const handleOnChange = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file.current.files[0]);
      await mutateAsync(formData);
      reset();
      Swal.fire(t.done, t.doneText, "success");
    } catch (error) {
      Swal.fire("Error", t.errorText, "error");
    }
  };
  return (
    <Styles className="ImportCsv">
      <input
        type="file"
        id="importExcel"
        hidden
        name="importExcel"
        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        onChange={handleOnChange}
        ref={file}
      />
      <div className="ImportCsv__section">
        <h2 className="ImportCsv__text">{t.uploadClients}</h2>
        <Button
          onClick={() => document.getElementById("importExcel")?.click()}
          variant="contained"
          className="ImportCsv__button"
          endIcon={<PostAddIcon color="secondary" />}
          disabled={isLoading}
        >
          <h3 className="ImportCsv__button-text">{t.import}</h3>
        </Button>
      </div>
      <div className="ImportCsv__section ImportCsv__section--right">
        <h2 className="ImportCsv__text">{t.uploadDescription}</h2>
        {/* TODO: Open new url */}
        <Button
          onClick={() => window.open("", "_blank")}
          variant="contained"
          className="ImportCsv__button"
          endIcon={<PostAddIcon color="secondary" />}
          disabled={isLoading}
        >
          <h3 className="ImportCsv__button-text">{t.downloadTemplate}</h3>
        </Button>
      </div>
    </Styles>
  );
};

ImportCsv.defaultProps = {};

export default ImportCsv;
