import React from 'react'
import Books from './Books'

function RenderingLists() {
  const bookList = [
    'To Kill a Mockingbird',
    'The Great Gatsby',
    'The Catcher in the Rye',
  ]

  const books = [
    {
        title: "book 1",
        author: "author 1",
        pages: "123",
    },
    {
        title: "book 2",
        author: "author 2",
        pages: "234",
    },
    {
        title: "book 3",
        author: "author 3",
        pages: "345",
    },
  ]

  return (
    <div>
        {bookList.map(book => {
            return <h2 key={book}>{book}</h2>
        })}
        <hr/>
        {
            books.map(book => {
                return(
                    <Books key={book.title} book={book}/>
                )
            })
        }
    </div>

  )
}

export default RenderingLists