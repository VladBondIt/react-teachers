import React from 'react'
import { ReactComponent as Arrow } from '../img/filter-arrow.svg';

function FilterItem({ id, title }) {
    return (
        <li className="filter__item">
            {title}
            <Arrow className="filter__svg" />
        </li>
    )
}

export default FilterItem
