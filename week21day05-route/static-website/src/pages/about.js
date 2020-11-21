import React from 'react';
import Header from '../component/header';
// import Section from '../component/Section';
import SecAboutus from '../pages/sec-about';
import Footer from '../component/footer';

const About = () => {
    return(
        <React.Fragment>
            <Header title="Home" />
            <SecAboutus />
            <Footer />
        </React.Fragment>
    );
};

export default About;