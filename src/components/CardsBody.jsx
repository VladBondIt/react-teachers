import { observer } from 'mobx-react-lite';
import React from 'react'
import store from '../store/store';
import CardsItem from './CardsItem';

const CardsBody = observer(() => {

    return (
        <div className="cards">
            {store.teachers && store.teachers.map(teacher => <CardsItem key={teacher.id} {...teacher} />)}
            <button className="cards__button">Загрузить еще</button>
        </div>
    )
})

export default CardsBody
