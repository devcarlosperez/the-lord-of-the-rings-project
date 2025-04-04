import * as React from "react";
import { AppProvider } from "@toolpad/core/AppProvider";
import { SignInPage } from "@toolpad/core/SignInPage";
import { useTheme } from "@mui/material/styles";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import login from "../../services/sign-in";

const providers = [{ id: "credentials", name: "Email and Password" }];

const signIn = async (provider, formData) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      login(formData.get("email"), formData.get("password"));
      resolve();
    }, 300);
  });
  return promise;
};

function SignIn() {
  const theme = useTheme();
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
      </div>
      <Footer />
    </>
  );
}

export default SignIn;