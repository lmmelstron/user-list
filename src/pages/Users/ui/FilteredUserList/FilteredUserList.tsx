import { memo, useMemo } from "react";
import { useSelector } from "react-redux";
import { getError, getIsLoading, getSearch } from "../../model/selectors/user";
import { getUsers } from "../../model/slice/userSlice";
import { UserList } from "@/entities/User";
import { filterUsers } from "../../model/lib/filterUsers";

export const FilteredUserList = memo(() => {
  const isLoading = useSelector(getIsLoading);
  const searchStr = useSelector(getSearch);
  const error = useSelector(getError);
  const users = useSelector(getUsers.selectAll);

  const filteredList = useMemo(
    () => filterUsers(users, searchStr),
    [users, searchStr]
  );

  if (isLoading) return <div>Loading users..</div>;
  if (error)
    return <div>There has been an error while loading users: {error}</div>;

  return <UserList list={filteredList} />;
});
