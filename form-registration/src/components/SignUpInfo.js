import React from "react";
import styled from 'styled-components';



const SignUpInfo = () => {
const Form = styled.form({
  display: 'grid',
  gap: 50
})

  return(
    <div>
      <div>
        <a href='#'>SignUpInfo</a> -
        <a href='#'>PersonalInfo</a>
      </div>
      <Form>
        <input name='phone' type='number' placeholder='Enter your phone' />
        <input name='email' type='text' placeholder='Enter your email' />
        <input name='password' type='password' placeholder='Enter your password' />
        <input name='password' type='password' placeholder='Repeat your password' />
        <button>Next</button>
      </Form>
    </div>
  )
}

export default SignUpInfo