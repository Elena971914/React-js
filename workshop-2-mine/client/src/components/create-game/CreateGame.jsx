import * as gameService from "../../services/gameServices";
import { useNavigate } from "react-router-dom";

export default function CreateGame() {
  const navigate = useNavigate();

  const submitFormHandler = async (e) => {
    e.preventDefault();
    const formInfo = Object.fromEntries(new FormData(e.currentTarget));
    try {
      await gameService.create(formInfo);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section id="create-page" className="auth">
      <form id="create" onSubmit={submitFormHandler}>
        <div className="container">
          <h1>Create Game</h1>
          <label htmlFor="leg-title">Legendary title:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter game title..."
          />

          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            placeholder="Enter game category..."
          />

          <label htmlFor="levels">MaxLevel:</label>
          <input
            type="number"
            id="maxLevel"
            name="maxLevel"
            min="1"
            placeholder="1"
          />

          <label htmlFor="game-img">Image:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            placeholder="Upload a photo..."
          />

          <label htmlFor="summary">Summary:</label>
          <textarea name="summary" id="summary"></textarea>
          <input className="btn submit" type="submit" value="Create Game" />
        </div>
      </form>
    </section>
  );
}
