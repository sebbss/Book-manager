import React, { Component } from "react";
import axios from "axios";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
} from "mdbreact";

export class AuthorDetail extends Component {
  state = {
    author: {},
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
      this.setState({ author: res.data, loading: false });
    });
  };
  render() {
    const { author } = this.state;

    return (
      <div className="mt-5">
        <MDBContainer>
          <MDBRow>
            <MDBCol className="container fls" md="4">
              <MDBCol>
                <MDBCard style={{ width: "20rem" }}>
                  <MDBCardBody>
                    <MDBCardTitle style={{ textAlign: "center" }}>
                      {author.first_name}
                    </MDBCardTitle>
                    <MDBCardText style={{ textAlign: "center" }}>
                      {author.last_name}
                    </MDBCardText>
                    <a className="btn btn-primary btn-block" href={`/author/update/${author.pk}`} >update</a>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default AuthorDetail;
