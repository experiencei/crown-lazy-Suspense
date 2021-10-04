import React, { useState } from 'react';
import Custombtn from '../customButton/custombtn';
import Forminput from '../forminput/forminput';
// import { auth , createDocument } from '../../firebase/firebase.utility';
import { SignUpContainer, SignUpTitle } from './signup.styled';
import { signUpwithdisplayname } from '../../redux/user/user.actions.';
import { connect } from "react-redux";

 const Signup = ({ signUpwithdisplayname }) => {
    const [ userCredentials, setUserCredentials] = useState({
        displayName : '',
        email : '',
        password : '',
        confirmpassword : ''
   })

   const {displayName ,email , password ,confirmpassword} = userCredentials;

 const handleSubmit = async e => { 
    e.preventDefault()
    if (password !== confirmpassword) {
        alert("Password don't match");
        return
    }
    signUpwithdisplayname({displayName , email , password })
    
   }

  const handleChange = e => {
    const {name , value} = e.target;

  setUserCredentials({...userCredentials ,[name] : value})
  }


        return (
            <SignUpContainer>
                <SignUpTitle> i do not have an account</SignUpTitle>
                <span>sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={handleSubmit}>
                <Forminput
                    name='displayName'
                    type='text'
                    handleChange={handleChange}
                    value={displayName}
                    label='Display Name'
                    required
                   />
                <Forminput
                    name='email'
                    type='email'
                    handleChange={handleChange}
                    value={email}
                    label='Email'
                    required
                   />
                <Forminput
                    name='password'
                    type='password'
                    handleChange={handleChange}
                    value={password}
                    label='Password'
                    required
                   />
                <Forminput
                    name='confirmpassword'
                    type='password'
                    handleChange={handleChange}
                    value={confirmpassword}
                    label='Confirm Password'
                    required
                   />
                   <Custombtn type="submit" >SIGN UP </Custombtn>
                </form>
            </SignUpContainer>
        )
    }


const mapDispatchToProps =  dispatch => ({
    signUpwithdisplayname : userCredentials => dispatch(signUpwithdisplayname(userCredentials))
})


export default connect(null,mapDispatchToProps)(Signup);







// try {
    //     const {user} = await auth.createUserWithEmailAndPassword(email , password);
    //    await createDocument(user ,{displayName})

    //    this.setState({
    //     dipslayName : '',
    //     email : '',
    //     password : '',
    //     confirmpassword : ''
    //    })

    // } catch (error) {
    //     console.error(error);
    // }