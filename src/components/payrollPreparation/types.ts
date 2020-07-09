import {
  SALARY_PERIOD,
  TOGGLE_CHECKBOX,
  CLICK_SHOW_MODAL,
  CLICK_HIDE_MODAL,
  MOUSE_SHOW_MODAL,
  MOUSE_HIDE_MODAL
} from "../../utils/constants";

export const SALARY_MONTHLY_PERIOD = SALARY_PERIOD.MONTHLY;
type  SalaryMonthlyPeriod = {
  type: typeof SALARY_MONTHLY_PERIOD
};

export const SALARY_DAILY_PERIOD = SALARY_PERIOD.DAILY;
type  SalaryDailyPeriod = {
  type: typeof SALARY_DAILY_PERIOD
};

export const SALARY_HOURLY_PERIOD = SALARY_PERIOD.HOURLY;
type  SalaryHourlyPeriod = {
  type: typeof SALARY_HOURLY_PERIOD
};

export const SALARY_MROT_PERIOD = SALARY_PERIOD.MROT;
type  SalaryMrotPeriod = {
  type: typeof SALARY_MROT_PERIOD
};

export const ON_CHECKBOX = TOGGLE_CHECKBOX.ON_CHECKBOX;
type OnCheckbox = {
  type: typeof ON_CHECKBOX
};
export const OFF_CHECKBOX = TOGGLE_CHECKBOX.OFF_CHECKBOX;
type OffCheckbox = {
  type: typeof OFF_CHECKBOX
};

export const MODAL_CLICK_IS_ACTIVE = CLICK_SHOW_MODAL;
type ClickShowModal = {
  type: typeof MODAL_CLICK_IS_ACTIVE
}
export const MODAL_CLICK_NOT_ACTIVE = CLICK_HIDE_MODAL;
type ClickHideModal = {
  type: typeof MODAL_CLICK_NOT_ACTIVE
}

export const MODAL_MOUSE_IS_ACTIVE = MOUSE_SHOW_MODAL;
type MouseShowModal = {
  type: typeof MODAL_MOUSE_IS_ACTIVE
}
export const MODAL_MOUSE_NOT_ACTIVE = MOUSE_HIDE_MODAL;
type MouseHideModal = {
  type: typeof MODAL_MOUSE_NOT_ACTIVE
}

export type SalaryActionTypes =
  | SalaryMonthlyPeriod
  | SalaryDailyPeriod
  | SalaryHourlyPeriod
  | SalaryMrotPeriod
  | OnCheckbox
  | OffCheckbox
  | ClickShowModal
  | ClickHideModal
  | MouseShowModal
  | MouseHideModal;