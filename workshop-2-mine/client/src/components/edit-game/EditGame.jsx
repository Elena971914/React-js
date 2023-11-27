import { useEffect, useState } from "react";
import useForm from "../../hooks/useForm";
import * as gameService from "../../services/gameServices";
import { useNavigate, useParams } from "react-router-dom";

export default function EditGame() {
  const navigate = useNavigate();
  const [game, setGame] = useState({
    title: "",
    category: "",
    maxLevel: "",
    imageUrl: "",
    summary: "",
  });
  const { gameId } = useParams();

  useEffect(() => {
    gameService.getOne(gameId).then(result => setGame(result));
  }, [gameId]);

  const submitEditHandler = async () => {
    try {
      await gameService.edit(gameId, values);
      navigate("/games");
    } catch (err) {
      console.log(err);
    }
  };

  const { onSubmit, onChange, values } = useForm(submitEditHandler, game);

  return (
    <section id="create-page" className="auth">
      <form id="create" onSubmit={onSubmit}>
        <div className="container">
          <h1>Edit Game</h1>
          <label htmlFor="leg-title">Legendary title:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter game title..."
            value={values.title}
            onChange={onChange}
          />

          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            placeholder="Enter game category..."
            value={values.category}
            onChange={onChange}
          />

          <label htmlFor="levels">MaxLevel:</label>
          <input
            type="number"
            id="maxLevel"
            name="maxLevel"
            min="1"
            placeholder="1"
            value={values.maxLevel}
            onChange={onChange}
          />

          <label htmlFor="game-img">Image:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            placeholder="Upload a photo..."
            value={values.image}
            onChange={onChange}
          />

          <label htmlFor="summary">Summary:</label>
          <textarea
            name="summary"
            id="summary"
            value={values.summary}
            onChange={onChange}
          ></textarea>
          <input className="btn submit" type="submit" value="Edit Game" />
        </div>
      </form>
    </section>
  );
}
