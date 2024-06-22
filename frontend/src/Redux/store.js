import {createStore, combineReducers, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage' 
import thunk from 'redux-thunk';
import {userReducer,adminReducer, themeReducer, landingPageReducer} from './reducers';

const persistCoonfig = {
  key: 'persist-root',
  storage: storage,
};

const rootReducer = combineReducers({
  landingPageReducer,
  userReducer,
  adminReducer,
  themeReducer,
});

const persistedReducer = persistReducer(persistCoonfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);
