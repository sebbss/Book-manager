import React, { Component } from 'react';
import {
  Route, BrowserRouter, Switch,
} 
from 'react-router-dom';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import NavBar  from './components/NavBar';
import CreateBook from './components/CreateBook'
import UpdateBook from './components/UpdateBook'
import CreateAuthor from "./components/CreateAuthor"
import AuthorDetail from './components/AuthorDetail'
import AuthorList from './components/AuthorList'

export class Routes extends Component {
    render() {
      return (
        <BrowserRouter>
          <div>
            <NavBar/>
            <Switch>
              <Route path='/authors/:authorId' component={AuthorDetail}/>
              <Route path="/add-author" component={CreateAuthor}/>
              <Route path="/add-book" component={CreateBook}/>
              <Route path="/update/:id" component={UpdateBook}/>
              <Route path="/books/:id" component={BookDetail} />
              <Route path='/authors' component={AuthorList}/>
              <Route exact path="/" component={BookList} />
            </Switch>
          </div>
        </BrowserRouter>
      );
    }
  }
  
  export default Routes;