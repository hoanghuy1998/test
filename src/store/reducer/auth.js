import ActionTypes from "../action";
const initialState = {
  showmodal: false,
  getUser: {},
  getOrderDetails: [],
  getProduct: {},
  save: false,
  showModal: false,
  showDelete: false,
  isDelete: false,
  isDeleteProduct: false,
  typeDelete: "",
  delete: "",
  dataDelete: {},
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.OKEY_DELETE_PRODUCT:
      return {
        ...state,
        isDeleteProduct: true,
        showModal: false,
        showDelete: false,
      };
    case ActionTypes.SAVE:
      return {
        ...state,
        save: !state.save,
        showModal: false,
        getProduct: {},
      };
    case ActionTypes.LOAD_DATA_ORDER:
      return {
        ...state,
        showModal: true,
        getOrderDetails: action.getOrderDetails,
        dataUser: action.dataUser,
      };
    case ActionTypes.LOAD_DATA_DESCRIPTION:
      return {
        ...state,
        getProduct: action.getProduct,
        showModal: true,
      };
    case ActionTypes.RESET_ISDLETE:
      return {
        ...state,
        isDelete: false,
        dataDelete: {},
        typeDelete: "",
        isDeleteProduct: false,
      };
    case ActionTypes.OKEY_DELETE:
      return {
        showDelete: false,
        dataDelete: action.dataDelete,
        isDelete: true,
      };
    case ActionTypes.SHOW_DELETE:
      return {
        ...state,
        showDelete: true,
        dataDelete: action.dataDelete,
        typeDelete: action.typeDelete,
      };
    case ActionTypes.HIDDEN_DELETE:
      return {
        ...state,
        showDelete: false,
        dataDelete: {},
      };
    case ActionTypes.SHOW_MODAL:
      return {
        ...state,
        showModal: true,
      };
    case ActionTypes.HIDDEN_MODAL:
      return {
        ...state,
        showModal: false,
      };
    case ActionTypes.SHOW_ORDER:
      return {
        ...state,
        showmodal: true,
      };
    case ActionTypes.HIDDEN_ORDER:
      return {
        ...state,
        showmodal: false,
      };
    case ActionTypes.GET_USER:
      return {
        ...state,
        getUser: action.getUser,
        showModal: true,
      };
    default:
      return { ...state };
  }
};
export default authReducer;
