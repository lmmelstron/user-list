import { ChangeEvent, memo, useState } from "react";
import cls from "./UserFilter.module.scss";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useDebounce } from "@/shared/lib/hooks/useDebounce/useDebounce";
import { userActions } from "../../model/slice/userSlice";
import classNames from "classnames";

export const UserFilter = memo(() => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState("");

  const handleChange = useDebounce(
    (str: string) => dispatch(userActions.setSearch(str)),
    500
  );

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    handleChange(e.target.value);
  };

  return (
    <input
      className={classNames(cls.UserFilter)}
      type="text"
      placeholder="Write part of the name\phone\email to filter"
      value={value}
      onChange={onChange}
    />
  );
});
