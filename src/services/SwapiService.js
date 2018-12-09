export default class SwapiService {
    _apiBase = 'https://swapi.co/api'
    async getResoure(url){
        const res = await fetch(`${this._apiBase}${url}`)
    
        if (!res.ok){
            throw new Error(`${url} received ${res.status}`)
        }

        return await res.json()
    }

    async getAllPerson(){
        const persons = await this.getResoure('/people/')
        return persons.results.map(this._transformPerson)
    }

    async getPerson(id){
        const person = await this.getResoure(`/people/${id}/`)
        return this._transformPerson(person)
    }

    async getAllPlanets(){
        const planets = await this.getResoure('/planets/')
        return planets.results.map(this._transformPlanet)
    }

    async getPlanet(id){
        const planet = await this.getResoure(`/planets/${id}/`)
        return this._transformPlanet(planet)
    }

    async getAllStarships(){
        const starships = await this.getResoure('/starships/')
        return starships.results.map(this._transformStarship);
    }

    async getStarships(id){
        const starship = await this.getResoure(`/starships/${id}/`)
        return this._transformStarship(starship);
    }

    _extractId(obj){
        const RegExp = /\/([0-9]*)\/$/;
        return obj.url.match(RegExp)[1];
    }

    _transformPlanet = (planet) =>{
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }

    _transformPerson = (person) =>{
        return{
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    }

    _transformStarship = (starship) =>{
        return{
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity
        }
    }
}