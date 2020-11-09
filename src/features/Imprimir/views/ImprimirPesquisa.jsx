import React from 'react'
import { Link } from 'react-router-dom'

function OrganizarDados(filmes) {
    console.log(filmes)
    if (filmes === "" || filmes === undefined || filmes === null || filmes.length === 0) {
        return <></>
    } else {
        try {
            let lista = []
            filmes.forEach((filme, keys) => {
                let titulo = String(filme.titulo)
                let imagem = String(filme.imagem)
                let year = String(filme.year)
                lista.push(
                    <div>
                        <li key={keys}>
                            <strong>
                                Título: <Link to={`/detalhes/${titulo}`}>{titulo}</Link>
                            </strong>
                        </li>
                        <p>Ano: {year}</p>
                        <img src={imagem} alt={titulo} />
                    </div>)
            });
            return lista
        }catch(e){
            console.log(e)
        }
    }
}

function CapturarDados({ filmes, ordenar }) {
    if (filmes === "" || filmes === undefined || filmes === null || filmes.length === 0) {
        return <></>
    } else {
        let lista = []
        filmes.forEach((filme, keys) => {
            let titulo = String(filme.Title)
            let imagem = String(filme.Poster)
            let year = String(filme.Year)
            lista.push({ titulo, imagem, year })
        });

        if (ordenar === true) {
            lista.sort(function (a, b) {
                return (a.titulo > b.titulo) ? 1 : ((b.titulo > a.titulo) ? -1 : 0);
            })
            return lista
        } else if (ordenar === false) {
            lista.sort(function (a, b) {
                return (a.titulo < b.titulo) ? 1 : ((b.titulo < a.titulo) ? -1 : 0);
            })
            return lista
        } else {
            return lista
        }
    }
}

function Dados(filmes, ordenar) {
    let dados = CapturarDados(filmes, ordenar)
    let organizar = OrganizarDados(dados, ordenar)
    return organizar
}

function Imprimir(filmes, ordenar) {
    return (
        <>
            <ul>
                {Dados(filmes, ordenar)}
            </ul>
        </>
    )
}

export default Imprimir