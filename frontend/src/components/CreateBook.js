import React, { Component } from "react";
import { toast } from 'react-toastify';
import axios from 'axios';
import BookForm from "./BookForm";


export class CreateBook extends Component {
  state = {
    data: {
      name: "",
      author: "",
      isbn: "",
    },
  };

  postBook = (data) => {
    const {history} = this.props
    axios.post(`http://127.0.0.1:8000/books/`, data)
    .then((res) => {
      toast.success('added a book')
      history.push(`/${res.data.pk}`)
    })
    .catch(error =>{
        const data = JSON.parse(error.request.response)
        console.log(data.author[0])
        if (data.author) {
            toast.error(data.author[0])
        }
        else {
            toast.error('server error')
        }
    })

  };

  handleOnChange = (e) => {
    const { data } = this.state;
    const newData = {
      ...data,
      [e.target.name]: e.target.value,
    };
    this.setState({
      data: newData,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {
        data: { name, author, isbn },
      } = this.state;
    
    const formData = {
        name,
        author,
        isbn
    }
    this.postBook(formData)

  };

  render() {
    const {
      data: { name, author, isbn },
    } = this.state;
    return (
      <div>
        <BookForm
          name={name}
          author={author}
          Action={'New Book'}
          isbn={isbn}
          onSubmit={this.handleSubmit}
          onChange={this.handleOnChange}
        />
      </div>
    );
  }
}

export default CreateBook;
