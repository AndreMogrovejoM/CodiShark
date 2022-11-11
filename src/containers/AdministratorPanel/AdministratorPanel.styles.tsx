import styled from "styled-components";

import { AdministratorPanelStyledProps as Props } from "./AdministratorPanel.types";

const AdministratorPanelStyled = styled.div<Props>`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;

  .AdministratorPanel {
    &__section1 {
      width: 64%;
    }
    &__section2 {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
  }
`;

export default AdministratorPanelStyled;
