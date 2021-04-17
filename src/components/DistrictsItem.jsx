import React from 'react'
import store from '../store/store'

function DistrictsItem({ id, name }) {

    const handlerItem = () => {
        store.setDistrictItem({ id, name })
    }

    return (
        <li onClick={handlerItem} className="select__item">
            {name}
        </li>
    )
}

export default DistrictsItem
