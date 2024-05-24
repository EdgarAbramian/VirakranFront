import React, {Component} from 'react';

import CardSetter from "../Components/CardSetter";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default class Projects extends Component {
    render() {
        return (
            <div className='Projects'>
                <Header/>
                <CardSetter></CardSetter>
                <Footer/>
            </div>
        );
    }
}
