import * as S from './AppHeader.styled.ts';

const AppHeader = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Title tag="h1" variant="body-xl-semibold">BitTest</S.Title>
        <S.Legend>
          <S.CompanyIcon />
          <S.CompanyTitle variant="body-s-medium">Моя организация</S.CompanyTitle>
        </S.Legend>
        <S.SProfileWidget />
      </S.Content>
    </S.Container>
  )
};

export default AppHeader;
