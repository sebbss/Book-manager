import React, { Component } from 'react'
import axios from 'axios'
import Card from './Card';


class BookList extends Component {
    state = {
        books:[],
        loading:true
    }


    componentDidMount() {
        this.getBooks();
      }

    getBooks = () =>{
        axios.get(`https://book-manager-backend.herokuapp.com/books/`)
        .then(res =>{
            this.setState({books:res.data.books, loading:false})
        })
        .catch(e => {
            console.log(e);
          });
    }

    render() {
        const {books, loading} = this.state
        console.log(books)

        return (
            <div className='container'>
                {loading? <h1>Loading...</h1> 
                :(
                    <div className='row align-items-center'>
                {books.map(book =>(
                    <div key={book.pk} className='col-4'><Card prop1={book.name} prop2={book.pk} prop3={'books'}/></div>
                    
                ))}
                </div>
                )}
                
            </div>
        )
    }
}

export default BookList
