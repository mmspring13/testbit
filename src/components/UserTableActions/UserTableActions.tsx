import * as S from './UserTableActions.styled.ts';
import EditIcon from './../../assets/icons/edit.svg?react';
import TrashIcon from './../../assets/icons/trash.svg?react';
import {useTheme} from "styled-components";

export type UserTableActionsProps = {
  onEdit(): void;
  onDelete(): void;
};

const UserTableActions = ({
  onDelete,
  onEdit,
}: UserTableActionsProps) => {
  const theme = useTheme()

  return (
    <S.Container>
      <S.ActionButton onClick={onEdit}>
        <EditIcon color={theme.colors.accent.primary} />
      </S.ActionButton>
      <S.ActionButton onClick={onDelete}>
        <TrashIcon color={theme.colors.accent.primary} />
      </S.ActionButton>
    </S.Container>
  );
};

export default UserTableActions;
