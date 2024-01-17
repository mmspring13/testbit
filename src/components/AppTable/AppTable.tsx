import * as S from './AppTable.styled.ts';
import React, {useState} from "react";
import {Typography} from "../Typography";
import {SortableHeaderCell} from "../SortableHeaderCell";
import {useCopyToClipboard} from "react-use";

type BaseHeader = {
  header: React.JSX.Element | string | null | number;
  key: string;
  width?: string;
  sortable?: boolean;
};

export type AppTableProps<T extends BaseHeader> = {
  columns: Array<T>;
  className?: string;
  data: Array<{
    [k in T['key']]: {
      raw?: string | null | number;
      value: React.JSX.Element | string | null | number;
    };
  }>;
  onSort?: (key: string, direction: 'asc' | 'desc' | null) => void;
};

const AppTable = <T extends BaseHeader>({ columns, data, className, onSort }: AppTableProps<T>) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [sortBy, setSortBy] = useState<{ key: T['key']; value: 'asc' | 'desc' } | null>(null);
  const [, copyToClipboard] = useCopyToClipboard();

  const handleScroll = (event: React.UIEvent<HTMLDivElement, UIEvent>) => {
    if (event.target instanceof HTMLElement) {
      if (event.target.scrollLeft > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
  };

  const handleSort = (field: string, direction: 'asc' | 'desc' | null) => {
    setSortBy(direction ? { key: field, value: direction } : null);
    onSort?.(field, direction);
  };

  const columnWidth = Math.trunc(100 / columns.length);

  return (
    <S.TableContainer onScroll={handleScroll} className={className}>
      <S.StyledTable>
        {columns.map((col) => (
          <col key={col.key} width={col.width || 'auto'} />
        ))}
        <S.Thead>
          <tr className="thead-tr">
            {columns.map((col, idx) => {
              return (
                <S.StyledTh
                  key={idx}
                  $width={col.width || 'auto'}
                  style={{ width: `${columnWidth}%` }}
                  className={isScrolled ? 'fixed-cell' : undefined}
                >
                  {col.sortable ? (
                    <SortableHeaderCell
                      value={col.key === sortBy?.key ? sortBy.value : null}
                      onChange={(val) => handleSort(col.key, val)}
                    >
                      {col.header}
                    </SortableHeaderCell>
                  ) : (
                    <Typography className="thead-tr__text" variant="body-s-medium">
                      {col.header}
                    </Typography>
                  )}
                </S.StyledTh>
              );
            })}
          </tr>
        </S.Thead>
        <S.Tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="tbody-tr">
              {columns.map((column, colIndex) => {
                const item = row[column.key as T['key']];
                return (
                  <S.StyledTd
                    key={colIndex}
                    $width={column.width || 'auto'}
                    style={{ width: `${columnWidth}%` }}
                    className={isScrolled ? 'fixed-cell' : undefined}
                    onClick={() => item.raw && copyToClipboard(String(item.raw))}
                  >
                    {typeof item.value === 'string' || typeof item.value === 'number' ? (
                      <Typography
                        data-value={item.raw}
                        variant="body-s-medium"
                        className="tbody-tr__text"
                      >
                        {item.value}
                      </Typography>
                    ) : item.value}
                  </S.StyledTd>
                )
              })}
            </tr>
          ))}
        </S.Tbody>
      </S.StyledTable>
    </S.TableContainer>
  );
};

export default AppTable;
