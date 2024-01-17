import {NewChartProps} from "./types.ts";
import {
  Area,
  AreaChart,
  Brush,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import {useTheme} from "styled-components";
import * as S from './TransactionChart.styled.ts';
import {formatNumberWithSpaces, sumOfNumbers} from "../../common/numbers.ts";
import {convertDateToHuman, timeFormat} from "../../common/date.ts";
import {useEffect, useMemo, useState} from "react";

const DECIMAL_INTERVAL = 4;

const TransactionChart = ({ transactions }: NewChartProps) => {
  const theme = useTheme()

  const [startBrushIdx, setStartBrushIdx] = useState(0);
  const [endBrushIdx, setEndBrushIdx] = useState(0);

  useEffect(() => {
    setEndBrushIdx(Math.trunc((transactions.length - 1) / DECIMAL_INTERVAL));
  }, [transactions.length]);

  const chartTransactions = useMemo(() => {
    const groupByTm = transactions.reduce((acc, trx) => {
      const dateKey = convertDateToHuman(trx.createdAt, 'YYYY-MM-DDTHH:mm:ss', null);
      if (!dateKey) {
        return acc
      }
      const item = acc.get(dateKey);
      if (!item) {
        acc.set(dateKey, [trx.amount]);
      } else {
        item.push(trx.amount);
      }
      return acc;
    }, new Map<string, number[]>());
    return Array.from(groupByTm)
      .map((it): [string, number] => [it[0], sumOfNumbers(it[1]) / it[1].length])
      .sort((a, b) => new Date(a[0]).getTime() - new Date(b[0]).getTime());
  }, [transactions]);

  const interval = useMemo(() => {
    return Math.trunc((endBrushIdx - startBrushIdx) / DECIMAL_INTERVAL);
  }, [endBrushIdx, startBrushIdx]);

  return (
    <S.Container>
      <ResponsiveContainer width={'100%'} height={'100%'}>
        <AreaChart data={chartTransactions}>
          <CartesianGrid stroke={theme.colors.grayScale.gray3} vertical={false} />
          <Tooltip content={({ active, payload }) => {
            if (active && payload?.[0]?.payload) {
              const item = payload[0].payload;
                return (
                  <S.CustomTooltip>
                    <span>Дата: {convertDateToHuman(item[0])}</span>
                    <span>Сумма: {formatNumberWithSpaces(item[1], ' ')}</span>
                  </S.CustomTooltip>
                )
            }
            return null
          }} />
          <Area
            x={0}
            type="monotone"
            dataKey={(e) => e[1]}
            stroke={theme.colors.accent.primary}
            strokeWidth={2}
            fill={theme.colors.accent.primary}
            fillOpacity={.2}
          />
          <XAxis
            dataKey={e => e[0]}
            tickMargin={20}
            height={48}
            interval={interval}
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) => convertDateToHuman(value, timeFormat) || '-'}
            tick={(props) => {
              return (
                <text
                  x={props.x}
                  y={props.y}
                  width={props.width}
                  textAnchor="start"
                  className="recharts-text recharts-cartesian-axis-tick-value"
                >
                  <tspan>{convertDateToHuman(props.payload.value, timeFormat)}</tspan>
                </text>
              )
            }}
          />
          <YAxis
            dataKey={e => e[1]}
            tickLine={false}
            axisLine={false}
            domain={['dataMin', 'dataMax']}
            width={100}
            orientation="right"
            dx={12}
            tickFormatter={(value) => formatNumberWithSpaces(value, ' ')}
          />
          <Brush
            onChange={(e) => {
              if (typeof e.startIndex === 'number' && typeof e.endIndex === 'number') {
                setStartBrushIdx(e.startIndex);
                setEndBrushIdx(e.endIndex);
              }
            }}
            startIndex={startBrushIdx}
            endIndex={endBrushIdx}
            className="app-chart-brush"
            dataKey={e => e[0]}
            height={24}
            fill={theme.colors.grayScale.gray3}
            stroke={theme.colors.base.white}
            alwaysShowText={true}
            tickFormatter={(value) => convertDateToHuman(value, timeFormat) || '-'}
            traveller={(p) => {
              return (<rect
                x={p.x}
                y={p.y}
                color={'red'}
                width="6"
                height="24"
                fill={theme.colors.accent.primary}
                fillOpacity={.5}
              />)
            }}
            fillOpacity={0}
          >
            <LineChart>
              <Line dot={false} type="monotone" dataKey={(e) => e[1]} stroke={theme.colors.grayScale.gray1} />
            </LineChart>
          </Brush>
        </AreaChart>
      </ResponsiveContainer>
    </S.Container>
  );
};

export default TransactionChart;
