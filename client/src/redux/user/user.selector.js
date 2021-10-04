import { createSelector } from 'reselect';

const selectUsar = state => state.user;

export const selectUser = createSelector(
    [selectUsar],
    user => user.currentuser
  );

