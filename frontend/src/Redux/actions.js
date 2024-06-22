export const SetIsVisible = 'SetIsVisible';
export const SetIsClosed = 'SetIsClosed';
export const SetIsSubmit = 'SetIsSubmit';
export const SetLogin = 'SetLogin';
export const SetLoginWindow = 'SetLoginWindow';
export const SetToken = 'SetToken';
export const SetId = 'SetId';
export const SetAdminLogin = 'SetAdminLogin';
export const SetAdminToken = 'SetAdminToken';
export const SetAdminId = 'SetAdminId';
export const SetPrimaryColor = 'SetPrimaryColor';
export const SetSecondaryColor = 'SetSecondaryColor';

// global user

export const setIsVisible = val => dispatch => {
  dispatch({
    type: SetIsVisible,
    payload: val,
  });
};
export const setIsClosed = val => dispatch => {
  dispatch({
    type: SetIsClosed,
    payload: val,
  });
};
export const setIsSubmit = val => dispatch => {
  dispatch({
    type: SetIsSubmit,
    payload: val,
  });
};
export const setLogin = val => dispatch => {
  dispatch({
    type: SetLogin,
    payload: val,
  });
};
export const setLoginWindow = val => dispatch => {
  dispatch({
    type: SetLoginWindow,
    payload: val,
  });
};
export const setToken = val => dispatch => {
  dispatch({
    type: SetToken,
    payload: val,
  });
};
export const setId = val => dispatch => {
  dispatch({
    type: SetId,
    payload: val,
  });
};

//Global Admin
export const setAdminLogin = val => dispatch => {
  dispatch({
    type: SetAdminLogin,
    payload: val,
  });
};

export const setAdminToken = val => dispatch => {
  dispatch({
    type: SetAdminToken,
    payload: val,
  });
};
export const setAdminId = val => dispatch => {
  dispatch({
    type: SetAdminId,
    payload: val,
  });
};

//Global theme
export const setPrimaryColor = val => dispatch => {
  dispatch({
    type: SetPrimaryColor,
    payload: val,
  });
};
export const setSecondaryColor = val => dispatch => {
  dispatch({
    type: SetSecondaryColor,
    payload: val,
  });
};
