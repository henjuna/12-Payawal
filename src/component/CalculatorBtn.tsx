import React, { FC } from 'react'
import { Button } from 'react-bootstrap'

interface CalcProps {
    value: string;
    color: string;
    dataFromButton: (data: string) => void;
}

export const CalculatorBtn: FC<CalcProps> = ({value, color, dataFromButton}) => {
    const passData = (): void => {
        dataFromButton(value);
    }

  return (  
        <Button variant={color} className='btns' onClick={passData}>{value}</Button>
  )
}
