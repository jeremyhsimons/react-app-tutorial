import React from 'react'

function UserMessage(props) {
  return (
    <div>
        {
            props.isLoggedIn ? (
                <div>
                    <p>Welcome to the site!</p>
                </div>
            ) : (
                <p>Please sign in.</p>
            )
        }
    </div>
  )
}

export default UserMessage