import {Typography} from "../Typography";
import styled from "styled-components";
import {AppTable} from "../AppTable";

export const Title = styled(Typography)`
  display: inline-block;
  margin-bottom: 2rem;
`;

export const STable = styled(AppTable)`
  .thead-tr {
    th {
      &:first-child {
        border-top-left-radius: .8rem;
        border-bottom-left-radius: 0;
      }
      &:last-child {
        border-top-right-radius: .8rem;
        border-bottom-right-radius: 0;
      }
    }
  }
`;

export const DateCellText = styled(Typography)`
  display: inline-flex;
  flex-direction: column;
`;
