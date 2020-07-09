import React, {FC} from 'react';

type PropsType = {
  id: string,
  checked: boolean,
  name: string,
  children: string,
  handler: (e: any) => void,
}

export const InputRadio: FC<PropsType> = ({
    id,
    checked,
    name,
    children,
    handler
  }: PropsType) => {
  return (
    <div className='input-radio'>
      <input type="radio" id={id} name={name} checked={checked} onChange={handler}/>
      <label className="input-radio__title" htmlFor={id}>{children}</label>
    </div>
  )
};