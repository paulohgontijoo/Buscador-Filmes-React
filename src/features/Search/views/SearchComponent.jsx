import React, { useState } from "react"
import Imprimir from '../../Imprimir/views/ImprimirPesquisa'

const url = 'http://www.omdbapi.com/'
const title = '?s='
const year = 'y='
const and = '&'
const apikey = '&apikey=872e3fb2'


export default function Search() {
    //Inicialização das constantes de busca e estados 
    const [filmes, setFilmes] = useState('')
    const [nome, setNome] = useState('')
    const [ano, setAno] = useState('')
    const [ordenar, setOrdenar] = useState(false)

    //Handles
    async function handleSubmit(event) {
        event.preventDefault()
        if (nome === '') {
            return <></>
        }
        const response = await fetch(Request())
        const data = await response.json()
        setFilmes(data.Search)
    }

    function Request() {
        let name = nome.replace(/\s+/g, '+')
        if (ano === '') {
            return (url + title + name + apikey)
        } else {
            return (url + title + name + and + year + ano + apikey)
        }
    }
 
    return (
        <>
            <form onSubmit={handleSubmit}>
                <ul>
                    <label>Digite o nome do filme: </label>
                    <input type="text" name="nome" value={nome} onChange={e => setNome(e.target.value)} /><br />
                    <label>Digite o ano (opcional): </label>
                    <input type="number" name="ano" value={ano} onChange={e => setAno(e.target.value)} /><br />
                    <label>Ordenar por ordem alfabética: </label>
                    <fieldset>
                        <label>Crescente: </label>
                        <input type="radio" name="ordenar" value={ordenar} onClick={e => setOrdenar(true)} /><br />
                        <label>Descrescente: </label>
                        <input type="radio" name="ordenar" value={ordenar} onClick={e => setOrdenar(false)} /><br />
                        <label>Não ordenar: </label>
                        <input type="radio" name="ordenar" value={ordenar} onClick={e => setOrdenar(undefined)} /><br />
                    </fieldset>
                    <button type="submit" >Buscar</button>
                </ul>
            </form>
            <div>
                <Imprimir filmes={filmes} ordenar={ordenar} />
            </div>
        </>
    )
}