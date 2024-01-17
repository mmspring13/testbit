
export const emptySpace = '...';

export const getPagination = (currentPage: number, pages: number): { key: number; value: string }[] => {
  const delta = currentPage > 2 ? 2 : 3;
  const left = currentPage - delta;
  const right = currentPage + delta + 1;
  const range = [];
  const rangeWithDots: { key: number; value: string }[] = [];
  let l: number | null = null;

  for (let i = 1; i <= pages; i++) {
    if (i === 1 || i === pages || i >= left && i < right) {
      range.push(i);
    }
  }
  for (const i of range) {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push({ value: String(l + 1), key: l + 1 });
      } else if (i - l !== 1) {
        rangeWithDots.push({ value: emptySpace, key: i -l });
      }
    }
    rangeWithDots.push({ value: String(i), key: i });
    l = i;
  }
  return rangeWithDots;
};
