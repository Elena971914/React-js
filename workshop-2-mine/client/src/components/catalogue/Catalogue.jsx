import {useEffect, useState} from 'react'
import * as gameServices from '../services/gameServices'
import CatalogueItem from './catalogue-item/CatalogueItem'

export default function Catalogue() {
    const [games, setGames] = useState([])
    useEffect(() => {
        gameServices.getAll().then(setGames)}
    ,[])

    return(
        <section id="catalog-page">
            <h1>All Games</h1>
            {games.map(game => <CatalogueItem key={game._id} {...game}/>)}

            {/* <h3 className="no-articles">No articles yet</h3> */}
        </section>
    )
}