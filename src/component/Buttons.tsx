import React from 'react'
import { Button } from 'react-bootstrap'
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface ButtonProps {
    label: string;
    to: string;
    cssscript: string;
}

export const Buttons: FC<ButtonProps> = ({label, to, cssscript}) => {
    const navigate = useNavigate();
    const goTo = () => {
        navigate(to);
    }
    
  return (
    <>
    <Button variant="primary" size="lg" className={cssscript} onClick={goTo}>{label}</Button>
    </>
  )
}

