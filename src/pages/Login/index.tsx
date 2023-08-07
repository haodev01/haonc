import {
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';

import { auth } from '@/firebase'
const LoginPage = () => {

  const handleLoginGoogle = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider).then((response) => console.log(response))
  }
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLoginGoogle}>
        Login Google
      </button>
    </div>
  )
}

export default  LoginPage