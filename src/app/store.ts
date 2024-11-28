import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import FilteredReportsReducers from "../modules/features/ReportsWithExportToExcel/modules/features/store/FilteredReports.slice";

export const store = configureStore({
  reducer: {
    filteredReports: FilteredReportsReducers,
  },
});

export type TAppDispatch = typeof store.dispatch;
export type TRootState = ReturnType<typeof store.getState>;
export type TAppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  TRootState,
  unknown,
  Action<string>
>;
