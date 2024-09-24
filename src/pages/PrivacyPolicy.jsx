import React from 'react';
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom';
import Container from '../components/Container';

const PrivacyPolicy = () => {
    return(
        <>
            <Meta title='Privacy Policy' />
            <BreadCrumb title="Privacy Policy" />
            <Container className="privacy-policy py-5 home-wrapper-2">
                    <div className="row">
                        <div className="col-12">
                            <div className="policy"></div>
                        </div>
                    </div>
            </Container>
        </>
    )
}

export default PrivacyPolicy