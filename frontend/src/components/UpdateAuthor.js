import React, { Component } from "react";
import axios from "axios";
import { toast } from 'react-toastify'
import AuthorForm from './AuthorForm'

export class UpdateBook extends Component {
  state = {
      first_name: "",
      last_name: "",
    loading:true
  };

  componentDidMount() {
    const {
      match: {
        params: { authorId },
      },
    } = this.props;
    this.getSingleAuthor(authorId);
  }

  getSingleAuthor = (authorId) => {
    axios.get(`http://127.0.0.1:8000/authors/${authorId}`).then((res) => {
        console.log(res.data)
      this.setState({ first_name: res.data.first_name, last_name:res.data.last_name, loading:false });
    });
  };

  updateAuthor = (data) => {
    const { history, match:{params:{authorId}} } = this.props;

    axios
      .put(`http://127.0.0.1:8000/authors/${authorId}/`, data)
      .then((res) => {
        toast.success("updated an author");
        history.push(`/authors/${res.data.pk}`);
      })
      .catch((error) => {
        const data = JSON.parse(error.request.response);
        if (data.author) {
          toast.error(data.first_name[0]);
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
    const {first_name, last_name } = this.state;

    const formData = {
      first_name,
      last_name
    };
    this.updateAuthor(formData);
  };
  render() {
    const{ first_name, last_name} = this.state;
    return <div>
        <AuthorForm
          first_name={first_name}
          last_name={last_name}
          Action={'Update Author'}
          onSubmit={this.handleSubmit}
          onChange={this.handleOnChange}
        />
    </div>;
  }
}

export default UpdateBook;
