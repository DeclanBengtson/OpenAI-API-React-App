import React, { useState } from 'react';
import Gym from "..//Images/Gym.jpg" ;

import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBNavbarLink,
  MDBContainer,
  MDBIcon,
  MDBCollapse,
  MDBBtn,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

export default function App() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <header>
      <MDBNavbar expand='lg' light bgColor='white'>
        <MDBContainer fluid>
          <MDBNavbarToggler
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>
          <MDBCollapse show={showBasic}>
            <MDBNavbarNav right className='mb-2 mb-lg-0'>
              <MDBNavbarItem active>
                <MDBNavbarLink aria-current='page' href='#'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Features</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>About</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      
      <div id='bgimg' className='p-5 text-center bg-image' style={{ backgroundImage: `url(${Gym})`,height: '100vh' }} >
        <div className='mask' style={{ height:'40vh' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Health Planning Tool</h1>
              <h5 className='mb-4'>Utilising Open AI's API</h5>
              <MDBBtn
                color='light' rippleColor='dark'
                className="m-2"
                tag="a"
                outline
                size="lg"
              >
                Meal Plan
              </MDBBtn>
              <MDBBtn
                color='light' rippleColor='dark'
                className="m-2"
                tag="a"
                outline
                size="lg"
                target="_blank"
              >
                Exercise Plan
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}