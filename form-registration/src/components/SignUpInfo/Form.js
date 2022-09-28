import React from "react";



const Form = () => {

  return(
     <div>
        <input name='phone' type='number' placeholder='Enter your phone' />
        <input name='email' type='text' placeholder='Enter your email' />
        <input name='password' type='password' placeholder='Enter your password' />
        <input name='repeatPassword' type='password' placeholder='Repeat your password' />
     </div>
  )
}


export default Form