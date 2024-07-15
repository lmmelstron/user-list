import { memo, useEffect } from "react";
import cls from "./Users.module.scss";
import classNames from "classnames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import fetchUsers from "../model/services/fetchUsers/fetchUsers";
import { FilteredUserList } from "./FilteredUserList/FilteredUserList";
import { UserFilter } from "./UserFilter/UserFilter";

const Users = memo(() => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <ul className={classNames(cls.Users)}>
      <h1 className={cls.pageHeader}>Users</h1>
      <UserFilter />
      <FilteredUserList />
    </ul>
  );
});

export default Users;
