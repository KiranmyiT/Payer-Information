import * as types from "./actionType";
import axios from "axios";

const getPayers = (payers) => ({
  type: types.GET_PAYERS,
  payload: payers,
});

const payerDeleted = () => ({
  type: types.DELETE_PAYER,
});

const payerAdded = () => ({
  type: types.ADD_PAYER,
});

const payerUpdated = () => ({
  type: types.UPDATE_PAYER,
});

const getPayer = (payer) => ({
  type: types.GET_SINGLE_PAYER,
  payload: payer,
});

export const loadPayers = () => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}`)
      .then((resp) => {
        dispatch(getPayers(resp.data));
      })
      .catch((error) => console.log(error));
  };
};

export const deletePayer = (id) => {
  return function (dispatch) {
    axios
      .delete(`${process.env.REACT_APP_API}/${id}`)
      .then(() => {
        dispatch(payerDeleted());
        dispatch(loadPayers());
      })
      .catch((error) => console.log(error));
  };
};

export const addPayer = (payer) => {
  return function (dispatch) {
    axios
      .post(`${process.env.REACT_APP_API}`, payer)
      .then((resp) => {
        dispatch(payerAdded());
        payer.edit = resp.data.id;
        payer.delete = resp.data.id;
        dispatch(updatePayer(payer, resp.data.id));
        dispatch(loadPayers());
      })
      .catch((error) => console.log(error));
  };
};

export const getSinglePayer = (id) => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}/${id}`)
      .then((resp) => {
        dispatch(getPayer(resp.data));
      })
      .catch((error) => console.log(error));
  };
};

export const updatePayer = (payer, id) => {
  return function (dispatch) {
    axios
      .put(`${process.env.REACT_APP_API}/${id}`, payer)
      .then(() => {
        dispatch(payerUpdated(id));
        dispatch(loadPayers());
      })
      .catch((error) => console.log(error));
  };
};
