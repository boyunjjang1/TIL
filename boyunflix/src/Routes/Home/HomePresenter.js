import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "../../Components/Loader";

const Container = styled.div`
  padding: 0px 0px;
`;

const HomePresenter = ({nowPlaying, popular, upcoming, error, loading}) => loading ? (<Loader/>) : (
    <Container>
        {/* nowPlaying이 있어야 작동하게끔 코드를 짬 */}
        {nowPlaying && nowPlaying.length > 0 &&
        <Section title="Now Playing">
            {nowPlaying.map(movie=><span key={movie.id}>{movie.title}</span>)}
        </Section>
        }
        {upcoming && upcoming.length > 0 &&
        <Section title="Upcoming Movies">
            {upcoming.map(movie=><span key={movie.id}>{movie.title}</span>)}
        </Section>
        }
        {/*    Secton Component 안에 들어가는 값이 children임*/}
        {popular && popular.length > 0 &&
        <Section title="Popular Movies">
            {popular.map(movie=><span key={movie.id}>{movie.title}</span>)}
        </Section>
        }
    </Container>
);

HomePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    popular: PropTypes.array,
    upcoming: PropTypes.array,
    error: PropTypes.bool.isRequired,
    loading: PropTypes.string
};

export default HomePresenter;