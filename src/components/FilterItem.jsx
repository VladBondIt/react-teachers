import { observer } from 'mobx-react-lite';
import React from 'react'
import { ReactComponent as Arrow } from '../img/filter-arrow.svg';
import SubjectItem from './SubjectItem';
import AreasItem from './AreasItem';
import store from '../store/store';
import DistrictsItem from './DistrictsItem';

const FilterItem = observer(({ id, title }) => {

    let visibleSelects = null;

    const handlerFilterItem = () => {
        if (store.filterItemId && store.filterItemId === id) {
            store.setFilterItemId(null)
        } else {
            store.setFilterItemId(id)
        }
        if (id === 3 && !store.districts) {
            store.setFilterItemId(null)
        }
    }

    switch (id) {
        case 1:
            visibleSelects = store.subjects.map(item => <SubjectItem key={item.id} {...item} />)
            title = store.subjectItem ? store.subjectItem.name : title
            break;
        case 2:
            visibleSelects = store.areas.map(item => <AreasItem key={item.id} {...item} />)
            title = store.areaItem ? store.areaItem.cityName : title
            break;
        case 3:
            visibleSelects = store.districts?.map(item => <DistrictsItem key={item.id} {...item} />)
            title = store.districtItem ? store.districtItem.name : title
            break;

        default:
            break;
    }

    return (
        <>
            <li className="filter__item">
                <div onClick={handlerFilterItem} className="filter__box">
                    {title}
                    <Arrow className="filter__svg" />
                </div>
                {
                    store.filterItemId === id
                        ? <ul className="filter__select select">
                            {visibleSelects && visibleSelects}
                        </ul>
                        : null
                }
            </li>
        </>
    )
})

export default FilterItem
