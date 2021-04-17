import React from 'react'
import FilterItem from './FilterItem'

function Filter() {

    const arrItems = [
        { id: 1, title: 'Укажите предмет' },
        { id: 2, title: 'Укажите город' },
        { id: 3, title: 'Укажите район' }
    ]


    return (
        <ul className="filter">
            {arrItems.map((value) => <FilterItem key={value.id} {...value} />)}

            <button className="filter__button">Применить фильтр</button>
        </ul>
    )
}

export default Filter;
