import {SalaryActionTypes} from "./types";
import {
  CLICK_HIDE_MODAL,
  CLICK_SHOW_MODAL,
  MOUSE_HIDE_MODAL,
  MOUSE_SHOW_MODAL,
  SALARY_PERIOD,
  TOGGLE_CHECKBOX
} from "../../utils/constants";

export type SalaryState = {
  salaryPeriod: string,
  modalIsActive: string,
  ndfl: boolean
};

const initialState: SalaryState = {
  salaryPeriod: SALARY_PERIOD.MONTHLY,
  modalIsActive: MOUSE_HIDE_MODAL,
  ndfl: true,
};

export const salaryReducer = (
  state = initialState,
  action: SalaryActionTypes,
): SalaryState => {
  switch (action.type) {
    case SALARY_PERIOD.MONTHLY:
      return {
        ...state,
        salaryPeriod: action.type
      };
    case SALARY_PERIOD.DAILY:
      return {
        ...state,
        salaryPeriod: action.type
      };
    case SALARY_PERIOD.HOURLY:
      return {
        ...state,
        salaryPeriod: action.type
      };
    case SALARY_PERIOD.MROT:
      return {
        ...state,
        salaryPeriod: action.type
      };
    case TOGGLE_CHECKBOX.ON_CHECKBOX:
      return {
        ...state,
        ndfl: true
      };
    case TOGGLE_CHECKBOX.OFF_CHECKBOX:
      return {
        ...state,
        ndfl: false
      };
    case CLICK_SHOW_MODAL:
      return {
        ...state,
        modalIsActive: action.type
      };
    case CLICK_HIDE_MODAL:
      return {
        ...state,
        modalIsActive: action.type
      };
    case MOUSE_SHOW_MODAL:
      return {
        ...state,
        modalIsActive: action.type
      };
    case MOUSE_HIDE_MODAL:
      return {
        ...state,
        modalIsActive: action.type
      };
  }

  return state;
};
