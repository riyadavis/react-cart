import { INCREMENT, DECREMENT } from "../Actions/type";
// import { decrementHandler } from "../Actions/action";

const initialState = {
  cart: [
    {
      id: 1,
      product: "Tshirt",
      category: "casual",
      price: 300,
      qty: 1
    },
    {
      id: 2,
      product: "Shirt",
      category: "casual",
      price: 600,
      qty: 2
    }
  ]
};
function incrementHandler(state, data) {
  let newState = { ...state };
  const index = newState.cart.findIndex(i => i.id === data.id);
  if (index > -1) {
    newState.cart[index].qty++;
  } else {
    let newObject = { ...data, qty: 1 };
    newState.cart.push(newObject);
  }
  //   console.log(newState);
  return newState;
}
function decrementHandler(state, id) {
  let newState = { ...state };
  const index = newState.cart.findIndex(i => i.id === id);
  if (state.cart[index].qty > 1) {
    newState.cart[index].qty--;
  } else {
    newState.cart = newState.cart.filter(c => c.id !== id);
  }
  return newState;
}
function storeReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return incrementHandler(state, action.payload);
    case DECREMENT:
      return decrementHandler(state, action.payload);
    default:
      return state;
  }
}

export default storeReducer;
