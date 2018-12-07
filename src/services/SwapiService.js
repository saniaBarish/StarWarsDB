export default class SwapiService {
    _apiBase = 'https://swapi.co/api'
    async getResoure(url){
        const res = await fetch(`${this._apiBase}${url}`)
    
        if (!res.ok){
            throw new Error(`${url} received ${res.status}`)
        }

        return await res.json()
    }

    async getAllPeople(){
        const res = await this.getResoure('/people/')
        return res.results
    }

    async getPerson(id){
        const res = await this.getResoure(`/people/${id}/`)
        return res
    }

    async getAllPlanets(){
        const res = await this.getResoure('/planets/')
        return res.results
    }

    async getPlanet(id){
        const res = await this.getResoure(`/planets/${id}/`)
        return res
    }

    async getAllStarships(){
        const res = await this.getResoure('/starships/')
        return res.results
    }

    async getStarships(id){
        const res = await this.getResoure(`/starships/${id}/`)
        return res
    }
}