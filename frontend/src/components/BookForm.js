import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

const BookForm = ({ name, isbn, author, onChange, onSubmit, Action }) => (
  <MDBContainer>
    <MDBRow>
      <MDBCol className="container fls" md="4" >
        <form onSubmit={onSubmit} className="mt-4 border border-primary rounded p-4">
<p className="h4 text-center mb-4">{Action}</p>

          <label htmlFor="defaultFormBookNameEx" className="grey-text">
            Book Name
          </label>
          <input
            type="text"
            required
            name="name"
            className="form-control"
            value={name}
            onChange={onChange}
          />

          <br />

          <label htmlFor="defaultFormAuthorIDEx" className="grey-text">
            Author ID
          </label>
          <input
            type="text"
            required
            name="author"
            className="form-control"
            value={author}
            onChange={onChange}
          />
          <br/>

          <label htmlFor="defaultFormISBNEx" className="grey-text">
            ISBN
          </label>
          <input
            type="text"
            name="isbn"
            required
            className="form-control"
            value={isbn}
            onChange={onChange}
          />

          <div className="text-center mt-4">
            <MDBBtn color="indigo" type="submit">
              Submit
            </MDBBtn>
          </div>
        </form>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
);

export default BookForm;
