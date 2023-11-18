import {Link} from 'react-router-dom'
import GameDetails from '../../game-details/GameDetails'

export default function GameItem({
    imageUrl, title, category, _id
}) {
    return(
        <div className="allGames">
                <div className="allGames-info">
                    <img src={imageUrl}/>
                    <h6>{category}</h6>
                    <h2>{title}</h2>
                    <Link to={`/games/${_id}`} className="details-button">Details</Link>
                </div>
            </div>
    )
}