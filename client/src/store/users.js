import { createAction, createSlice } from "@reduxjs/toolkit";
import authService from "../services/auth.service";
import localStorageService from "../services/localStorage.service";
import userService from "../services/user.service";
import { generetaAuthError } from "../utils/generateAuthError";

const initialState = localStorageService.getAccessToken()
     ? {
            entities: null,
            isLoading: true,
            error: null,
            auth: { userId: localStorageService.getUserId() },
            isLoggedIn: true,
            dataLoaded: false,
       }
     : {
            entities: null,
            isLoading: false,
            error: null,
            auth: null,
            isLoggedIn: false,
            dataLoaded: false,
       };

const usersSlice = createSlice({
     name: "users",
     initialState,
     reducers: {
          usersRequested: (state) => {
               state.isLoading = true;
          },
          usersReceived: (state, action) => {
               state.entities = action.payload;
               state.dataLoaded = true;
               state.isLoading = false;
          },
          usersRequestFailed: (state, action) => {
               state.error = action.payload;
               state.isLoading = false;
          },
          authRequestSuccess: (state, action) => {
               state.auth = action.payload;
               state.isLoggedIn = true;
          },
          authRequestFailed: (state, action) => {
               state.error = action.payload;
          },
          userCreated: (state, action) => {
               state.entities.push(action.payload);
          },
          userLoggedOut: (state) => {
               state.entities = null;
               state.isLoggedIn = false;
               state.auth = null;
               state.dataLoaded = false;
          },
          userUpdateSuccessed: (state, action) => {
               state.entities[
                    state.entities.findIndex(
                         (u) => u._id === action.payload._id
                    )
               ] = action.payload;
          },
          authRequested: (state) => {
               state.error = null;
          },
          authErrorReseted: (state) => {
               state.error = null;
          },
          userCartAddItemRequested: (state) => {
               state.isLoading = true;
          },
          userCartAddItemReceived: (state, action) => {
               state.entities[
                    state.entities.findIndex((u) => u._id === state.auth.userId)
               ].cart = action.payload;
               state.dataLoaded = true;
               state.isLoading = false;
          },
          userCartAddItemFailed: (state, action) => {
               state.error = action.payload;
          },
          userCartRemoveItemRequested: (state) => {
               state.isLoading = true;
          },
          userCartRemoveItemReceived: (state, action) => {
               state.entities[
                    state.entities.findIndex((u) => u._id === state.auth.userId)
               ].cart = action.payload;
               state.dataLoaded = true;
               state.isLoading = false;
          },
          userCartRemoveItemFailed: (state, action) => {
               state.error = action.payload;
          },
     },
});

const { reducer: usersReducer, actions } = usersSlice;
const {
     usersRequested,
     usersReceived,
     usersRequestFailed,
     authRequestFailed,
     authRequestSuccess,
     authErrorReseted,
     userLoggedOut,
     userUpdateSuccessed,
     userCartAddItemReceived,
     userCartAddItemFailed,
     userCartRemoveItemFailed,
     userCartRemoveItemReceived,
} = actions;

const authRequested = createAction("users/authRequested");
const userUpdateFailed = createAction("users/userUpdateFailed");
const userUpdateRequested = createAction("users/userUpdateRequested");

export const addItemToUserCart = (payload) => async (dispatch) => {
     try {
          const { cart } = await userService.updateCart(payload);
          dispatch(userCartAddItemReceived(cart));
     } catch (error) {
          userCartAddItemFailed(error.message);
     }
};

export const removeItemFromUserCart = (payload) => async (dispatch) => {
     try {
          const { cart } = await userService.updateCart(payload);
          dispatch(userCartRemoveItemReceived(cart));
     } catch (error) {
          userCartRemoveItemFailed(error.message);
     }
};

export const login =
     ({ payload }) =>
     async (dispatch) => {
          const { email, password } = payload;
          dispatch(authRequested());
          try {
               const data = await authService.login({ email, password });
               localStorageService.setTokens(data);
               dispatch(authRequestSuccess({ userId: data.userId }));
          } catch (error) {
               const { code, message } = error.response.data.error;
               if (code === 400) {
                    const errorMessage = generetaAuthError(message);
                    dispatch(authRequestFailed(errorMessage));
               } else {
                    dispatch(authRequestFailed(error.message));
               }
          }
     };

export const signUp = (payload) => async (dispatch) => {
     dispatch(authRequested());
     try {
          const data = await authService.register(payload);
          localStorageService.setTokens(data);
          dispatch(authRequestSuccess({ userId: data.userId }));
     } catch (error) {
          const { code, message } = error.response.data.error;
          if (code === 400) {
               const errorMessage = generetaAuthError(message);
               dispatch(authRequestFailed(errorMessage));
          } else {
               dispatch(authRequestFailed(error.message));
          }
     }
};

export const authErrorReset = () => (dispatch) => {
     dispatch(authErrorReseted());
};

export const logOut = () => (dispatch) => {
     localStorageService.removeAuthData();
     dispatch(userLoggedOut());
};

export const loadUsersList = () => async (dispatch) => {
     dispatch(usersRequested());
     try {
          const { content } = await userService.get();
          dispatch(usersReceived(content));
     } catch (error) {
          dispatch(usersRequestFailed(error.message));
     }
};

export const updateUser = (payload) => async (dispatch) => {
     dispatch(userUpdateRequested());
     try {
          const { content } = await userService.update(payload);
          dispatch(userUpdateSuccessed(content));
     } catch (error) {
          dispatch(userUpdateFailed(error.message));
     }
};

export const getUsersList = () => (state) => state.users.entities;
export const getCurrentUserData = () => (state) => {
     return state.users.entities
          ? state.users.entities.find((u) => u._id === state.users.auth.userId)
          : null;
};
export const getUserById = (userId) => (state) => {
     if (state.users.entities) {
          return state.users.entities.find((u) => u._id === userId);
     }
};
export const getIsLoggedIn = () => (state) => state.users.isLoggedIn;
export const getIsAdmin = () => (state) => {
     return state.users.entities
          ? state.users.entities.find((u) => u._id === state.users.auth.userId)
                 .isAdmin
          : false;
};
export const getDataStatus = () => (state) => state.users.dataLoaded;
export const getUsersLoadingStatus = () => (state) => state.users.isLoading;
export const getCurrentUserId = () => (state) => state.users.auth.userId;
export const getAuthErrors = () => (state) => state.users.error;
export default usersReducer;
