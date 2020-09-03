import React from "react";
import {Link} from 'react-router-dom'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCol,
} from "mdbreact";

const Card = (props) => {
  return (
    <div className="bookCard">
      <MDBCol>
        <MDBCard style={{ width: "20rem" }}>
          <MDBCardBody>
            <MDBCardTitle>{props.prop1}</MDBCardTitle>
            <Link to={`/${props.prop3}/${props.prop2}`}>View</Link>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </div>
  );
};

export default Card;
