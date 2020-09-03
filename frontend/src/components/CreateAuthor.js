import React, { Component } from "react";
import { toast } from 'react-toastify';
import axios from 'axios';
import AuthorForm from "./AuthorForm";


export class CreateAuthor extends Component {
  state = {
    data: {
      first_name: "",
      last_name: ""
    },
  };

  postAuthor = (data) => {
    const {history} = this.props
    axios.post(`http://127.0.0.1:8000/authors/`, data)
    .then((res) => {
      toast.success('added an author')
      history.push(`/authors`)
    })
    .catch(error =>{
        const data = JSON.parse(error.request.response)
        if (data.first_name) {
            toast.error(data.first_name[0])
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
        data: { first_name, last_name },
      } = this.state;
    
    const formData = {
        first_name,
        last_name
    }
    this.postAuthor(formData)

  };

  render() {
    const {
        data: { first_name, last_name },
      } = this.state;
    return (
      <div>
        <AuthorForm
          first_name={first_name}
          last_name={last_name}
          Action={'New Author'}
          onSubmit={this.handleSubmit}
          onChange={this.handleOnChange}
        />
      </div>
    );
  }
}

export default CreateAuthor;
