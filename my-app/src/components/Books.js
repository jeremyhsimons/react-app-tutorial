import React from 'react'

function Books(props) {
  return (
    <div>
      <h5>{props.book.title}</h5>
      <p>{props.book.author}</p>
      <p>{props.book.pages}</p>
    </div>
  )
}

export default Books