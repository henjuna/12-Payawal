import React from 'react'
import { Container } from 'react-bootstrap'
import { Buttons } from '../component/Buttons'

export default function JSON() {
  return (
    <Container fluid className="calculator-layout">
    <div>
      
    </div>
    <div className='hobbyBtn'>
      <div className="mb-2">
        <Buttons label='Back to Home' to='/' cssscript={'hobbyBtn'}/>
      </div>
    </div>
  </Container>
  )
}
