import {actionTypes} from './action'

export const addToCart = (product) => ({
    type: actionTypes.addToCart,
    payload: product,
});
  
export const removeFromCart = (product) => ({
    type: actionTypes.removeFromCart,
    payload: product
});

export const addItemQty = (product) => ({
    type: actionTypes.addItemQty,
    payload: product
});

export const removeItemQty = (product) => ({
    type: actionTypes.removeItemQty,
    payload: product
});

export const addWishlist = (product) => ({
    type: actionTypes.addWishlist,
    payload: product
});
  
