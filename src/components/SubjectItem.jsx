import React from 'react'
import store from '../store/store'

function SubjectItem({ id, name }) {

    const handlerItem = () => {
        store.setSubjectItem({ id, name })
    }


    return (
        <li onClick={handlerItem} className="select__item">
            {name}
        </li>
    )
}

export default SubjectItem
