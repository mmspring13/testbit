import styled from "styled-components";
import {SearchInput} from "../../components/SearchInput";
import {mobileQuery, tableQuery} from "../../common/theme.ts";
import {AppTable} from "../../components/AppTable";
import {Typography} from "../../components/Typography";

export const Page = styled.div`
  --content-horizontal-offset: 3.4rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  padding-bottom: 3.4rem;
  flex: 1;
  ${tableQuery(`
    --content-horizontal-offset: 2.4rem;
    padding-left: 4rem;
    padding-right: 4rem;
  `)}
  ${mobileQuery(`
    --content-horizontal-offset: 1.6rem;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 0;
  `)}
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${(props) => props.theme.colors.grayScale.gray4};
  border-radius: 1.8rem;
  padding-top: 2.4rem;
  ${mobileQuery(`
    border-radius: 0;
  `)}
`;

export const Header = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.grayScale.gray3};;
  padding-left: var(--content-horizontal-offset);
  padding-right: var(--content-horizontal-offset);
  padding-bottom: 2.4rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 2.9rem;
  padding-left: var(--content-horizontal-offset);
  padding-right: var(--content-horizontal-offset);
`;

export const UsersTable = styled(AppTable)<{ $loading?: boolean }>`
  position: relative;
  transition: opacity .2s linear;
  min-height: 20rem;
  ${(props) => props.$loading && `
    opacity: .6;
    pointer-events: none;
  `}
`;

export const ErrorBlock = styled(Typography)`
  color: ${(props) => props.theme.colors.other.critic};
  display: inline-block;
  padding: 1.4rem 0;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2.4rem;
  margin-top: auto;
  margin-bottom: 0;
  padding-bottom: 4.5rem;
  ${tableQuery(`
    padding-bottom: 3.4rem;
  `)}
  ${mobileQuery(`
    padding-bottom: 5rem;
  `)}
`;

export const SearchField = styled(SearchInput)`
  margin-top: 2.4rem;
  margin-bottom: 1.8rem;
`;
