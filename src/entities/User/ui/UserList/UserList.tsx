import { memo } from "react";
import cls from "./UserList.module.scss";
import classNames from "classnames";
import { IUser } from "../../model/types/user";
import { UserCard } from "../UserCard/UserCard";

interface IUserListProps {
  className?: string;
  list: IUser[];
}

export const UserList = memo((props: IUserListProps) => {
  const { className, list } = props;
  return (
    <ul className={classNames(cls.UserList, className)}>
      {list.map((user) => (
        <UserCard
          className={cls.card}
          key={user.id}
          username={user.username}
          email={user.email}
          phone={user.phone}
        />
      ))}
    </ul>
  );
});
