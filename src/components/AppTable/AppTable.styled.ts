import styled from 'styled-components';

export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledTable = styled.table`
  width: 100%;
  position: relative;
  border-collapse: collapse;
  background-color: ${(props) => props.theme.colors.grayScale.gray4};
  
  .fixed-cell {
    @media screen and (min-width: 567px) {
      &:nth-child(1) {
        position: sticky;
        z-index: 101;
        left: 0;

        &:before {
          box-shadow: inset 10px 0 8px -8px rgba(72, 72, 72, 0.45);
          position: absolute;
          top: 0;
          right: 0;
          bottom: -1px;
          width: 30px;
          transform: translate(100%);
          transition: box-shadow .3s;
          content: "";
          pointer-events: none;
        }
      }
    }  
  }
`;

export const Thead = styled.thead`
  .thead-tr {
    height: 4.6rem;
    &__text {
      color: ${(props) => props.theme.colors.grayScale.gray6};
    }
  }
`;

export const Tbody = styled.tbody`
  .tbody-tr {
    height: 6.4rem;
    &__text {
      color: ${(props) => props.theme.colors.base.white};
      display: inline-block;
      position: relative;
    }
  }
`

export const StyledTh = styled.th<{ $width?: string; }>`
  background-color: ${(props) => props.theme.colors.base.black};
  min-width: ${(props) => props.$width ? props.$width : 'none'};
  text-align: center;

  &:first-child {
    border-top-left-radius: .8rem;
    border-bottom-left-radius: .8rem;
  }
  &:last-child {
    border-top-right-radius: .8rem;
    border-bottom-right-radius: .8rem;
  }
`;

export const StyledTd = styled.td<{ $width?: string; }>`
  border-bottom: 1px solid ${(props) => props.theme.colors.grayScale.gray3};
  background-color: ${(props) => props.theme.colors.grayScale.gray4};
  min-width: ${(props) => props.$width ? props.$width : 'none'};
  text-align: center;
  cursor: pointer;
`;
