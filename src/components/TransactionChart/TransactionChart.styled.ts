import styled from "styled-components";
import { bodyXsRegular, bodySMedium } from './../Typography/Typography.styled.ts';
import {Typography} from "../Typography";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  .recharts-surface {
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .recharts-cartesian-axis-tick-value {
    fill: ${props => props.theme.colors.grayScale.gray1};
    ${bodySMedium};
  }
  .app-chart-brush {
    .recharts-brush-slide {
      fill: ${(props) => props.theme.colors.accent.primary};
    }
    .recharts-brush-traveller {
      &:focus {
        rect {
          fill-opacity: 1;
        }
      }
    }
    > rect {
      stroke: none;
      fill: ${(props) => props.theme.colors.grayScale.gray3};
    }
    .recharts-brush-texts {
      ${bodyXsRegular}
    }
  }
`;

export const CustomTooltip = styled(Typography)`
  display: inline-flex;
  flex-direction: column;
  gap: .4rem;
  align-items: center;
  text-align: center;
  padding: .4rem;
  border-radius: .4rem;
  background-color: rgba(0,0,0,.65);
`;
