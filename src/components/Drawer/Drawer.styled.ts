import styled from "styled-components";
import {Typography} from "../Typography";
import {mobileQuery} from "../../common/theme.ts";

export const Overlay = styled.div.attrs({
  tabIndex: -1
})`
  position: fixed;
  pointer-events: auto;
  width: 100%;
  height: 100%;
  inset: 0;
  background-color: rgba(0, 0, 0, .65);
  transition: opacity .2s linear;
  z-index: 110;
  opacity: 0;
  &._opened {
    opacity: 1;
  }
`;

export const Component = styled.div`
  padding: 5.6rem 2rem 2rem 2rem;
  z-index: 110;
  background-color: ${(props) => props.theme.colors.grayScale.gray4};
  height: 100%;
  position: fixed;
  top: 0;
  width: 47rem;
  right: -47rem;
  transition: transform .2s linear;
  &._opened {
    transform: translateX(-100%);
  }
  ${mobileQuery(`
    width: 100%;
    right: -100%;
  `)}
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 2rem;
`;

export const Title = styled(Typography)``;

export const CloseButton = styled.button.attrs({ type: 'button' })`
  margin-left: auto;
`;

export const Content = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: calc(100% - 2rem);
  padding-bottom: 2.4rem;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
