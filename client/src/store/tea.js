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
          teaReceived: (state, action) => {
               state.entities = action.payload;
               // state.dataLoaded = true;
               // state.isLoading = false;
          },
     },
});

const { reducer: teaReducer, actions } = teaSlice;
const { teaRequested, teaReceived, teaRequestFailed } = actions;

// const authRequested = createAction("tea/authRequested");
// const userUpdateFailed = createAction("tea/userUpdateFailed");
// const userUpdateRequested = createAction("tea/userUpdateRequested");

export const getTeaList = () => (state) => state.tea.entities;

export const getTeaById = (teaId) => (state) => {
     if (state.tea.entities) {
          return state.tea.entities.find((tea) => tea._id === teaId);
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
