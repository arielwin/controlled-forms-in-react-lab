import { useState } from 'react';

const Bookshelf = () => {

  const [books, setBooks] = useState([
    {title: 'Fourth Wing', author: 'Rebecca Yarros'},
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ])

  const [newBook, setNewBook] = useState([
    {title:'', author: ''}
  ])

  function handleInputChange(event) {
    const { name, value } = event.target

    setNewBook((previousBook) => ({
      ...previousBook, [name]: value
    }))
  }

  function handleSubmit (event) {
    event.previousDefault()
    setBooks((previousBook) => [
      ...previousBook, newBook
    ])

    setNewBook({ title:'', author: ''})
  }
  return (
    <>
      <div className="bookshelfDiv">
        <div className="formDiv">
          <h3>Add a Book</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" name='title' value={newBook.title} onChange={handleInputChange} placeholder='Title' />
            <input type='text' name='author' value={newBook.author} onChange={handleInputChange} placeholder='Auithor' />
            <button type='submit'>Add Book</button>
          </form>
        </div>
        <div className="bookCardsDiv">
          {books.map((book, index) => (
            <div key={index} className='bookCard'>
              <h4>{book.title}</h4>
              <h4>{book.author}</h4>
            </div>
        ))}
      </div>
    </div>
    </>
  )

}

export default Bookshelf