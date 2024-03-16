import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
        <MDBNavbar light bgColor='secondary' >
        <MDBContainer fluid>
          <MDBNavbarBrand href='#' className='text-white fs-3'>
          <i class="fa-solid fa-list-check fa-beat mx-3 fs-1"></i>
            Task Management
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header