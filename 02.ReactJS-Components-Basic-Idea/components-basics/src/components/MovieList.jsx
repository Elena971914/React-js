import Movie from './Movie';
import Heading from './Heading';

export default function MovieList(props) {
    return (
        <div className="movie-list">
            {/* We can write expressions in {}, no statements, no if's */}
            <Heading>{props.headingText}</Heading>

            <ul>
                {/* This can be iterated over */}
                <Movie movieData={props.movies[0]} />
                {/* movieData prop is passed to Movie and in the Movie.jsx it is accessed by props.movieData.title for example*/}
                <Movie movieData={props.movies[1]} />
                <Movie movieData={props.movies[2]} />
                <Movie movieData={props.movies[3]} />
            </ul>
        </div>
    );
}
