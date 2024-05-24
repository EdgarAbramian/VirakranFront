import React, {Component} from 'react';

import CardSetter from "../Components/CardSetter";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default class Cranes extends Component {
    render() {
        return (
            <div className='Cranes'>
                <Header/>
                    <CardSetter></CardSetter>
                <Footer/>
            </div>
        );
    }
}

