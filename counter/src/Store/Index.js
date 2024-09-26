import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  
};

const INITIAL_VALUE = {
  counter: 0,
};

const counterReducer = (store = INITIAL_VALUE, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { counter: store.counter + 1 };
    case 'DECREMENT':
      return { counter: store.counter - 1 };
    case 'RESET':
      return { counter: 0 };
    case 'ADD':
      return { counter: store.counter + Number(action.payload.num) };
    case 'SUBTRACT':
      return { counter: store.counter - Number(action.payload.num) };
    default:
      return store;
  }
};

const persistedReducer = persistReducer(persistConfig, counterReducer);
const counterStore = createStore(persistedReducer);
const persistor = persistStore(counterStore);

export { counterStore, persistor };
