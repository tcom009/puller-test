import { Product } from 'models/product';

interface StateModel {
  products: Array<Product> ;
  categories: Array<string> ;
  loading: boolean;
}

export enum ActionTypes {
  SET_DATA = 'SET_DATA',
  SET_PRODUCTS = 'SET_PRODUCTS',
}

interface Action {
  type: string;
  payload?: any;
}

export const ProductListReducer = (state: StateModel, action: Action) => {
  switch (action.type) {
    case ActionTypes.SET_DATA:
      return {
        ...state,
        categories: action.payload?.categories,
        products: action.payload?.products,
      };
    case ActionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload?.products,
      };
    default:
      console.debug(action);
      throw new Error();
  }
};
