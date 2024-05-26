import React, {Component} from 'react';

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ContactUs from "../Components/ContactUs";

export default class Contacts extends Component {
    render() {
        return (
            <div className='Cranes'>
                <Header/>
                <ContactUs></ContactUs>
                <Footer/>
            </div>
        );
    }
}

