import React from 'react';
import PropTypes from "prop-types"
import axios from "axios";
import Movie from "../components/Movie"
import "./Home.css"
import {setMovies} from "../modules/reducers";
import {connect} from "react-redux";


class Home extends React.Component {
    state = {
        isLoading: true,
        movies: []
    }

    getMovies = async () => {
        const {
            data: {
                data: {movies}
            }
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");

        // this.setState({movies: movies, isLoading: false})
        await this.props.setMovies(movies);
    }

    componentDidMount() {
        this.getMovies();
    }

    render() {
        const {isLoading, movies} = this.props;
        return (
            <div>
                {isLoading
                    ? "Loading..."
                    : movies.map(movie => (
                        <section className="container">
                            {isLoading ? (
                                <div className="loader">
                                    <span className="loader__text">Loading...</span>
                                </div>
                            ) : (
                                <div className="movies">
                                    {movies.map(movie => (
                                        <Movie key={movie.id}
                                               poster={movie.medium_cover_image}
                                               summary={movie.summary}
                                               year={movie.year}
                                               id={movie.id}
                                               title={movie.title}
                                               genres={movie.genres}
                                        />
                                    ))}
                                </div>

                            )}
                        </section>
                    ))
                }
            </div>)

    }

}

const mapStateToProps = (state) => ({
    movies: state.movies
});

const mapDispatchToProps = (dispatch) => ({
    setMovies: (data) => dispatch(setMovies(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);
