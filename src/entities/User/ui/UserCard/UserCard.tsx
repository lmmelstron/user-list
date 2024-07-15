import { memo } from "react";
import cls from "./UserCard.module.scss";
import classNames from "classnames";

interface IUserCardProps {
  className?: string;
  username: string;
  email: string;
  phone: string;
}

export const UserCard = memo((props: IUserCardProps) => {
  const { className, username, email, phone } = props;
  return (
    <li className={classNames(cls.UserCard, className)}>
      <div className={cls.title}>{username}</div>
      <div>{email}</div>
      <div>{phone}</div>
    </li>
  );
});
