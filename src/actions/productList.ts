import { Product } from 'models/product';

interface StateModel {
  products: Array<Product> ;
  categories: Array<string> ;
  loading: boolean;
  showingProducts:Array<Product>
}

export enum ActionTypes {
  SET_SHOW_ALL_PRODUCTS = 'SET_SHOW_ALL_PRODUCTS',
  SET_SHOWING_PRODUCTS = 'SET_SHOWING_PRODUCTS',
}
  

interface Action {
  type: string;
  payload?: any;
}

export const ProductListReducer = (state: StateModel, action: Action) => {
  switch (action.type) {
    case ActionTypes.SET_SHOW_ALL_PRODUCTS:
      return {
        ...state,
        showingProducts: state.products,
      };
    case ActionTypes.SET_SHOWING_PRODUCTS:
      return {
        ...state,
        showingProducts: action.payload?.showingProducts,
      };
    default:
      console.debug(action);
      throw new Error();
  }
};
