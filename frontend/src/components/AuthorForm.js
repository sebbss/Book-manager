import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

const AuthorForm = ({ first_name, last_name, onChange, onSubmit, Action }) => (
  <MDBContainer>
    <MDBRow>
      <MDBCol className="container fls" md="4">
        <form
          onSubmit={onSubmit}
          className="mt-4 border border-primary rounded p-4"
        >
          <p className="h4 text-center mb-4">{Action}</p>

          <label htmlFor="defaultFormFirstNameEx" className="grey-text">
            First Name
          </label>
          <input
            type="text"
            required
            name="first_name"
            className="form-control"
            value={first_name}
            onChange={onChange}
          />

          <br />

          <label htmlFor="defaultFormLastNameEx" className="grey-text">
            Last Name
          </label>
          <input
            type="text"
            required
            name="last_name"
            className="form-control"
            value={last_name}
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

export default AuthorForm;
