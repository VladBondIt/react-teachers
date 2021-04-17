import React, { useEffect, useState } from 'react'
import FilterItem from './FilterItem'
import httpService from '../services/httpService';
import store from '../store/store';
import { observer } from 'mobx-react-lite';

const Filter = observer(() => {

    const [disableButton, setDisableButton] = useState(true)


    const arrItems = [
        { id: 1, title: 'Укажите предмет' },
        { id: 2, title: 'Укажите город' },
        { id: 3, title: 'Укажите район' }
    ]
    const getSelectItems = async () => {
        store.setSubjects(await httpService.getSubjects())
        store.setAres(await httpService.getAreas())
    }

    const handlerFilterButton = async () => {
        const areaId = store.areaItem?.id
        const districtId = store.districtItem?.id
        const subjectId = store.subjectItem?.id

        store.setTeachersIds(await httpService.getTeachersId(areaId, districtId, subjectId))

        if (store.teachersIds) {
            store.setTeachers(await httpService.getTeachers(store.teachersIds))
        }

    }



    const checkForButton = () => {
        if (store.areaItem || store.districtItem || store.subjectItem) {
            setDisableButton(false)
        }
        console.log(store.teachers);
    }

    useEffect(() => {

        getSelectItems()
    }, [])


    return (
        <ul onClick={checkForButton} className="filter">
            {arrItems.map((value) => <FilterItem key={value.id} {...value} />)}

            <button
                disabled={disableButton ? true : false}
                onClick={handlerFilterButton}
                className="filter__button">Применить фильтр</button>
        </ul>
    )
})

export default Filter;
