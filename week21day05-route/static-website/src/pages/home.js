import React from 'react';
import Header from '../component/header';
import Section from '../pages/section';
import Footer from '../component/footer';

const Home = () => {
    return(
        <React.Fragment>
            <Header title="Home" />
            <Section />
            <Footer />
        </React.Fragment>
    );
};

export default Home;