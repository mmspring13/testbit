import styled, {css} from "styled-components";
import {TextVariant} from "./types.ts";
import {mobileQuery, tableQuery} from "../../common/theme.ts";

// Headlines
export const h1css = css`
  font-weight: 700;
  font-size: 4.6rem;
  line-height: 6rem;
  ${tableQuery(`
    font-size: 4rem;
    line-height: 5.2rem;
  `)}
  ${mobileQuery(`
    font-size: 2.8rem;
    line-height: 3.6rem; 
  `)}
`;
export const h2css = css`
  font-weight: 600;
  font-size: 3.4rem;
  line-height: 4.4rem;
  ${tableQuery(`
    font-size: 3rem;
    line-height: 4rem;
  `)}
  ${mobileQuery(`
    font-size: 2.4rem;
    line-height: 3.2rem; 
  `)}
`;
export const h3css = css`
  font-weight: 600;
  font-size: 3rem;
  line-height: 4rem;
  ${tableQuery(`
    font-size: 2.6rem;
    line-height: 3.4rem;
  `)}
  ${mobileQuery(`
    font-size: 2.2rem;
    line-height: 3rem;
  `)};
`;
export const h4css = css`
  font-weight: 600;
  font-size: 2.6rem;
  line-height: 3.4rem;
  ${tableQuery(`
    font-size: 2.2rem;
    line-height: 3rem;
  `)}
  ${mobileQuery(`
    font-size: 2rem;
    line-height: 2.6rem;
  `)}
`;
export const h5css = css`
  font-weight: 600;
  font-size: 2.2rem;
  line-height: 3rem;
  ${tableQuery(`
    font-size: 2rem;
    line-height: 2.6rem;
  `)}
  ${mobileQuery(`
    font-size: 1.8rem;
    line-height: 2.4rem;
  `)}
`;
export const h6css = css`
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.4rem;
  ${tableQuery(`
    font-size: 1.8rem;
    line-height: 2.4rem;
  `)}
  ${mobileQuery(`
    font-size: 1.6rem;
    line-height: 2.2rem;
  `)}
`;

// Text
export const bodyXllSemibold = css`
  font-weight: 600;
  font-size: 2.6rem;
  line-height: 3.4rem;
  ${tableQuery(`
    font-size: 2.2rem;
    line-height: 3rem;
  `)}
  ${mobileQuery(`
    font-size: 2rem;
    line-height: 2.6rem;
  `)}
`;
export const bodyXlSemibold = css`
  font-weight: 600;
  font-size: 2.2rem;
  line-height: 2.9rem;
  ${tableQuery(`
    font-size: 2rem;
    line-height: 2.6rem;
  `)}
  ${mobileQuery(`
    font-size: 1.8rem;
    line-height: 2.4rem;
  `)}
`;
export const bodyMSemibold = css`
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 2.2rem;
  ${tableQuery(`
    font-size: 1.4rem;
    line-height: 1.8rem;
  `)}
`;
export const bodyMMedium = css`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.2rem;
  ${tableQuery(`
    font-size: 1.4rem;
    line-height: 1.8rem;
  `)}
`;
export const bodyMRegular = css`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.2rem;
  ${tableQuery(`
    font-size: 1.4rem;
    line-height: 1.8rem;
  `)}
`;
export const bodySMedium = css`
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.8rem;
  ${tableQuery(`
    font-size: 1.2rem;
    line-height: 1.6rem;
  `)}
`;
export const bodyXsRegular = css`
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.6rem;
  ${tableQuery(`
    font-size: 1rem;
    line-height: 1.6rem;
  `)}
`;

export const BaseComponent = styled.span<{ $variant?: TextVariant; $color?: string }>`
  color: ${(props) => props.$color || props.theme.colors.base.white};
  ${(props) => {
    switch (props.$variant) {
      case 'h1':
        return h1css
      case 'h2':
        return h2css
      case 'h3':
        return h3css
      case 'h4':
        return h4css
      case 'h5':
        return h5css
      case 'h6':
        return h6css
      case 'body-xxl-semibold':
        return bodyXllSemibold
      case 'body-xl-semibold':
        return bodyXlSemibold
      case 'body-m-semibold':
        return bodyMSemibold
      case 'body-m-medium':
        return bodyMMedium
      case 'body-m-regular':
        return bodyMRegular
      case 'body-s-medium':
        return bodySMedium
      case 'body-xs-regular':
        return bodyXsRegular
    }
    return ''
  }}  
`;
