import MovieList from './components/MovieList';
import Timer from './components/Timer';
import Counter from './components/Counter';
import movies from './assets/movies';
import './App.css'

function App() {
    return (
        <div>
            {/* <Heading> The text between the opening and closing tag is passed as a children </Heading> */}
            <h1>My first Dynamic React Application</h1>

            <Counter />

            <Timer startTime={5} />
                    {/* array of movie objects */}
            <MovieList movies={movies} headingText="Movie List" />
        </div>
    )
}

export default App
