import React from 'react'
import { Button } from 'react-bootstrap'
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface ButtonProps {
    label: string;
    to: string;
}

export const HobbiesBtn: FC<ButtonProps> = ({label, to}) => {
    const navigate = useNavigate();
    const goTo = () => {
        navigate(to);
    }
    
  return (
    <>
    <Button variant="outline-primary" onClick={goTo}>{label}</Button>
    </>
  )
}

