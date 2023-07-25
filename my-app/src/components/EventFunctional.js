import React from 'react'

function EventFunctional() {
  function clickHandler() {
    console.log("Clicked the functional button");
  }
  return (
    <div>
        <button onClick={clickHandler}>Click me - functional component</button>
    </div>
  )
}

export default EventFunctional