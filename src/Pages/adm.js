import React, {Component} from 'react';

import Header from "../Components/Header";
import Footer from "../Components/Footer";


export default class Adm extends Component {

    render() {
        const handleClick = event => {
            let model = document.getElementById('one').value
            let locate = document.getElementById('two').value
            let stat = document.getElementById('three').value
            let descr = document.getElementById('four').value

        };
        return (
            <div className='Cranes'>
                <Header/>
                <br/>
                <figure className="text-center">
                    <h1>Добавление крана</h1>
                </figure>
                <div className="AboutContent">
                    <div className="d-grid gap-2">
                        <div></div>
                        <label htmlFor="exampleFormControlInput1" className="form-label">Модель крана</label>
                        <input className="form-control" type="text" placeholder="..." id="one"
                               aria-label="default input example"/>
                        <label htmlFor="exampleFormControlInput1" className="form-label">Расположение</label>
                        <input className="form-control" type="text" placeholder="..." id="two"
                               aria-label="default input example"/>
                        <label htmlFor="exampleFormControlInput1" className="form-label">Статус: 1 - доступен, 0 -
                            занят.</label>
                        <input className="form-control" type="text" placeholder="..." id="three"
                               aria-label="default input example"/>
                        <label htmlFor="exampleFormControlInput1" className="form-label">Дополнительный
                            комментарий</label>
                        <input className="form-control" type="text" placeholder="..." id="four"
                               aria-label="default input example"/>
                        <button onClick={handleClick} type="button" className="btn btn-primary btn-lg"
                                style={{background: '#da5559'}}>Сохранить!
                        </button>
                        <div></div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}
