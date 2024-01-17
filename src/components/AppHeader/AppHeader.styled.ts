import styled from "styled-components";
import {Typography} from "../Typography";
import OrganizationIcon from './../../assets/icons/organization.svg?react';
import {mobileQuery, tableQuery} from "../../common/theme.ts";
import ProfileWidget from "../ProfileWidget/ProfileWidget.tsx";

export const Container = styled.header`
  --content-horizontal-offset: 3.4rem;
  padding: 3.4rem 2.5rem;
  ${tableQuery(`
    --content-horizontal-offset: 2.4rem;
    padding: 3.2rem 3rem;
  `)}
  ${mobileQuery(`
    --content-horizontal-offset: 1.6rem;
    padding: 2.4rem 1.6rem;
  `)}
`;

export const Content = styled.div`
  background-color: ${(props) => props.theme.colors.grayScale.gray4};
  border-radius: 1.8rem;
  padding: 0 var(--content-horizontal-offset);
  height: 8.2rem;
  width: 100%;
  display: flex;
  align-items: center;;
  ${tableQuery(`
    height: 7.8rem;
  `)}
  ${mobileQuery(`
    height: 4.9rem;
    justify-content: space-between;
  `)}
`;

export const Title = styled(Typography)``;

export const Legend = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: 7rem;
  ${mobileQuery(`
    margin-left: 0;
  `)}
`;

export const CompanyTitle = styled(Typography)``;

export const CompanyIcon = styled(OrganizationIcon)``;

export const SProfileWidget = styled(ProfileWidget)`
  margin-left: auto;
  margin-right: 0;
  ${mobileQuery(`
    display: none;
  `)}
`;
