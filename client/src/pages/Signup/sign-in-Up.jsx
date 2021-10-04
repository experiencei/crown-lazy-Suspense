import React from "react";
import Signin from "../../components/signin/signin";
import Signup from "../../components/signup/signup";
import { SignInAndSignUpContainer } from "./sign-in-up.styled";


export default function SigninUp() {
    return (
        <SignInAndSignUpContainer>
          <Signin/> 
          <Signup/> 
        </SignInAndSignUpContainer>
    )
}
