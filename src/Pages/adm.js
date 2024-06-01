import React, {Component} from 'react';

import Header from "../Components/Header";
import Footer from "../Components/Footer";


export default class Adm extends Component {
    render() {
        return (
            <div className='Cranes'>
                <Header/>
                <br/>
                <figure className="text-center">
                    <h1>Редактирование информации о кранах</h1>
                </figure>
                <div className="AboutContent">
                    <div className="d-grid gap-2">
                        <div></div>
                        <label htmlFor="exampleFormControlInput1" className="form-label">Модель крана</label>
                        <input className="form-control" type="text" placeholder="..."
                               aria-label="default input example"/>
                        <label htmlFor="exampleFormControlInput1" className="form-label">Расположение</label>
                        <input className="form-control" type="text" placeholder="..."
                               aria-label="default input example"/>
                        <label htmlFor="exampleFormControlInput1" className="form-label">Статус: 1 - доступен, 0 -
                            занят.</label>
                        <input className="form-control" type="text" placeholder="..."
                               aria-label="default input example"/>
                        <label htmlFor="exampleFormControlInput1" className="form-label">Дополнительный
                            комментарий</label>
                        <input className="form-control" type="text" placeholder="..."
                               aria-label="default input example"/>
                        <button type="button" className="btn btn-primary btn-lg"
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

