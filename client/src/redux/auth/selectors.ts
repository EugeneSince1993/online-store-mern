import { RootState } from '../store';

export const selectAuth = (state: RootState) => state.auth;

export const selectIsAuth = (state: RootState) => Boolean(state.auth.data);
