import {useEffect, useState} from 'react'
import * as gameServices from '../../services/gameServices'
import GameItem from './game-item/GameItem'

export default function GameList() {
    const [games, setGames] = useState([])
    useEffect(() => {
        gameServices.getAll().then(setGames)}
    ,[])

    return(
        <section id="catalog-page">
            <h1>All Games</h1>
            {games.map(game => <GameItem key={game._id} {...game}/>)}

            {/* <h3 className="no-articles">No articles yet</h3> */}
        </section>
    )
}