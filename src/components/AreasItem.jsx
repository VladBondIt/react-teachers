import React from 'react'
import httpService from '../services/httpService'
import store from '../store/store'

function SubjectItem({ id, cityName }) {

    // store.handlerDistricts(await httpService.getDistricts(90))
    // при клике на селект города надо фетчить районы


    const handlerItem = async () => {
        store.setAreaItem({ id, cityName })
        store.setDistricts(await httpService.getDistricts(id))
    }


    return (
        <li onClick={handlerItem} className="select__item">
            {cityName}
        </li>
    )
}

export default SubjectItem