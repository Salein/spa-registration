import React from "react";
import styled from 'styled-components';


const PersonalInfo = () => {
  const Form = styled.form({
    display: 'grid',
    gap: 40
  })
  return(
    <div>
      <Form>
        <input />
        <input />
        <input type='radio' value='Male' /> <input type='radio' value='Female' />
        <input type='date' /><input type='date' /><input type='date' />
        <select>
          <option>Atlantic</option>
          <option>Pacific</option>
          <option>Indian</option>
          <option>Arctic</option>
        </select>
        <input type='checkbox' /><input type='checkbox' /><input type='checkbox' /><input type='checkbox' />
        <button>Change SignUp Information</button>
        <button>Complete</button>
      </Form>
    </div>
  )
}

export default PersonalInfo