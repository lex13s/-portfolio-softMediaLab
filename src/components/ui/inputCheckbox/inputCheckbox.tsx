import React, { FC} from "react";
import "./style.scss";

type PropsType = {
  name: string,
  onText: string,
  offText: string,
  checked: boolean,
  toggleCheckbox:any,
  action: {
    ON_CHECKBOX: string,
    OFF_CHECKBOX: string
  },
  children?: never
}

export const InputCheckbox: FC<PropsType> = ({
  name,
  onText,
  offText,
  checked,
  toggleCheckbox,
  action
}: PropsType) => {

  return (
    <div className="checkbox-wrapper">
      <button
        className={`${!checked && 'checkbox__button--active'} checkbox__button`}
        onClick={(e) => toggleCheckbox(action.OFF_CHECKBOX)}
      >
        {onText}
      </button>

      <div className="custom-checkbox">
        <input type="checkbox" checked={checked} id={name} name={name}
               onChange={(e)=> {
                 const toggleAction = e.target.checked ? action.ON_CHECKBOX : action.OFF_CHECKBOX;
                 toggleCheckbox(toggleAction);
               }}
        />
        <label htmlFor={name}></label>
      </div>

      <button
        className={`${checked && 'checkbox__button--active'} checkbox__button`}
        onClick={(e) => toggleCheckbox(action.ON_CHECKBOX)}
      >
        {offText}
      </button>
    </div>
  );
};
