import React from 'react';
import {MDBFooter, MDBContainer} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='fixed-bottom' bgColor='light'>
      <MDBContainer className='p-4 pb-0'>
        <section className=''>
          <p className='d-flex justify-content-center align-items-center'>
            <span className='text-black'>Created utilising the OpenAI API.
              Declan Bengtson. </span>
          </p>
        </section>
      </MDBContainer>
    </MDBFooter>
  );
}