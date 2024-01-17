import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;
`;

export const ActionButton = styled.button.attrs({
  type: 'button'
})`
  transition: .2s linear;
  &:active,
  &:focus {
    opacity: .75;
  }
`;
