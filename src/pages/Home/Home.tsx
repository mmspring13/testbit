import * as S from './Home.styled.tsx';
import {useCallback, useEffect, useMemo, useState} from "react";
import UserTableActions from "../../components/UserTableActions/UserTableActions.tsx";
import {Drawer} from "../../components/Drawer";
import {Pagination} from "../../components/Pagination";
import {Typography} from "../../components/Typography";
import get from "lodash/get";
import {enhancedApi, GetUserListApiArg, useLazyGetUserListQuery} from "../../store/gen/user.ts";
import {truncate} from "../../common/string.ts";
import {formatNumberWithSpaces} from "../../common/numbers.ts";
import {useAppDispatch} from "../../hooks/store.ts";
import {UserInfoWidget} from "../../components/UserInfoWidget";

const HomePage = () => {
  const dispatch = useAppDispatch();

  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [orderBy, setOrderBy] = useState<GetUserListApiArg['orderBy'] | null>(null);

  const [fetchUsers, {
    data: userQueryData,
    isFetching: userQueryIsFetching,
    error: userQueryError,
  }] = useLazyGetUserListQuery()

  useEffect(() => {
    const args: GetUserListApiArg = { page: 1 };
    if (orderBy) args.orderBy = orderBy
    if (searchValue) args.search = searchValue
    fetchUsers(args).then((resp) => {
      if (!resp.isSuccess) {
        dispatch(enhancedApi.util.updateQueryData('getUserList', args, () => {
          return {
            pages: 0,
            data: []
          }
        }));
      }
    });
  }, [searchValue, orderBy, fetchUsers, dispatch]);

  const [selectedUserId, setSelectedUserId] = useState<string | null>();

  const handleUserEdit = useCallback((userId: string) => {
    setSelectedUserId(userId)
  }, []);

  const handleUserDelete = useCallback((userId: string) => {
    console.log('handle delete user', userId);
  }, []);

  const handleSearch = useCallback((value: string) => {
    setPage(1);
    setSearchValue(value);
  }, []);

  const handleSort = useCallback((
    fieldKey: string,
    direction: 'asc' | 'desc' | null
  ) => {
    setPage(1);
    if (direction) {
      setOrderBy(`${fieldKey}:${direction}` as GetUserListApiArg['orderBy']);
    } else {
      setOrderBy(null);
    }
  }, []);

  const userTableColumns = useMemo(() => {
    return [
      { header: 'Email', key: 'email', width: '25rem' },
      { header: 'Имя', key: 'name', width: '9.3rem' },
      { header: 'Роль', key: 'role', width: '8.2rem' },
      { header: 'Подписка', key: 'tariff', width: '7.4rem' },
      {
        key: 'tokens',
        width: '12rem',
        header: 'Токены',
        sortable: true,
      },
      { header: 'Действия', key: 'actions', width: '8.7rem' },
    ]
  }, []);

  const formattedUsersQueryError = useMemo(() => {
    // @TODO: форматирование ошибки
    if (userQueryError) {
      return 'Ошибка при загрузке пользователей'
    }
    return null
  }, [userQueryError]);

  const formattedUsers = useMemo(() => {
    /**
     * @TODO: в схеме нет поля subscription
     */
    return userQueryData?.data?.map((user) => ({
      id: { raw: user.id, value: user.id },
      email: { raw: user.email, value: truncate(user.email || '', 24) },
      name: { raw: user.name, value: truncate(user.name || '', 24) },
      role: { raw: user.role, value: truncate(user.role, 24) },
      tariff: {
        raw: get(user, 'subscription.plan.type', '-'),
        value: truncate(get(user, 'subscription.plan.type', '-'), 24)
      },
      tokens: {
        raw: `
          ${get(user, 'subscription.tokens', '0')}
          ${get(user, 'subscription.plan.currency', 'UFO')}
        `,
        value: `
          ${truncate(formatNumberWithSpaces(get(user, 'subscription.tokens', '0'), ''), 32)}
          ${truncate(get(user, 'subscription.plan.currency', 'UFO'), 18)}
        `,
      },
      actions: {
        value: <UserTableActions onEdit={() => handleUserEdit(user.id)} onDelete={() => handleUserDelete(user.id)} />,
      }
    })) || []
  }, [handleUserEdit, handleUserDelete, userQueryData]);

  const selectedUser = useMemo(() => {
    if (selectedUserId) {
      return userQueryData?.data?.find(({ id }) => id === selectedUserId);
    }
    return null
  }, [selectedUserId, userQueryData?.data]);

  const handleChangePage = useCallback((page: number) => {
    window.scrollTo({top: 0, behavior: 'smooth'});
    const args: GetUserListApiArg = { page};
    if (orderBy) args.orderBy = orderBy
    if (searchValue) args.search = searchValue
    fetchUsers(args).then((resp) => {
      if (resp.isSuccess) {
        setPage(page);
      }
    })
  }, [fetchUsers, orderBy, searchValue]);

  return (
    <>
      <S.Page>
        <S.ContentWrapper>
          <S.Header>
            <Typography variant="body-xl-semibold">Моя организация</Typography>
          </S.Header>
          <S.Content>
            <Typography variant="body-xl-semibold">Пользователи</Typography>
            <S.SearchField onChange={handleSearch} />
            {formattedUsersQueryError && (
              <S.ErrorBlock variant="body-m-regular">{formattedUsersQueryError}</S.ErrorBlock>
            )}
            <S.UsersTable
              columns={userTableColumns}
              data={formattedUsers}
              onSort={handleSort}
              $loading={userQueryIsFetching}
            />
            <S.PaginationWrapper>
              <Pagination
                onChange={handleChangePage}
                page={page}
                totalPages={userQueryData?.pages || 1}
              />
            </S.PaginationWrapper>
          </S.Content>
        </S.ContentWrapper>
      </S.Page>
      <Drawer
        open={!!selectedUserId}
        onClose={() => setSelectedUserId(null)}
        title={selectedUser?.email ? truncate(selectedUser.email, 32) : null}
      >
        {selectedUserId && <UserInfoWidget user={selectedUser} />}
      </Drawer>
    </>
  );
};

export default HomePage;
