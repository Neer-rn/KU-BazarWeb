import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import "./signup.css";

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (event) => {
    event.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

    return (
        <div className="Signup">
            <div className="Up_bar">

            <div className="home_list">
                <li>Help</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Sign in</li>
            </div>
                <img src="../resources/img/home.svg" alt="home"></img>
            </div>
            <div className="middleParagraph">
                
                <h1 className="subTitle">GET STARTED!!</h1>
                <div className="hook">
                <h2 className="hook_1">Already have an account, </h2>
                <h2 className="hook_2">Sign in</h2>
                </div>
                    <img className="logo" src="../resources/img/logo.png" alt="logo"></img>
            </div>   

      <form onSubmit={handleSignUp}>
        <label>
          Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
           
            

        </div>
    );
}

export default Signup;
/*import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (event) => {
    event.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed up successfully
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        // Error occurred
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;*/