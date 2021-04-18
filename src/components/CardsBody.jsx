import { observer } from 'mobx-react-lite';
import React from 'react'
import httpService from '../services/httpService';
import store from '../store/store';
import CardsItem from './CardsItem';

const CardsBody = observer(() => {

    const handlerAddCards = async () => {
        store.setLoading(true)

        if ((store.teachersIds.length - 1) - store.teachers.length <= 10) {
            store.setCardsButtonDisable(false)
        }
        store.setTeachers(await httpService.getTeachers(store.teachersIds, store.teachers.length + 10))

        store.setLoading(false)
    }

    return (
        <div className="cards">
            {store.teachers && store.teachers.map(teacher => <CardsItem key={teacher.id} {...teacher} />)}
            {store.disableCardsButton && <button
                onClick={handlerAddCards}
                className="cards__button">Загрузить еще</button>}
        </div>
    )
})

export default CardsBody
