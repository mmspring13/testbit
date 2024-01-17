import styled from "styled-components";
import {Typography} from "../Typography";
import ArrowIcon from './../../assets/icons/arrow.svg?react'
import PaginationButton from "./PaginationButton.tsx";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: .4rem;
`;

export const PageButton = styled(PaginationButton)<{ $active: boolean; $disabled: boolean }>`
  width: 3.7rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: .8rem;
  transition: .2s linear;
  color: ${(props) => props.theme.colors.base.white};
  ${(props) => props.$active && `
    pointer-events: none;
    background-color: ${props.theme.colors.accent.primary};
  `}
  &:active {
    opacity: .75;;
  }
`;

export const ArrowButton = styled.button<{ $disabled: boolean }>`
  width: 3.2rem;
  height: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .2s linear;
  &:focus {
    opacity: .75;
  }
  ${(props) => props.$disabled && `
    pointer-events: none;
  `}
`;

export const Dots = styled(Typography)``;

export const SArrowIcon = styled(ArrowIcon)`
  color: ${(props) => props.theme.colors.grayScale.gray1};
  &._reverse {
    transform: rotate(180deg);
  }
`;
