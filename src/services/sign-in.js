import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function login(email, password) {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(`Se ha logeado el usuario con email ${email} y con contraseña ${password}`);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`error ${errorCode} ${errorMessage}`);
    });
}

export default login;