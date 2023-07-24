
import React, {useState} from 'react'
import { StyledForm } from './Form.style'
import { ReactComponent as User }from '../../Assets/user.svg'
import { ReactComponent as Mail }from '../../Assets/mail.svg'
import { ReactComponent as Lock }from '../../Assets/padlock.svg'


const RegistrationForm = ({ render }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!name.trim()) {
      validationErrors.name = 'Name is required';
    }

    if (!email.trim()) {
      validationErrors.email = 'Email is required';
    }

    if (!password.trim()) {
      validationErrors.password = 'Password is required';
    }

    if (Object.keys(validationErrors).length === 0) {
      // Form submission logic here (e.g., API call, etc.)
      alert('Registration successful!');
      setName('');
      setEmail('');
      setPassword('');
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return render({
    name,
    email,
    password,
    errors,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
  });
};

function Form() {
  return (
    <StyledForm>
      <RegistrationForm
        render={({ name, email, password, errors, handleNameChange, handleEmailChange, handlePasswordChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className='input'>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" value={name} onChange={handleNameChange} placeholder='Joy Shaheb'/>
              {errors.name && <span>{errors.name}</span>}
              <User />
            </div>

            <div className='input'>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" value={email} onChange={handleEmailChange} placeholder='abc@gmail.com'/>
              {errors.email && <span>{errors.email}</span>}
            <Mail/>
            </div>

            <div className='input'>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" value={password} onChange={handlePasswordChange} placeholder='•••••••'/>
              {errors.password && <span>{errors.password}</span>}   <Lock/>
            </div>

            <button type="submit">Submit</button>
          </form>
        )}
      />
      </StyledForm>
   
  )
}

export default Form