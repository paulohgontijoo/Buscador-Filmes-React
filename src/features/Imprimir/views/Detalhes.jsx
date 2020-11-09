import React, { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'

const url = 'http://www.omdbapi.com/'
const t = '?t='
const apikey = '&apikey=872e3fb2'

export default function Detalhes() {
    const [filme, setFilme] = useState('')
    const { titulo } = useParams()

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url + t + titulo + apikey)
            const data = await response.json()
            setFilme(data)
        }
        fetchData()
    },[titulo])


    return (
        <div>
            <h1>{filme.Title} ({filme.Year})</h1>
            <ul>
                <li>Type: {filme.Type}</li>
                <li>Released: {filme.Released}</li>
                <li>Genre: {filme.Genre}</li>
                <li>Director: {filme.Director}</li>
                <li>Actors: {filme.Actors}</li>
                <li>Awards: {filme.Awards}</li>
                <li><strong>Rating</strong></li>
                <ul>
                    <li>Metascore: {filme.Metascore}</li>
                </ul>
            </ul>
            <div>
                <img src={filme.Poster} alt={titulo} />
            </div>
        </div>
    )
}

