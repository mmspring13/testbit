import styled from "styled-components";
import {Typography} from "../Typography";
import {mobileQuery, tableQuery} from "../../common/theme.ts";

export const Container = styled.div``;

export const Title = styled(Typography)``;

export const ErrorBlock = styled(Typography)`
  color: ${(props) => props.theme.colors.other.critic};
  display: inline-block;
  padding: 1.4rem 0;
`;

export const ChartWrapper = styled.div`
  width: 45.8rem;
  overflow: hidden;
  aspect-ratio: 1.22;
  margin-top: 2rem;
  ${tableQuery(`
    margin-top: 1.8rem;
  `)}
  ${mobileQuery(`
    width: 100svw;
    margin-top: 1.4rem;
  `)}
`;

export const ChartLegend = styled.div`
  display: flex;
  align-items: center;
  gap: .8rem;
  margin-top: 1.2rem;
  justify-content: center;
`;

export const ChartLegendIcon = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  border-radius: .2rem;
  background-color: ${(props) => props.theme.colors.accent.primary};
`;

export const ChartLegendText = styled(Typography)`
  color: ${(props) => props.theme.colors.grayScale.gray1};
`;

export const TrxTableWrapper = styled.div`
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid ${(props) => props.theme.colors.grayScale.gray3};
`;
