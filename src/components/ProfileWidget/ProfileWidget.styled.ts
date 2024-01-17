import AvatarIcon from './../../assets/icons/avatar.svg?react';
import styled from "styled-components";
import {Typography} from "../Typography";

export const Container = styled.div`
  padding: .9rem 1.4rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  background-color: ${(props) => props.theme.colors.grayScale.gray4};
  border-radius: .6rem;
  border: 1px solid ${(props) => props.theme.colors.grayScale.gray3};
`;

export const AvatarWrapper = styled.div``;

export const Avatar = styled(AvatarIcon)``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StatusText = styled(Typography)``;

export const UsernameText = styled(Typography)``;
