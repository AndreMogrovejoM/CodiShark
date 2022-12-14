import styled from "styled-components";

import { AdministratorPanelStyledProps as Props } from "./AdministratorPanel.types";

const AdministratorPanelStyled = styled.div<Props>`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  min-height: 100vh;

  .BarChart__datePicker {
    border-radius: 0.4rem;
    font-size: 1.2rem;
    line-height: 2.4rem;
    padding: 0.4rem 1.2rem;
  }

  .AdministratorPanel {
    &__section1 {
      width: 68%;

      @media screen and (max-width: 1366px) {
        width: 88%;
        margin: 0 auto;
      }
    }

    &__section2 {
      margin-right: 2.6rem;
      margin-left: 2.6rem;
      width: 70;
      justify-content: center;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      @media screen and (max-width: 1366px) {
        width: 88%;
        align-items: flex-start;
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
