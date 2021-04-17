import { makeAutoObservable } from 'mobx';

class Store {
    subjects = []
    areas = []
    districts = null
    filterItemId = null
    teachers = null

    constructor() {
        makeAutoObservable(this)
    }

    setSubjects(subjects) {
        this.subjects = subjects
    }
    setAres(areas) {
        this.areas = areas
    }
    setDistricts(districts) {
        this.districts = districts
    }
    setFilterItemId = (id) => {
        this.filterItemId = id
    }

    setSubjectItem(item) {
        this.subjectItem = item

    }
    setAreaItem(item) {
        this.areaItem = item
    }
    setDistrictItem(item) {
        this.districtItem = item
    }
    setTeachersIds(arr) {
        this.teachersIds = arr
    }
    setTeachers = (arr) => {
        this.teachers = arr
    }
}

export default new Store();