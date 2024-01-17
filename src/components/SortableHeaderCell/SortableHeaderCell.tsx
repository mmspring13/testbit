import * as S from './SortableHeaderCell.styled.ts'
import {PropsWithChildren} from "react";
import {SortableHeaderCellProps} from "./types.ts";

const SortableHeaderCell = ({ value, children, onChange }: PropsWithChildren<SortableHeaderCellProps>) => {
  const handleChange = () => {
    if (!value) {
      onChange('desc');
    } else if (value === 'desc') {
      onChange('asc');
    } else {
      onChange(null);
    }
  };

  return (
    <S.Container role={'button'} onClick={handleChange} $direction={value}>
      <S.Text variant="body-s-medium">{children}</S.Text>
      <S.SortIcon />
    </S.Container>
  );
};

export default SortableHeaderCell;
