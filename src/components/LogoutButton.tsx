import React from 'react'
import {useAuth0} from '@auth0/auth0-react'
function LogoutButton() {
    const {logout,isAuthenticated} =useAuth0();

  if(!isAuthenticated)
    return (<></>);
  return (
    <button onClick={() => logout()} >Logout</button>
  )
}

export default LogoutButton
