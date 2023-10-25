import React from 'react'

function signout() {
  return (
    <div>
            {
      loggedIn ? (
        <button className = "button" onClick={handleLogout} disabled={isLoggingOut}>
          {isLoggingOut ? 'Logging out...' : 'Log out'}
        </button>
      ) : (
        <p></p>
      )}
   
    </div>
  )
}

export default signout
