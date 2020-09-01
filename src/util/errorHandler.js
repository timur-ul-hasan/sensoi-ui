import { GET_ALERTS, GET_ERRORS } from "../routes/auth/type";

const error = err => {
  let arrObj = [];

  if (err.response && err.response.status) {
    let status = err.response.status;
    if (status > 399 && status < 500) {
      // INTERNAL SERVER ERROR
      if (status === 404) {
        arrObj.push({
          type: GET_ALERTS,
          payload: {
            type: "error",
            msg: err.response.data.messages
          }
        });
      } else {
        if (err.response.data && err.response.data.data) {
          arrObj.push({
            type: GET_ERRORS,
            payload: err.response.data.data
          });
        } else {
          arrObj.push({
            type: GET_ALERTS,
            payload: {
              type: "error",
              msg: err.response.data.messages
            }
          });
        }
      }
    }
    if (status > 499 && status < 600) {
      // CLIENT ERROR
      arrObj.push({
        type: GET_ALERTS,
        payload: {
          type: "error",
          msg: "Network or Server error."
        }
      });
    }
    return arrObj;
  }

  //   if (err.response && err.response.data && err.response.data.data) {
  //     const { data } = err.response.data;
  //     if (err.response.status && err.response.status === 404) {
  //       arrObj.push({
  //         type: GET_ALERTS,
  //         payload: {
  //           type: "danger",
  //           msg: data
  //         }
  //       });
  //     } else {
  //       dispatch({
  //         type: GET_ERRORS,
  //         payload: err.response.data.data
  //       });
  //     }
  //   } else {
  //     dispatch({
  //       type: GET_ERRORS,
  //       payload: err.response.data.data
  //     });
  //   }
};

export default error;
