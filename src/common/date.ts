import dayjs from 'dayjs';
import 'dayjs/locale/ru.js';

dayjs.locale('ru')

export const humanFormat = 'DD.MM.YY, HH:mm:ss';
export const timeFormat = 'HH:mm:ss'

export const convertDateToHuman = (date: string | number, format = humanFormat, defaultValue: null | string = '-') => {
  const d = dayjs(date, format);
  return d.isValid() ? d.format(format) : defaultValue;
};
