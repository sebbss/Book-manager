import React, { Component } from 'react';
import {
  Route, BrowserRouter, Switch,
} from 'react-router-dom';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import { NavBar } from './components/NavBar';


export class Routes extends Component {
    render() {
      return (
        <BrowserRouter>
          <div>
            <NavBar/>
            <Switch>
              <Route path="/:id" component={BookDetail} />
              <Route exact path="/" component={BookList} />
              
            </Switch>
          </div>
        </BrowserRouter>
      );
    }
  }
  
  export default Routes;