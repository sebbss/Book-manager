import React, { Component } from "react";
import axios from "axios";
import { toast } from 'react-toastify'
import BookForm from './BookForm'

export class UpdateBook extends Component {
  state = {
      name: "",
      isbn: "",
    author: "",
    loading:true
  };

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    console.log(id)
    this.getSingleBook(id);
  }

  getSingleBook = (bookId) => {
    axios.get(`https://book-manager-backend.herokuapp.com/books/${bookId}`).then((res) => {
      this.setState({ name: res.data.name, isbn:res.data.isbn, author:res.data.author.pk, loading:false });
    });
  };

  updateBook = (data) => {
    const { history, match:{params:{id}} } = this.props;

    axios
      .put(`https://book-manager-backend.herokuapp.com/books/${id}/update`, data)
      .then((res) => {
        toast.success("updated a book");
        history.push(`/books/${res.data.pk}`);
      })
      .catch((error) => {
        const data = JSON.parse(error.request.response);
        console.log(data.author[0]);
        if (data.author) {
          toast.error(data.author[0]);
        } else {
          toast.error("server error");
        }
      });
  };

  handleOnChange = (e) => {
    this.setState({ [e.target.name] : e.target.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {name, author, isbn } = this.state;

    const formData = {
      name,
      author,
      isbn,
    };
    this.updateBook(formData);
  };
  render() {
    const{ name, author, isbn } = this.state;
    return <div>
        <BookForm
          name={name}
          author={author}
          Action={'Update Book'}
          isbn={isbn}
          onSubmit={this.handleSubmit}
          onChange={this.handleOnChange}
        />
    </div>;
  }
}

export default UpdateBook;
