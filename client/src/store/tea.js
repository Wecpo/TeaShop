import { createSlice } from "@reduxjs/toolkit";
import teaService from "../services/tea.service";

const teaSlice = createSlice({
     name: "tea",
     initialState: {
          entities: null,
          isLoading: true,
          error: null,
          lastFetch: null,
     },
     reducers: {
          teaRequested: (state) => {
               state.isLoading = true;
          },
          teaDeleteRequested: (state) => {
               state.isLoading = true;
          },
          teaReceived: (state, action) => {
               state.entities = action.payload;
               state.dataLoaded = true;
               state.isLoading = false;
          },
          teaRequestFailed: (state, action) => {
               state.error = action.payload;
          },
          teaDeletedFromList: (state, action) => {
               state.isLoading = false;
               state.entities = state.entities.filter(
                    (tea) => tea._id !== action.payload
               );
          },
          teaUpdateRequested: (state) => {
               state.isLoading = true;
          },
          teaUpdateReceived: (state, action) => {
               state.entities[
                    state.entities.findIndex(
                         (u) => u._id === action.payload._id
                    )
               ] = action.payload;
          },
     },
});

const { reducer: teaReducer, actions } = teaSlice;
const {
     teaRequested,
     teaReceived,
     teaRequestFailed,
     teaDeleteRequested,
     teaDeletedFromList,
     teaUpdateRequested,
     teaUpdateReceived,
} = actions;

export const getTeaList = () => (state) => state.tea.entities;

export const getTeaById = (teaId) => (state) => {
     if (state.tea.entities) {
          return state.tea.entities.find((tea) => tea._id === teaId);
     }
};

export const updateTea = (payload) => async (dispatch) => {
     dispatch(teaUpdateRequested());
     try {
          const { content } = await teaService.update(payload);
          dispatch(teaUpdateReceived(content));
     } catch (error) {
          dispatch(teaRequestFailed(error.message));
     }
};

export const deleteTeaFromList = (teaId) => async (dispatch) => {
     dispatch(teaDeleteRequested());
     try {
          teaService.delete(teaId);
          dispatch(teaDeletedFromList(teaId));
     } catch (error) {
          dispatch(teaRequestFailed(error.message));
     }
};

export const loadTeaList = () => async (dispatch) => {
     dispatch(teaRequested());
     try {
          const { content } = await teaService.get();
          dispatch(teaReceived(content));
     } catch (error) {
          dispatch(teaRequestFailed(error.message));
     }
};

export default teaReducer;
