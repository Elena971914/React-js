import { useState, useEffect, useContext, useReducer } from "react";
import { useParams } from "react-router-dom";
import * as gameServices from "../../services/gameServices";
import * as commentService from "../../services/commentServices";
import AuthContext from "../../contexts/authContext";
import { reducer } from "../../reducers/reducer";
import useForm from "../../hooks/useForm";


export default function GameDetails() {
  const { email, id } = useContext(AuthContext);
  const [game, setGame] = useState({});
  const { gameId } = useParams();
  // const [comments, setComments] = useState([])
  const [comments, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    gameServices.getOne(gameId).then(setGame);

    commentService
      .getAll(gameId)
      .then((result) => dispatch({ type: "GET_ALL_COMMENTS", value: result }));
  }, [gameId]);

  const onCommentSubmitHandler = async (e) => {
    // e.preventDefault();
    // const data = new FormData(e.currentTarget);
    // const text = data.get("comment");
    const newComment = await commentService.create(gameId, values.comment);
    newComment.owner = { email }
    dispatch({type: "ADD_NEW_COMMENT", value: newComment})
    // setComments((state) => [...state, { ...newComment, owner: email }]);
  };

  const {onSubmit, onChange, values} = useForm(onCommentSubmitHandler, [])

  return (
    <section id="game-details">
      <h1>Game Details</h1>
      <div className="info-section">
        <div className="game-header">
          <img className="game-img" src={game.imageUrl} />
          <h1>{game.title}</h1>
          <span className="levels">MaxLevel: {game.maxLevel}</span>
          <p className="type">{game.category}</p>
        </div>

        <p className="text">{game.summary}</p>

        <div className="details-comments">
          <h2>Comments:</h2>
          <ul>
            {comments.map(({ _id, text, owner: { email } }) => (
              <li key={_id} className="comment">
                <p>
                  {email}: {text}
                </p>
              </li>
            ))}
          </ul>
          {comments.length === 0 && <p className="no-comment">No comments.</p>}
        </div>

        {id === game._ownerId && <div className="buttons">
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div>}
      </div>

      <article className="create-comment">
        <label>Add new comment:</label>
        <form className="form" onSubmit={onSubmit}>
          <textarea name="comment" value={values.comment} onChange={onChange} placeholder="Comment......"></textarea>
          <input className="btn submit" type="submit" value="Add Comment" />
        </form>
      </article>
    </section>
  );
}
