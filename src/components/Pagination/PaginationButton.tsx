import {PropsWithChildren} from "react";
import {Typography} from "../Typography";

export type PaginationButtonProps = {
  onClick(): void;
  tabIndex?: number;
};

const PaginationButton = ({
  onClick,
  children,
  ...restProps
}: PropsWithChildren<PaginationButtonProps>) => {
  return (
    <Typography
      as='button'
      variant="body-s-medium"
      onClick={onClick}
      {...restProps}
    >{children}</Typography>
  );
};

export default PaginationButton;
