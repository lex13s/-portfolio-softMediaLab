import React, { ReactNode, useEffect, useRef } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../../init/rootReducer";
import {SalaryState} from "../../payrollPreparation/salaryReducer";
import {CLICK_HIDE_MODAL, CLICK_SHOW_MODAL, MOUSE_SHOW_MODAL} from "../../../utils/constants";

export function Dropdown(props: {
  classes: {
    title?: string,
    menu?: string
  },
  children?: ReactNode,
  menu: ReactNode
}) {

  const {modalIsActive} = useSelector<AppState, SalaryState>(state => state.salary);
  const dispatch = useDispatch();

  const dropdownRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: Event): void => {
    const target = event.target as (HTMLDivElement | null);
    const menu = menuRef.current as HTMLDivElement || null;
    const dropdown = dropdownRef.current as HTMLButtonElement || null;

    if (!menu.contains(target) && !dropdown.contains(target)) {
      dispatch( {type: CLICK_HIDE_MODAL})
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  return <button className='dropdown-wrap' ref={dropdownRef}>
    <div className={ (modalIsActive === MOUSE_SHOW_MODAL || modalIsActive === CLICK_SHOW_MODAL) ? `${props.classes.title} ${props.classes.title}--active` : props.classes.title}
         onClick={() => {

           if(modalIsActive === MOUSE_SHOW_MODAL || CLICK_HIDE_MODAL) {
             dispatch( {type: CLICK_SHOW_MODAL})
           }
           if(modalIsActive === CLICK_SHOW_MODAL){
             dispatch( {type: CLICK_HIDE_MODAL})
           }

         }}
    >
      {props.children}
    </div>

    <div className={ !(modalIsActive === MOUSE_SHOW_MODAL || modalIsActive === CLICK_SHOW_MODAL) ? `${props.classes.menu} ${props.classes.menu}--hide` : props.classes.menu} ref={menuRef}>
      {props.menu}
    </div>

  </button>;
}