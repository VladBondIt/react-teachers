class HttpService {
    _apiBase = 'https://api.repetit.ru/public/';

    async getResources(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`);
        }
        return await res.json();
    }

    async getSubjects() {
        return await this.getResources('/subjects');
    }

    async getAreas() {
        return await this.getResources('/areas/');
    }
    async getDistricts(id) {
        return await this.getResources(`/districts?AreaId=${id}`);
    }
    async getTeachersId(areaId, districtId, subjectId) {
        const areaIdQuery = areaId ? `&areaId=${areaId}` : ""
        const districtIdQuery = districtId ? `&districtId=${districtId}` : ""
        const subjectIdQuery = subjectId ? `&subjectId=${subjectId}` : ""

        return await this.getResources(`search/teacherIds?${areaIdQuery}${districtIdQuery}${subjectIdQuery}`);
    }

    async getTeachers(some) {

        const temp = some.map((value, i) => {
            return `&Ids[${i}]=${value}`

        }).join('')

        return await this.getResources(`/teachers/short?${temp}`);
    }
}

export default new HttpService();