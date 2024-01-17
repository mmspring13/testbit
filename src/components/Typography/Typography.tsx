import * as S from './Typography.styled.ts';
import {PropsWithChildren} from "react";
import {TypographyProps} from "./types.ts";
import {KnownTarget, SupportedHTMLElements} from "styled-components/dist/types";

const Typography = <T extends SupportedHTMLElements,>({
  tag,
  variant,
  children,
  className,
  color,
  ...restProps
}: PropsWithChildren<TypographyProps<T>>) => {
  return (
    <S.BaseComponent as={tag as KnownTarget} $variant={variant} $color={color} className={className} {...restProps}>
      {children}
    </S.BaseComponent>
  );
}

export default Typography
