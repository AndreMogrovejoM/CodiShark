import google2fa from "assets/images/google2fa.svg";
import Button from "components/globals/Button/Button";
import useAuth from "contexts/auth/auth.hooks";
import useGlobals from "contexts/globals/globals.hooks";
import useI18n from "i18n/i18n.hooks";
import React, { useCallback, useEffect, useState } from "react";
import { deactivate2fa } from "services/administrator/administrator.service";
import { activate2fa } from "services/administrator/administrator.service";
import { useGenerate2fa } from "services/administrator/administrator.service.hooks";
import Swal from "sweetalert2";
import useOnMount from "utils/useOnMount";

import Styles from "./Settings.styles";
import { SettingsProps as Props } from "./Settings.types";

const Settings: React.FC<Props> = props => {
  const { mutateAsync, reset, isLoading, isError } = useGenerate2fa();
  const [google2faUrl, setGoogle2faUrl] = useState("");
  const [secretCode, setSecretCode] = useState("");
  const { user } = useAuth();
  const { setIsLoading } = useGlobals();
  const t = useI18n().global.settings;
  const { google2fa_enable } = user ?? {};

  const generateCode = useCallback(async () => {
    try {
      await mutateAsync().then(response => {
        const { google2FaUrl, secretCode } = response ?? {};
        setGoogle2faUrl(google2FaUrl);
        setSecretCode(secretCode);
        reset();
      });
    } catch (error) {
      console.warn(error);
    }
  }, [mutateAsync, reset]);

  useOnMount(() => {
    setTimeout(() => {
      generateCode();
    }, 2000);
  });

  useEffect(() => {
    if (isError) {
      window.location.reload();
    }
  }, [isError]);

  const handleCancel = async () => {
    try {
      Swal.fire(t.success, t.cancelled, "success");
      await deactivate2fa().catch();
    } catch (error) {
      console.warn(error);
    }
  };

  const handleConfirm = async () => {
    try {
      Swal.fire(t.success, t.confirmed, "success");
      if (!google2fa_enable) await activate2fa().catch();
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    setIsLoading(isLoading);
  }, [isLoading, setIsLoading]);

  return (
    <Styles className="Settings">
      <h1>{t.title}</h1>
      <p>{t.description}</p>
      {google2fa_enable && (
        <>
          <h1 className="Settings__done">{t.done}</h1>
          <img
            src={google2fa}
            alt="google2fa"
            className="Settings__2faEnabled"
            width={520}
          />
        </>
      )}
      {!google2fa_enable && <h2>{secretCode}</h2>}
      {!google2fa_enable && google2faUrl && (
        <svg
          width="256"
          height="256"
          viewBox="0 0 256 256"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <g transform="scale(6.082)">
            <g transform="translate(0,0)">
              <path
                fillRule="evenodd"
                d={google2faUrl.split("d=")[1].split(`"`)[1]}
              />
            </g>
          </g>
        </svg>
      )}
      <div className="Settings__buttons">
        {google2fa_enable && (
          <Button variant="outlined" onClick={handleCancel} fullWidth>
            {t.cancel}
          </Button>
        )}
        {!google2fa_enable && (
          <Button variant="contained" onClick={handleConfirm} fullWidth>
            <p className="Settings__p">{t.confirm}</p>
          </Button>
        )}
      </div>
      <p className="Settings__note">{t.note}</p>
    </Styles>
  );
};

Settings.defaultProps = {};

export default Settings;
