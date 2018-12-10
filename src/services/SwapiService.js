export default class SwapiService {
    _apiBase = 'https://swapi.co/api';
    _imgBase = 'https://starwars-visualguide.com/assets/img';
    getResoure = async (url) =>{
        const res = await fetch(`${this._apiBase}${url}`)
    
        if (!res.ok){
            throw new Error(`${url} received ${res.status}`)
        }

        return await res.json()
    }

    getAllPerson = async () =>{
        const persons = await this.getResoure('/people/')
        return persons.results.map(this._transformPerson)
    }

    getPerson = async (id) =>{
        const person = await this.getResoure(`/people/${id}/`)
        return this._transformPerson(person)
    }

    getAllPlanets = async () =>{
        const planets = await this.getResoure('/planets/')
        return planets.results.map(this._transformPlanet)
    }

    getPlanet = async (id) =>{
        const planet = await this.getResoure(`/planets/${id}/`)
        return this._transformPlanet(planet)
    }

    getAllStarships = async () =>{
        const starships = await this.getResoure('/starships/')
        return starships.results.map(this._transformStarship);
    }

    getStarships = async (id) =>{
        const starship = await this.getResoure(`/starships/${id}/`)
        return this._transformStarship(starship);
    }

    getPersonImage = (id) =>{
        return `${this._imgBase}/characters/${id}.jpg`
    }

    getPlanetImage = (id) =>{
        return `${this._imgBase}/planets/${id}.jpg`
    }

    getStarshipImage = (id) =>{
        return `${this._imgBase}/starships/${id}.jpg`
    }

    _extractId = (obj) =>{
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