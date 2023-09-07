

export const validateUserSignUp = (userDetails) => {
  const { email,  firstName, lastName  } = userDetails;
  const errors  = [];


  if(!email){
    errors.push("Please enter your email.")
  } else if( !validateEmail(email)){
    errors.push("Email format is incorrect.")
  }

  if(!firstName){
    errors.push("Please enter your first name.")
  }
  if(!lastName){
    errors.push("Please enter your last name.")
  }

  return {
    errMsg: errors,
    errLength: errors.length
  }
}


export const validateUserLogin = (userDetails) => {
  const { email,  password  } = userDetails;
  const errors  = [];


  if(!email){
    errors.push("Please enter your email.")
  } else if( !validateEmail(email)){
    errors.push("Email format is incorrect.")
  }

  if(!password){
    errors.push("Please enter your password.")
  } else if(password.length < 6) {
    errors.push("Incorrect password.")

  }

  return {
    errMsg: errors,
    errLength: errors.length
  }
}


export const validateUserForgotPassword = (userDetails) => {
  const { email } = userDetails;
  const errors  = [];


  if(!email){
    errors.push("Please enter your email.")
  } else if( !validateEmail(email)){
    errors.push("Email format is incorrect.")
  }

  return {
    errMsg: errors,
    errLength: errors.length
  }
}

export const validateResetUserPassword = (userDetails) => {
    const { password,  cf_password} = userDetails;
    const errors  = [];
  
  
    if(!password){
        errors.push("Please enter a password.")
    } else if(password.length < 6) {
        errors.push("Please password must be 6 chars.")
    } else if (!/[A-Z]/.test(password)) {
        errors.push("Please password must contain a capital letter")
    } else if (!/[0-9]/.test(password)) {
        errors.push("Please password must contain a number")
    } else if( password !== cf_password){
        errors.push("passwords do not match")
    }
  
    return {
      errMsg: errors,
      errLength: errors.length
    }
  }





export function validateEmail(email ) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}