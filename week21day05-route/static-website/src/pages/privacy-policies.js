import React from 'react';
import Header from '../component/header';
// import Section from '../component/Section';
import SecPrivacy from '../pages/sec-privacy';
import Footer from '../component/footer';

const privacyPolicies = () => {
    return(
        <React.Fragment>
            <Header title="Home" />
            < SecPrivacy />
            <Footer />
        </React.Fragment>
    );
};

export default privacyPolicies;
