import React, { useState } from "react";
import { AppProvider } from "@toolpad/core/AppProvider";
import { SignInPage } from "@toolpad/core/SignInPage";
import { useTheme } from "@mui/material/styles";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ButtonUp from "../../components/button-up/ButtonUp";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";

const providers = [{ id: "credentials", name: "Email and Password" }];

function SignIn() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const signIn = async (provider, formData) => {
    const email = formData.get("email");
    const password = formData.get("password");
    const auth = getAuth();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setErrorMessage("");
      navigate("/home");
    } catch (error) {
      setErrorMessage("Incorrect email or password.");
    }
  };

  return (
    <>
      <Header />
      <div className="form-sign-in">
        <AppProvider theme={theme}>
          <SignInPage
            signIn={signIn}
            providers={providers}
            slotProps={{
              emailField: { autoFocus: false },
              form: { noValidate: true },
            }}
          />
        </AppProvider>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
      <Footer />
      <ButtonUp />
    </>
  );
}

export default SignIn;