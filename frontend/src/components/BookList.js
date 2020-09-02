import React, { Component } from 'react'
import axios from 'axios'
import MDBRow from 'mdbreact'
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
        axios.get(`http://127.0.0.1:8000/books/`)
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
                <div className='row align-items-center'>
                {books.map(book =>(
                    <div key={book.pk}><Card name={book.name} /></div>
                    
                ))}
                </div>
            </div>
        )
    }
}

export default BookList
