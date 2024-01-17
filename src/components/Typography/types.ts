import {SupportedHTMLElements} from "styled-components/dist/types";
import {ComponentProps} from "react";

export type TextVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body-xxl-semibold'
  | 'body-xl-semibold'
  | 'body-m-semibold'
  | 'body-m-medium'
  | 'body-m-regular'
  | 'body-s-medium'
  | 'body-xs-regular';

export type TypographyProps <T extends SupportedHTMLElements> = {
  className?: string;
  tag?: T;
  color?: string;
  variant?: TextVariant;
} & ComponentProps<T>;
