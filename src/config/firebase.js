import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCEEag4gBVwi9ddllT2pp03xEAfgsdE8Lw",
  authDomain: "client-work-e3d0f.firebaseapp.com",
  projectId: "client-work-e3d0f",
  storageBucket: "client-work-e3d0f.appspot.com",
  messagingSenderId: "804144365354",
  appId: "1:804144365354:web:306c16f0de77c5ab656853",
  measurementId: "G-HXDNYTTXFH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export async function userSignUp (data) {
  const { email , password } = data

 await createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log('user' , user);
    alert('Sign Up Successfully')
    window.location.href = ('signin')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error.message);
    // ..
  });
}

export async function userSignIn (data) {
  const { email , password } = data
  await signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    alert('Sign In Successfully')
    window.location.href = ('/')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error.message);
  });
}

export async function usersignOut () {
  try{
    await signOut(auth)
    alert('Sign Out Successfully')
    window.location.href = ('/')
  }catch(e){
    alert(e.message)
  }
}

export{auth}