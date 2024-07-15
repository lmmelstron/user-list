import { IUser } from "@/entities/User";
import { EntityState } from "@reduxjs/toolkit";

export interface userSchema extends EntityState<IUser, string> {
  isLoading: boolean;
  error?: string;

  search: string;
}
