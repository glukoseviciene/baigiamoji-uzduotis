import React from 'react'
import Button from '../button/Button'
import fbLogo from "../../Assets/fb.svg";
import googleLogo from '../../Assets/google.svg'
import Form from '../form/Form';
import { StyledRegistrationForm } from './RegistrationForm.style';

function RegistrationForm() {
  return (
      <StyledRegistrationForm>
        <div className='form'>
        <h1>Get Started</h1>
        <p>Already have an account?</p>
        <a href="#logo">Log In</a>
        <div className='social-media-buttons'>
        <Button logo={googleLogo} textColor='#000' backgroundColor='white' borderColor='#d3d3d3'/>
        <Button logo={fbLogo} textColor="white" backgroundColor="#4f70b5" borderColor='#4f70b5'/>
        </div>
        <h2>Or</h2>
        <Form/>
        </div>
      </StyledRegistrationForm>
  )
}

export default RegistrationForm