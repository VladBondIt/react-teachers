import React, { useEffect, useReducer, useState } from 'react'
import FilterItem from './FilterItem'
import httpService from '../services/httpService';
import store from '../store/store';
import { observer } from 'mobx-react-lite';

const Filter = observer(() => {

    const [disableButton, setDisableButton] = useState(true);
    const [update, forceUpdate] = useReducer(x => x + 1, 0);




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

        store.setLoading(true)
        store.setTeachersIds(await httpService.getTeachersId(areaId, districtId, subjectId))

        if (store.teachersIds) {
            store.setTeachers(await httpService.getTeachers(store.teachersIds))
        }
        if (store.teachersIds.length >= 10) {
            store.setCardsButtonDisable(true)
        }

        store.setLoading(false)

    }


    const checkForButton = () => {
        if (store.areaItem || store.districtItem || store.subjectItem) {
            setDisableButton(false)
        }
    }

    const handlerClearButton = () => {
        setDisableButton(true)
        store.setSubjectItem('')
        store.setAreaItem('')
        store.setDistrictItem('')
        store.setDistricts(null)
        store.setTeachersIds([])
        store.setTeachers('')
        store.setCardsButtonDisable(false)

        forceUpdate();
    }

    console.log(1);

    useEffect(() => {
        getSelectItems()
    }, [])


    return (
        <div onClick={checkForButton} className="filter">
            {arrItems.map((value) => <FilterItem key={value.id} {...value} update={update} />)}

            <div className="filter__buttons">
                <button
                    disabled={disableButton ? true : false}
                    onClick={handlerFilterButton}
                    className="filter__button">Применить фильтр</button>
                <button
                    disabled={disableButton ? true : false}
                    onClick={handlerClearButton}
                    className="filter__button">X</button>
            </div>
            {store.loading && <div className="loader">
                Идет загрузка
            </div>}
        </div>
    )
})

export default Filter;
