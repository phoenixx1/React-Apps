import React from "react";
import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  Icon,
  FormInput,
  FormLabel,
  FormWrap,
  Text,
} from "./SigninElements";

function Signin() {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">dolla</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your account</FormH1>

              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />

              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />

              <FormButton type="submit">Continue</FormButton>

              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
}

export default Signin;
