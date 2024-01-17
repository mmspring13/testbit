import ArrowIcon from './../../assets/icons/arrow.svg?react';
import styled from "styled-components";
import {Typography} from "../Typography";
import {SortableHeaderCellProps} from "./types.ts";

export const SortIcon = styled(ArrowIcon)`
  width: 1.35rem;
  height: .9rem;
  transition: .2s linear;
  transform: rotate(-90deg);
`;

export const Container = styled.div<{ $direction?: SortableHeaderCellProps['value'] }>`
  display: flex;
  cursor: pointer;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 1.4rem;
  ${(props) => `
    ${SortIcon} {
      color: ${props.theme.colors.grayScale.gray1};
      transform: rotate(${props.$direction === 'asc' ? '90' : '-90'}deg);}
  `}
  ${(props) => !!props.$direction && `
    ${SortIcon} {
      color: ${props.theme.colors.base.white};
     } 
  `}
`;

export const Text = styled(Typography)`
  color: ${(props) => props.theme.colors.grayScale.gray6};
`;
