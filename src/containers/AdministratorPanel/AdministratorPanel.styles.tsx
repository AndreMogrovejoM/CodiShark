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

      @media screen and (max-width: 1366px) {
        width: 88%;
        margin: 0 auto;
      }
    }

    &__section2 {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      @media screen and (max-width: 1366px) {
        width: 88%;
        align-items: center;
        justify-content: center;
        gap: 2%;
        flex-direction: row;
        margin: 3.2rem auto;
      }

      @media screen and (max-width: 1024px) {
        flex-direction: column;
      }
    }
  }
`;

export default AdministratorPanelStyled;
