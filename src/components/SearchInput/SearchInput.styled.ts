import styled from "styled-components";
import SearchIcon from './../../assets/icons/search.svg?react';

export const Container = styled.div`
  width: 100%;
  position: relative;
`;

export const SSearchIcon = styled(SearchIcon)`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: 1.6rem;
  color: ${(props) => props.theme.colors.grayScale.gray1};
  transition: .2s linear;
`;

export const Field = styled.input.attrs({
  type: 'text',
  placeholder: 'Поиск',
})`
  font-size: 1.4rem;
  line-height: 1.8rem;
  width: 100%;
  border-radius: .8rem;
  border: 1px solid ${(props) => props.theme.colors.grayScale.gray2};
  background-color: ${(props) => props.theme.colors.grayScale.gray4};
  color: ${(props) => props.theme.colors.base.white};
  height: 4.6rem;
  transition: .2s linear;
  padding-left: 4.2rem;
  &:focus,
  &:not(:focus):not(:placeholder-shown) {
    border-color: ${(props) => props.theme.colors.accent.primary};
    & ~ ${SSearchIcon} {
      color: ${(props) => props.theme.colors.base.white};
    }
  }
  &:not(:focus):not(:placeholder-shown) {
    background-color: ${(props) => props.theme.colors.grayScale.gray2};
  }
`;
