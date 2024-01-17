import {emptySpace, getPagination} from "./helpers.ts";
import * as S from './Pagination.styled.ts';
import {Typography} from "../Typography";

export type PaginationProps = {
  onChange(value: number): void;
  page: number;
  totalPages: number;
  className?: string;
};

const Pagination = ({ onChange, page, totalPages, className }: PaginationProps) => {
  const paginator = getPagination(page, totalPages);

  const handleChange = (value: number) => {
    onChange(value);
  };

  const handleNext = () => {
    onChange(page >= totalPages ? 1 : page + 1);
  };

  const handlePrev = () => {
    onChange(page <= 1 ? totalPages : page - 1);
  };

  const isDisabled = totalPages <= 1;

  return (
    <S.Container className={className}>
      <S.ArrowButton
        onClick={handlePrev}
        $disabled={isDisabled}
        tabIndex={isDisabled ? -1 : 0}
      >
        <S.SArrowIcon />
      </S.ArrowButton>
      {paginator.map((item) => {
        if (item.value === emptySpace) {
          return (
            <Typography
              key={item.key}
              variant="body-s-medium"
            >{item.value}</Typography>
          )
        } else {
          return (
            <S.PageButton
              $active={page === parseInt(item.value)}
              $disabled={isDisabled}
              tabIndex={(isDisabled || page === parseInt(item.value)) ? -1 : 0}
              key={item.key}
              onClick={() => handleChange(parseInt(item.value))}
            >{item.value}</S.PageButton>
          );
        }
      })}
      <S.ArrowButton onClick={handleNext} $disabled={isDisabled} tabIndex={isDisabled ? -1 : 0}>
        <S.SArrowIcon className="_reverse" />
      </S.ArrowButton>
    </S.Container>
  );
};

export default Pagination;
