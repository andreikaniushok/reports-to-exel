import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IReport } from "../../../interfaces/IReport";
import { TRootState } from "../../../../../../app/store";

interface IFilteredReportsReduxState {
  filteredReports: IReport[];
}

const initialState: IFilteredReportsReduxState = {
  filteredReports: [],
};

const FilteredReportsSlice = createSlice({
  name: "filteredReports",
  initialState,
  reducers: {
    setFilteredReports(state, action: PayloadAction<IReport[]>) {
      state.filteredReports = action.payload;
    },
  },
});

export const FilteredReportsSelectors = {
  selectFilteredReports: (state: TRootState) =>
    state.filteredReports.filteredReports,
};

export const FilteredReportsActions = FilteredReportsSlice.actions;

const FilteredReportsReducers = FilteredReportsSlice.reducer;

export default FilteredReportsReducers;
