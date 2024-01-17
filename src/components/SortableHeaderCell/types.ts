export type SortableHeaderCellProps = {
  value: 'asc' | 'desc' | null;
  onChange(value: SortableHeaderCellProps['value']): void;
};
