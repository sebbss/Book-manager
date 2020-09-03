import React, { Component } from "react";
import axios from "axios";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCol,
} from "mdbreact";

class BookDetail extends Component {
  state = {
    book: {},
    loading: true,
  };

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    this.getSingleBook(id);
  }

  getSingleBook = (bookId) => {
    axios.get(`http://127.0.0.1:8000/books/${bookId}`).then((res) => {
      this.setState({ book: res.data, loading: false });
    });
  };

  render() {
    const { book, loading } = this.state;
    return loading ? null : (
      <div className="row container-fluid mt-5">
        <div className="col-6 mx-auto">
          <MDBCol>
            <MDBCard className="mx-auto" style={{ width: "33rem" }}>
              <MDBCardBody>
                <MDBCardTitle>{book.name}</MDBCardTitle>
                <p className="card-text">
                  by {book.author.first_name} {book.author.last_name}
                </p>
                <p className="card-text">ISBN : {book.isbn}</p>
                <a href={`/books/update/${book.pk}`} className="btn btn-primary">Update Book</a>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </div>
      </div>
    );
  }
}

export default BookDetail;
