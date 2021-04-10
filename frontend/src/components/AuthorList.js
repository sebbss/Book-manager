import React, { Component } from 'react'
import axios from 'axios'
import Card from './Card';


class AuthorList extends Component {
    state = {
        authors:[],
        loading:true
    }


    componentDidMount() {
        this.getAuthors();
      }

    getAuthors = () =>{
        axios.get(`https://book-manager-backend.herokuapp.com/authors/`)
        .then(res =>{
            this.setState({authors:res.data.authors, loading:false})
        })
        .catch(e => {
            console.log(e);
          });
    }

    render() {
        const {authors, loading} = this.state;

        return (
            <div className='container'>
                {loading? <h1>Loading...</h1> 
                :(
                    <div className='row align-items-center'>
                {authors.map(author =>(
                    <div key={author.pk} className='col-4'><Card prop1={author.first_name} prop2={author.pk} prop3={'authors'}/></div>
                    
                ))}
                </div>
                )}
                
            </div>
        )
    }
}

export default AuthorList
