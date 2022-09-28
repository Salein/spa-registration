import React from "react";
import styled from 'styled-components';
import BreadCrumbs from "./BreadCrumbs";
import Form from "./Form";


const SignUpInfo = () => {


  return(
    <div>
      <BreadCrumbs />
      <form>
        <Form />
        <button>Next</button>
      </form>
    </div>
  )
}

export default SignUpInfo