import React, {FC, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {InputRadio} from "../ui/inputRadio/inputRadio";
import {InputCheckbox} from "../ui/inputCheckbox/inputCheckbox";
import { Dialog } from "../ui/dialog/dialog";
import { Dropdown } from "../ui/dropdown/dropdown";
import {
  SALARY_PERIOD,
  CLICK_SHOW_MODAL,
  TOGGLE_CHECKBOX,
  MOUSE_HIDE_MODAL, MOUSE_SHOW_MODAL
} from "../../utils/constants";
import {AppState} from "../../init/rootReducer";
import {SalaryState} from "./salaryReducer";

export const PayrollPreparation: FC = () => {
  const {salaryPeriod, modalIsActive, ndfl} = useSelector<AppState, SalaryState>(state => state.salary);
  const [currentSalary, setCurrentSalary] = useState<number>();
  const salaryCalculation: boolean = !!currentSalary && salaryPeriod === SALARY_PERIOD.MONTHLY;
  const minSalary: boolean = salaryPeriod === SALARY_PERIOD.MROT;

  const [salaryInHands, setSalaryInHands] = useState<string>();
  const [calculationNdfl, setCalculationNdfl] = useState<string>();
  const [ndflAndSalaryInHands, setNdflAndSalaryInHands] = useState<string>();

  const dispatch = useDispatch();


  function onNdflChange(flag: string) {
    dispatch({type: flag});
  }

  function onSalaryPeriodChange(e: Event): void {
    const checked = e.target as (HTMLInputElement | null);
    const name = checked?.name;
    dispatch({type: name});
  }


  function showSalary() {
    if (!currentSalary) return;

    if (!ndfl) {
      const salaryInHands: string = (currentSalary - currentSalary * 13 / 100).toFixed();
      const ndfl: string = (currentSalary * 13 / 100).toFixed();
      const ndflAndSalaryInHands: string = currentSalary.toFixed();

      setSalaryInHands(salaryInHands);
      setCalculationNdfl(ndfl);
      setNdflAndSalaryInHands(ndflAndSalaryInHands);
    } else {
      const salaryInHands: string = currentSalary.toFixed();
      const ndflAndSalaryInHands: string = (100 / 87 * currentSalary).toFixed();
      const ndfl: string = (parseInt(ndflAndSalaryInHands) * 13 / 100).toFixed();

      setSalaryInHands(salaryInHands);
      setCalculationNdfl(ndfl);
      setNdflAndSalaryInHands(ndflAndSalaryInHands);
    }
  }

  function hideDialog() {
    if (modalIsActive === CLICK_SHOW_MODAL) return;
    dispatch( {type: MOUSE_HIDE_MODAL})
  }
  function showDialog() {
    if (modalIsActive === CLICK_SHOW_MODAL) return;
    dispatch( {type: MOUSE_SHOW_MODAL})
  }

  useEffect(() => {
    showSalary();
  });

  return (
    <div className="salary">
      <h5 className="salary__title">Сумма</h5>
      <div className='salary__payroll'>
        <InputRadio id='1' checked={SALARY_PERIOD.MONTHLY === salaryPeriod} name={SALARY_PERIOD.MONTHLY}
                    handler={onSalaryPeriodChange}>Оклад за месяц</InputRadio>

        <div className='salary__min-salary'>
          <InputRadio id='2' checked={SALARY_PERIOD.MROT === salaryPeriod} name={SALARY_PERIOD.MROT}
                      handler={onSalaryPeriodChange}>МРОТ</InputRadio>
          <div className="salary__dropdown" onMouseEnter={ ()=> showDialog()} onMouseLeave={ ()=> hideDialog()}>
            <Dropdown classes={{
              title: 'salary-dialog',
              menu: 'dialog',
            }}
                      menu={<Dialog/>}>
            </Dropdown>
          </div>

        </div>


        <InputRadio id='3' checked={SALARY_PERIOD.DAILY === salaryPeriod} name={SALARY_PERIOD.DAILY}
                    handler={onSalaryPeriodChange}>Оплата за день</InputRadio>

        <InputRadio id='4' checked={SALARY_PERIOD.HOURLY === salaryPeriod} name={SALARY_PERIOD.HOURLY}
                    handler={onSalaryPeriodChange}>Оплата за час</InputRadio>

      </div>
      {!minSalary &&
      <>
        <div className="salary__ndfl">
          <InputCheckbox name='ndfl' onText='Указать с НДФЛ' offText='Без НДФЛ' checked={ndfl} toggleCheckbox={onNdflChange} action={TOGGLE_CHECKBOX}></InputCheckbox>
        </div>
        <div className="salary__total-amount">
          <input className='total-amount__input' type="number" id='total-amount' required
                 onChange={(event) => setCurrentSalary(parseInt(event.target.value))}/>
          <label className='total-amount__label' htmlFor="total-amount"></label>
          <span>&#8381;</span>
          {salaryPeriod === SALARY_PERIOD.DAILY && <span>в день</span>}
          {salaryPeriod === SALARY_PERIOD.HOURLY && <span>в час</span>}
        </div>
      </>
      }

      {salaryCalculation && salaryInHands && calculationNdfl && ndflAndSalaryInHands &&
      <div className="salary__calculation">
        <div className="salary__calculation--item"><div className="salary__calculation-sum">{`${salaryInHands.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} `}&#8381;</div><div className="salary__calculation-text"> сотрудник получает на руки</div></div>
        <div className="salary__calculation--item"><div className="salary__calculation-sum">{`${calculationNdfl.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} `}&#8381;</div><div className="salary__calculation-text">НДФЛ, 13% от оклада</div></div>
        <div className="salary__calculation--item"><div className="salary__calculation-sum">{`${ndflAndSalaryInHands.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} `}&#8381;</div><div className="salary__calculation-text">оклад сотрудника в месяц</div></div>
      </div>
      }
    </div>
  )
}