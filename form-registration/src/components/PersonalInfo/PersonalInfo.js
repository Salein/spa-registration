import React from "react";
import styled from 'styled-components';
import Select from "./Select";
import Inputs from "./Inputs";
import CheckBox from "./CheckBox";

const PersonalInfo = () => {
  const Form = styled.form({
    display: 'grid',
    gap: 40
  })
  return(
    <div>
      <Form>
        <Inputs />
        <Select />
        <CheckBox />
        <button>Change SignUp Information</button>
        <button>Complete</button>
      </Form>
    </div>
  )
}

export default PersonalInfo