import { createContext, useReducer } from "react";

const initialState = {
  item: [],
  totalAmount: 0,
};

const itemReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existItemIndex = state.item.findIndex(
      (item) => item.id === action.item.id
    );
    const existItem = state.item[existItemIndex];

    let updatedItems;
    if (existItem) {
      const updatedItem = {
        ...existItem,
        amount: existItem.amount + action.item.amount,
      };
      updatedItems = [...state.item];
      updatedItems[existItemIndex] = updatedItem;
    } else {
      updatedItems = state.item.concat(action.item);
    }

    return {
      item: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const existItemIndex = state.item.findIndex(
      (item) => item.id === action.id
    );
    const existItem = state.item[existItemIndex];

    const updatedTotalAmount = state.totalAmount - existItem.price;

    let updatedItems;
    if (existItem.amount === 1) {
      updatedItems = state.item.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existItem, amount: existItem.amount - 1 };
      updatedItems = [...state.item];
      updatedItems[existItemIndex] = updatedItem;
    }
    return {
      item: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return initialState;
};

export const ItemContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export const ItemContextProvider = (props) => {
  const [itemState, dispatchItem] = useReducer(itemReducer, initialState);

  const addItemHandler = (item) => {
    dispatchItem({ type: "ADD_ITEM", item });
  };

  const removeItemHandler = (id) => {
    dispatchItem({ type: "REMOVE_ITEM", id });
  };

  const itemCtx = {
    items: itemState.item,
    totalAmount: itemState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <ItemContext.Provider value={itemCtx}>
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemContextProvider;
