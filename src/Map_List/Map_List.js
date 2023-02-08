import React, { useState } from 'react'

const booksData = [
    {id: 1, name: "Pather Panchal"},
    {id: 2, name: "Padma Nadir Majhi"},
    {id: 3, name: "Srikanta"},
];

const Modal = ({modalText}) => {
    return <p>{modalText}</p>
}

const UseReducer = () => {

    const [books, setBooks] = useState(booksData)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalText, setModalText] = useState("")
    const [bookName, setBookName] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault();
        setBooks((previous) => {
            const newBook = {id: new Date().getTime().toString(), name: bookName}
            return [...previous, newBook]
        })
        setIsModalOpen(true);
        setModalText('The book is added')
    }

  return (
    <div className='container my-5'>
        <h3>Book List</h3>

        <form onSubmit={handleSubmit} className='d-flex my-4'>
            <input 
                className='form-control w-50 ' 
                type="text"  
                value={bookName} 
                onChange={(e) => setBookName(e.target.value)}
            />
            <button className='btn btn-outline-primary mx-3' type='submit'>Submit</button>
        </form>

        {isModalOpen && <Modal modalText={modalText}/>}
        
        {books.map(book => {
            const { id, name } = book;
            return <li key={id}>
            {name}
            </li>
        })}
    </div>
  )
}

export default UseReducer