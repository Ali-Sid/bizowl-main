import {SetIsVisible, SetIsClosed, SetIsSubmit, SetLogin, SetLoginWindow, SetToken, SetId,SetAdminLogin, SetAdminToken,SetAdminId, SetPrimaryColor, SetSecondaryColor} from './actions';

const landingPageState = {
  isVisible: false,
  isClosed: false,
  isSubmit: false,
};
const userState = {
  login: false,
  loginWindow: false,
  token: '',
  id: '',
};
const adminState = {
  adminLogin: false,
  adminToken: '',
  adminId: '',
};

const themeState = {
  primaryColor: '#Ffdb4e',
  secondaryColor: '#000000',
};


export function landingPageReducer(state = landingPageState, action) {
  switch (action.type) {
    case SetIsVisible:
      return {...state, isVisible: action.payload};
    case SetIsClosed:
      return {...state, isClosed: action.payload};
    case SetIsSubmit:
      return {...state, isSubmit: action.payload};
    default:
      return state;
  }
}
export function userReducer(state = userState, action) {
  switch (action.type) {
    case SetLogin:
      return {...state, login: action.payload};
    case SetLoginWindow:
      return {...state, loginWindow: action.payload};
    case SetToken:
      return {...state, token: action.payload};
    case SetId:
      return {...state, id: action.payload};
    default:
      return state;
  }
}
export function adminReducer(state = adminState, action) {
  switch (action.type) {
    case SetAdminLogin:
      return {...state, adminLogin: action.payload};
    case SetAdminToken:
      return {...state, adminToken: action.payload};
    case SetAdminId:
      return {...state, adminId: action.payload};
    default:
      return state;
  }
}
export function themeReducer(state = themeState, action) {
  switch (action.type) {
    case SetPrimaryColor:
      return {...state, primaryColor: action.payload};
    case SetSecondaryColor:
      return {...state, secondaryColor: action.payload};
    default:
      return state;
  }
}
