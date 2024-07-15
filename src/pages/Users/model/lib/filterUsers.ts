import { IUser } from "@/entities/User";

export const filterUsers = (users: IUser[], searchStr: string) => {
  if (!searchStr) return users;
  return users.filter(
    (user) =>
      user.email.includes(searchStr) ||
      user.username.includes(searchStr) ||
      user.phone.includes(searchStr)
  );
};
