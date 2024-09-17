// import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

// const pizzaAdapter = createEntityAdapter({
//   selectedId: (cart) => cart.pizzaId,
// });

// const initialState = pizzaAdapter.getInitialState({
//   cart: [],
// });

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addItem(state, action) {
//       pizzaAdapter.addOne(state, action.payload);
//     },
//     deleteItem(state, action) {
//       pizzaAdapter.removeOne(state, action.payload);
//     },
//     increaseItemQuantity(state, action) {
//       const item = state.entities[action.payload];
//       item.quantity++;
//       item.totalPrice = item.quantity * item.unitPrice;
//     },
//     decreaseItemQuantity(state, action) {
//       const item = state.entities[action.payload];

//       item.quantity--;
//       item.totalPrice = item.quantity * item.unitPrice;
//       if (item.quantity === 0) {
//         cartSlice.caseReducers.deleteItem(state, action);
//       }
//     },
//     clearCart(state) {
//       pizzaAdapter.removeAll(state);
//     },
//   },
// });
// const {
//   selectAll: selectAllItems,
//   selectById: selectItemById,
//   // selectIds: selectItemIds,
// } = pizzaAdapter.getSelectors((state) => state.cart);

// export const getCart = (state) => selectAllItems(state);
// export const getTotalPrice = (state) =>
//   selectAllItems(state).reduce((cur, item) => cur + item.totalPrice, 0);
// export const getQuantityById = (id) => (state) =>
//   selectItemById(state, id)?.quantity ?? 0;
// export const getTotalCartQuantity = (state) =>
//   selectAllItems(state).reduce((sum, item) => sum + item?.quantity, 0);
// export const getTotalCartPrice = (state) =>
//   selectAllItems(state).reduce((sum, item) => sum + item?.totalPrice, 0);

// export const {
//   addItem,
//   decreaseItemQuantity,
//   increaseItemQuantity,
//   deleteItem,
//   clearCart,
// } = cartSlice.actions;
// export default cartSlice.reducer;
