import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCol} from 'mdbreact';

const Card = (props) => {
  return (
      <div className='bookCard'>
          <MDBCol>
      <MDBCard style={{ width: "10rem" }}>
        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
        <MDBCardBody>
            <MDBCardTitle>{props.name}</MDBCardTitle>
            <MDBBtn href="#">View</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>

      </div>
    
  )
}

export default Card;