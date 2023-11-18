import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import * as gameServices from '../../services/gameServices'
import * as commentService from '../../services/commentServices'


export default function GameDetails() {
    const [game, setGame] = useState({})
    const {gameId} = useParams()
    const [comments, setComments] = useState([])

    useEffect(() =>{
        gameServices.getOne(gameId).then(setGame)
        
        commentService.getAll().then(setComments)
    }, [])

    const onCommentSubmitHandler = async (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        const username = data.get('username')
        const text = data.get('comment')
        const newComment = await commentService.create(username, text, gameId)
        setComments(state => [...state, newComment])
    }

    return(
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">
                    {game.summary}
                </p>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {comments.map(({username, text, _id})=> (
                            <li key={_id} className="comment">
                            <p>{username}: {text}</p>
                        </li>
                        ))}
                    </ul>
                    {comments.length === 0 && <p className="no-comment">No comments.</p>}
                </div>

                {/* <div className="buttons">
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div> */}
            </div>

            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={onCommentSubmitHandler}>
                    <input type="text" name='username' />
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" value="Add Comment"/>
                </form>
            </article>

        </section>
    )
}