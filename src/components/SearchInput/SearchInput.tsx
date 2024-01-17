import * as S from './SearchInput.styled.ts';
import React, {useEffect, useState} from "react";

export type SearchInputProps = {
  onChange(value: string): void;
  className?: string;
};

const SearchInput = ({ onChange, className }: SearchInputProps) => {
  const [inputValue, setInputValue] = useState<null | string>(null);
  const [throttleValue, setThrottleValue] = useState<null | string>(null);

  useEffect(() => {
    let timer: number | null = null;

    if (typeof inputValue === 'string') {
      timer = setTimeout(() => {
        setThrottleValue(inputValue);
      }, 800);
    }
    return () => {
      if (timer) clearTimeout(timer)
    };
  }, [inputValue]);

  useEffect(() => {
    if (typeof throttleValue === 'string') onChange(throttleValue)
  }, [throttleValue, onChange]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value.trim());
  };

  return (
    <S.Container className={className}>
      <S.Field onChange={handleChange} />
      <S.SSearchIcon />
    </S.Container>
  );
};

export default SearchInput;
