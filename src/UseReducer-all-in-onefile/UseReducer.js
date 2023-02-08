import React, { useState, useReducer } from 'react'

const booksData = [
    {id: 1, name: "Pather Panchal"},
    {id: 2, name: "Padma Nadir Majhi"},
    {id: 3, name: "Srikanta"},
];

const Modal = ({modalText}) => {
    return <h3>{modalText}</h3>
}

const reducer = (state, action) => {
    if(action.type === "ADD") {
        const allBooks = [...state.books, action.payload];
        return {
            ...state,
            books: allBooks,
            isModalOpen: true,
            modalText: "The book is added"
        };       
    }
    if(action.type === "REMOVE") {
        const filterBooks = [...state.books].filter(book => book.id !== action.payload)
        return {
            ...state,
            books: filterBooks,
        }
    }
    return state;
}

const initialState = {
    books: booksData,
    isModalOpen: false,
    modalText: "",
}

const UseReducer = () => {
    
    const [bookState, dispatch] = useReducer(reducer, initialState);

    const [bookName, setBookName] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault();
        const newBook = {id: new Date().getTime().toString(), name: bookName}
        dispatch({type: "ADD", payload: newBook});
        setBookName("")
    }

    const removeBook = (id) => {
        dispatch({type:"REMOVE", payload: id})
    }

  return (
    <div className='container my-5'>
        <h2>Book List</h2>

        <form onSubmit={handleSubmit} className='d-flex my-4'>
            <input 
                className='form-control w-50 ' 
                type="text"  
                value={bookName} 
                onChange={(e) => setBookName(e.target.value)}
            />
            <button className='btn btn-outline-primary mx-3' type='submit'>Submit</button>
        </form>

        {bookState.isModalOpen && <Modal modalText={bookState.modalText}/>}
        
        {bookState.books.map(book => {
            const { id, name } = book;
            return (
                
                <li key={id} className="my-4 fs-5">
                    {name} 
                    <button onClick={()=> removeBook(id)} className='btn btn-outline-primary mx-3'>Remove</button>
                </li>
            )
        })}
    </div>
  )
}

export default UseReducer