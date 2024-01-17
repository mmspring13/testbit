import BigNumber from "bignumber.js";

export const DEFAULT_DECIMAL_PLACES = 8;

export const formatNumberWithSpaces = (
  num: number | string,
  groupSeparator = '.',
  dp = DEFAULT_DECIMAL_PLACES,
) => {
  const bn = new BigNumber(num);
  return bn.decimalPlaces(dp).toFormat({
    groupSeparator,
    groupSize: 3,
    decimalSeparator: '.',
  });
};

export const sumOfNumbers = (arr: number[]) => arr.reduce((acc, v) => acc += v, 0);
