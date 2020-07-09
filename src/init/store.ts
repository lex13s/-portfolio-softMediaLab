import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import { middleware } from "./middleware";
import { rootReducer} from "./rootReducer";

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));