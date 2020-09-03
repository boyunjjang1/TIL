import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";
import Helmet from "react-helmet";

const Container = styled.div`
  padding: 20px;
`;

const HomePresenter = ({nowPlaying, popular, upcoming, error, loading}) => (
    <>
        <Helmet>
            <title>Movies | Boyunflix</title>
        </Helmet>
        {loading ? (<Loader/>) : (
        <Container>
            {/* nowPlaying이 있어야 작동하게끔 코드를 짬 */}
            {nowPlaying && nowPlaying.length > 0 &&
            <Section title="Now Playing">
                {nowPlaying.map(movie=><span key={movie.id}>
                    <Poster key={movie.id} id={movie.id} title={movie.original_title} imageUrl={movie.poster_path}
                            rating={movie.vote_average}
                            year={movie.release_date && movie.release_date.substring(0,4)}
                            isMovie={true}/>
                </span>)}
            </Section>
            }
            {upcoming && upcoming.length > 0 &&
            <Section title="Upcoming Movies">
                {upcoming.map(movie=>(
                    <Poster key={movie.id} id={movie.id} title={movie.original_title} imageUrl={movie.poster_path}
                            rating={movie.vote_average}
                            year={movie.release_date && movie.release_date.substring(0,4)}
                            isMovie={true}/>
                ))}
            </Section>
            }
            {/*    Secton Component 안에 들어가는 값이 children임*/}
            {popular && popular.length > 0 &&
            <Section title="Popular Movies">
                {popular.map(movie=>(
                    <Poster key={movie.id} id={movie.id} title={movie.original_title} imageUrl={movie.poster_path}
                            rating={movie.vote_average}
                            year={movie.release_date && movie.release_date.substring(0,4)}
                            isMovie={true}/>
                ))}
            </Section>
            }
            {error && <Message color="red" text={error}/>}
        </Container>)}
    </>
);

HomePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    popular: PropTypes.array,
    upcoming: PropTypes.array,
    error: PropTypes.bool.isRequired,
    loading: PropTypes.string
};

export default HomePresenter;