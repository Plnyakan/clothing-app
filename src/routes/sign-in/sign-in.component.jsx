import React from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth }  from '../../utils/firebase/firebase.utils'

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
  }
  return (
    <div>
      <h1>SignIn page</h1>
      <button onClick={logGoogleUser}>
        sign In with Google popup
      </button>
    </div>
  )
}

export default SignIn