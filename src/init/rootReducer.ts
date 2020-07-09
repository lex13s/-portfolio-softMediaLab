// Core
import { combineReducers } from 'redux';

// Reducers
import { salaryReducer as salary } from '../components/payrollPreparation/salaryReducer';

export const rootReducer = combineReducers({
  salary,
});

export type AppState = ReturnType<typeof rootReducer>;
