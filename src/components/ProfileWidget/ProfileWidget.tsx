import * as S from './ProfileWidget.styled.ts';
import {useTheme} from "styled-components";

export type ProfileWidgetProps = {
  className?: string;
};

const ProfileWidget = ({ className }: ProfileWidgetProps) => {
  const theme = useTheme();

  return (
    <S.Container className={className}>
      <S.AvatarWrapper>
        <S.Avatar />
      </S.AvatarWrapper>
      <S.Content>
        <S.StatusText
          variant="body-xs-regular"
          color={theme.colors.grayScale.gray1}
        >Вы авторизованы</S.StatusText>
        <S.UsernameText
          variant="body-s-medium"
          color={theme.colors.base.white}
        >Администратор</S.UsernameText>
      </S.Content>
    </S.Container>
  );
};

export default ProfileWidget;
