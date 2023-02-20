import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBBtn
} from 'mdb-react-ui-kit';
import { AiFillFacebook } from "react-icons/ai";

const Footer = () => {
    return (
        <MDBFooter className='bg-dark text-center text-white' style={{ bottom: '0', width: '100%', marginTop: '0rem' }}>
            <MDBContainer className='p-4 pb-0'>
                {/* <section className='mb-4'>
                </section> */}
            </MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2023 Copyright :
                <a className='text-white' href='https://google.com/' style={{marginLeft: '0.5rem'}}>
                    ONboard.com
                </a>
            </div>
        </MDBFooter>
    )
}

export default Footer;