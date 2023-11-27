import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Nav from 'react-bootstrap/Nav';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';


export default function App() {
  return (
  <div style={{marginTop:'40px'}}>
    <MDBFooter style={{border:'3px solid black',marginTop:'10px'}} className='f1'>
      <MDBContainer style={{marginTop:'10px'}}>
        <section style={{marginLeft:'10px'}} className='mb-4'>
         
          <Button className='but' style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px',backgroundColor: '#3b5998',marginRight:'10px'}} variant="contained">
            <div>
              <FacebookIcon/>
              </div>
          </Button>
          <Button className='but' style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px',backgroundColor: '#55acee',marginRight:'10px'}} variant="contained">
            <div>
              <TwitterIcon/>
              </div>
          </Button>
          
          <Button className='but' style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px',backgroundColor: '#ac2bac',marginRight:'10px'}} variant="contained">
            <div>
              <InstagramIcon/>
              </div>
          </Button>
          <Button className='but' style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px', backgroundColor: '#0082ca',marginRight:'10px'}} variant="contained">
            <div>
              <LinkedInIcon/>
              </div>
          </Button>
          
          <Button className='but' style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px',backgroundColor: '#333333',marginRight:'10px'}} variant="contained">
            <div>
              <GitHubIcon/>
              </div>
          </Button>
          
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor:'#fd3753',color:'white'}}>
        © 2023 Copyright: All rights reserved
        <Nav.Link href="#action1">WeOne.com</Nav.Link>
      </div>
      
    </MDBFooter>
    </div>
  );
}