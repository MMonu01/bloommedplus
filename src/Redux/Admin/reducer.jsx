import * as types from "./actionTypes";

const initialState = {
  meds: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_MED_REQUEST:
      return { ...state, isLoading: true };
    case types.GET_MED_SUCCESS:
      return { ...state, isLoading: false, meds: payload };
    case types.GET_MED_ERRROR:
      return { ...state, isLoading: false, isError: true };

    case types.ADD_MED_REQUEST:
      return { ...state, isLoading: true };
    case types.ADD_MED_SUCCESS:
      return { ...state, isLoading: false };
    case types.ADD_MED_ERRROR:
      return { ...state, isLoading: false, isError: true };

    case types.UPDATE_MED_REQUEST:
      return { ...state, isLoading: true };
    case types.UPDATE_MED_SUCCESS:
      return { ...state, isLoading: false };
    case types.UPDATE_MED_ERRROR:
      return { ...state, isLoading: false, isError: true };

    case types.DELETE_MED_REQUEST:
      return { ...state, isLoading: true };
    case types.DELETE_MED_SUCCESS:
      return { ...state, isLoading: false };
    case types.DELETE_MED_ERRROR:
      return { ...state, isLoading: false, isError: true };

    case types.STATUS_MED_REQUEST:
      return { ...state, isLoading: true };
    case types.STATUS_MED_SUCCESS:
      return { ...state, isLoading: false };
    case types.STATUS_MED_ERRROR:
      return { ...state, isLoading: false, isError: false };
  }

  return state;
};

export { reducer };
