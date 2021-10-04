import {createSelector} from "reselect";

 const directory = state => state.directory;

 export const selectDirectory = createSelector(
     [directory],
     directory => directory.sections
 )

