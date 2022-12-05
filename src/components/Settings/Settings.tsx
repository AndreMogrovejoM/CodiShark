import React from "react";
import QRCode from "react-qr-code";

import Styles from "./Settings.styles";
import { SettingsProps as Props } from "./Settings.types";

const Settings: React.FC<Props> = props => {
  return (
    <Styles className="Settings">
      <QRCode
        size={256}
        style={{ height: 256, maxWidth: 256, width: 256 }}
        value={"https://www.npmjs.com/package/react-qr-code"}
        viewBox={`0 0 256 256`}
      />
    </Styles>
  );
};

Settings.defaultProps = {};

export default Settings;
