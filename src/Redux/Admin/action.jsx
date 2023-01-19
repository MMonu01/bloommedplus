import axios from "axios";
import * as types from "./actionTypes";

const url = "http://localhost:1010/products";

const getMedRequest = () => {
  return {
    type: types.GET_MED_REQUEST,
  };
};

const getMedSuccess = (payload) => {
  return {
    type: types.GET_MED_SUCCESS,
    payload,
  };
};

const getMedError = () => {
  return {
    type: types.GET_MED_ERRROR,
  };
};

const addMedRequest = () => {
  return {
    type: types.ADD_MED_REQUEST,
  };
};
const addMedSuccess = (payload) => {
  return {
    type: types.ADD_MED_SUCCESS,
    payload,
  };
};
const addMedError = () => {
  return {
    type: types.ADD_MED_ERRROR,
  };
};

const deleteMedRequest = () => {
  return {
    type: types.DELETE_MED_REQUEST,
  };
};

const deleteMedSuccess = (payload) => {
  return {
    type: types.DELETE_MED_SUCCESS,
    payload,
  };
};

const deleteMedError = () => {
  return {
    type: types.DELETE_MED_ERRROR,
  };
};

const updateMedRequest = () => {
  return {
    type: types.UPDATE_MED_REQUEST,
  };
};

const updateMedSuccess = (payload) => {
  return {
    type: types.UPDATE_MED_SUCCESS,
    payload,
  };
};

const updateMedFailure = () => {
  return {
    type: types.UPDATE_MED_ERRROR,
  };
};

const statusMedRequest = () => {
  return {
    type: types.STATUS_MED_REQUEST,
  };
};

const statusMedSuccess = (payload) => {
  return {
    type: types.STATUS_MED_REQUEST,
    payload,
  };
};

const statusMedFailure = () => {
  return {
    type: types.STATUS_MED_ERRROR,
  };
};

const getMeds = (dispatch) => {
  console.log("getTodos calling");
  dispatch(getMedSuccess);
  return axios
    .get(url)
    .then((r) => {
      dispatch(getMedSuccess(r.data));
    })
    .catch((e) => {
      dispatch(getMedError());
    });
};

const addMeds = (payload) => (dispatch) => {
  if (payload) {
    const payloadObj = {
      name: payload,
      status: false,
    };
    dispatch(addMedRequest());
    return axios
      .post(url, payloadObj)
      .then((r) => {
        dispatch(addMedSuccess());
      })
      .catch((e) => {
        dispatch(addMedError());
      });
  }
};

const deleteMeds = (id) => async (dispatch) => {
  dispatch(deleteMedRequest());
  return await axios
    .delete(`url/${id}`)
    .then((r) => {
      dispatch(deleteMedSuccess());
    })
    .catch((e) => {
      dispatch(deleteMedError());
    });
};

const updateMeds = (payload) => async (dispatch) => {
  const { id } = payload;
  console.log("id at action:", id);
  dispatch(updateMedRequest());
  return await axios.put(`url/${id}`, payload);
  console.log(res);
  dispatch(updateMedSuccess(res.data)).then(())
};
